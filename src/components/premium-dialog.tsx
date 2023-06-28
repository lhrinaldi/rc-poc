import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function PremiumDialog({
  open,
  content,
}: {
  open: boolean;
  content?: object;
}) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Premium content</DialogTitle>
          <DialogDescription>
            You are now a premium subscriber.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          Entitlements:
          <code>{JSON.stringify(content ?? {}, null, 2)}</code>
        </div>
      </DialogContent>
    </Dialog>
  );
}
