import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useSWR from "swr";
import { axios } from "../lib/axios";

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function PaywallDialog({
  open,
  username,
}: {
  open: boolean;
  username?: string;
}) {
  const { data: response, isLoading } = useSWR(
    open && username ? "/api/offerings" : null,
    (path) => axios.get(path)
  );

  console.log({ response });

  if (isLoading || !response) return null;

  const { offerings, products } = response.data;

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Paywall</DialogTitle>
          <DialogDescription>
            Subscribe to one of our packages:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {offerings.items.map((offering: any) => (
            <div
              key={offering.id}
              className="flex flex-col gap-2 p-4 border- border-gray-400 rounded-md border-solid border-2"
            >
              {offering.packages.items.map((pkg: any) =>
                pkg.products.items.map((item: any) => (
                  <form
                    key={item.product.store_identifier}
                    action="/api/checkout"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      id="product-id"
                      name="product_id"
                      value={item.product.store_identifier}
                    />
                    <div>Package: {pkg.display_name}</div>
                    <div>Product: {item.product.display_name}</div>
                    <div>
                      Price:
                      {currencyFormat.format(
                        products[item.product.store_identifier].default_price
                          .unit_amount / 100
                      )}
                    </div>
                    <Button>Subscribe to Premium</Button>
                  </form>
                ))
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
