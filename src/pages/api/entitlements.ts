// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import rc from "@api/revenuecat";
import type { NextApiRequest, NextApiResponse } from "next";

rc.auth(process.env.REVCAT_PUBLIC_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.url) return res.status(400);

  const userId = req.query.user_id?.toString();

  if (!userId) return res.status(400);

  const response = await rc.subscribers({
    app_user_id: userId,
    "X-Platform": "stripe",
  });

  return res.status(response.status).json(response.data);
}
