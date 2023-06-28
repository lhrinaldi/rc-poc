// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import rc from "@api/revenuecat";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// needs raw body - not parsed
export const config = {
  api: {
    bodyParser: false,
  },
};

const buffer = (req: NextApiRequest) => {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", reject);
  });
};

// https://stripe.com/docs/payments/checkout/fulfill-orders
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
    apiVersion: "2022-11-15",
  });

  rc.auth(process.env.REVCAT_PUBLIC_KEY);

  const payload = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  if (!sig) {
    return res
      .status(400)
      .send("Webhook Error: No stripe-signature Header found");
  }

  try {
    event = stripe.webhooks.constructEvent(payload, sig, WEBHOOK_SECRET);
  } catch (err) {
    const error = err as Error;
    console.log(error.message);

    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    // Retrieve the session
    const session = event.data.object as Stripe.Checkout.Session;

    if (session) {
      // get the associated app user ID and token
      const userId = session.client_reference_id;
      const token = session.subscription as string;
      const stripeCustomer = session.customer;

      if (!userId || !token || !stripeCustomer) {
        res.status(400).end();
        return;
      }

      // print to log
      console.log({ userId });
      console.log({ token });
      console.log({ stripeCustomer });

      // - Post receipt data to RevenueCat
      await rc.receipts(
        {
          app_user_id: userId,
          fetch_token: token,
          attributes: {
            stripe_customer_id: { value: session.customer },
          },
        },
        {
          "X-Platform": "stripe",
        }
      );

      // - Respond to Stripe to let them know we got the webhook
      res.status(200).end();
    } else {
      res.status(400).send("Web Hook Error: No purchase found in webhook body");
    }
  }

  res.status(200).end();
}
