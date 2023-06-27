// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import rc from "@api/revenuecat";

const RC_APP_PUBLIC_API_KEY = "strp_TnqoOYJXxSMjwGDbrqYLUmGYwKn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.url) return res.status(400);

  const userId = req.query.user_id?.toString();

  if (!userId) return res.status(400);

  rc.auth(RC_APP_PUBLIC_API_KEY);

  const response = await rc.subscribers({
    app_user_id: userId,
    "X-Platform": "stripe",
  });

  return res.status(response.status).json(response.data);
}
