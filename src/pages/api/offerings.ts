// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import rc from "@api/revenuecat-v2";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2022-11-15",
});

rc.auth(process.env.REVCAT_PRIVATE_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projectID = "6af4e85c";
  const response = await rc.listOfferings({
    project_id: projectID,
    limit: 20,
    expand: ["items.package.product"],
  });

  if (response.status === 200) {
    const { data: offerings } = response;

    const productsIds = offerings.items.flatMap((offering) => {
      if (!offering.packages) return [];

      return offering.packages.items.flatMap((pkg) => {
        if (!pkg.products) return [];

        return pkg.products.items.flatMap((item) => {
          return item.product?.store_identifier
            ? [item.product.store_identifier]
            : [];
        });
      });
    });

    const productsPromises = await Promise.allSettled(
      productsIds.map((productId) =>
        stripe.products.retrieve(productId, {
          expand: ["default_price"],
        })
      )
    );
    const products = productsPromises.reduce<Record<string, Stripe.Product>>(
      (wipProducts, result) => {
        if (result.status === "fulfilled") {
          Reflect.set(wipProducts, result.value.id, result.value);
        }

        return wipProducts;
      },
      {}
    );

    return res.status(200).json({
      offerings,
      products,
    });
  }

  return res.status(response.status);
}
