import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.body.user_id;
  const product = await stripe.products.retrieve(req.body.product_id);
  const priceId =
    typeof product.default_price === "string"
      ? product.default_price
      : product.default_price?.id;

  if (!priceId || !userId) return res.status(404);

  const session = await stripe.checkout.sessions.create({
    client_reference_id: userId,
    billing_address_collection: "auto",
    line_items: [
      {
        price: priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],

    mode: "subscription",
    success_url: process.env.DOMAIN,
    cancel_url: process.env.DOMAIN,
    // BIG QUESTION: https://www.revenuecat.com/docs/stripe#3-create-subscriptions-on-stripe
    // customer_creation: "always",
    subscription_data: {
      trial_period_days: 7,
    },
  });

  if (!session || !session.url) return res.status(405);

  console.log(session.url);

  res.redirect(303, session.url);
}
