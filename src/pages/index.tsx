import { Inter } from "next/font/google";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { PaywallDialog } from "../components/paywall-dialog";
import { ProfileForm } from "../components/profile-form";
import { axios } from "../lib/axios";
import { PremiumDialog } from "../components/premium-dialog";

const inter = Inter({ subsets: ["latin"] });

/**
 * The take is:
 *
 * 1. Retrive entitlement from RC
 * 2. In case no entitlement, when submit gets clicked:
 *
 * 1. Retrieve offerings + products from a /api endpoint
 * 2. Build modal
 * 3. When go to checkout gets clicked build session and redirect to checkout
 */

export default function Home() {
  const [username, setUsername] = useState<string>();
  const { data: response, isLoading } = useSWR(
    username ? ["/api/entitlements", username] : null,
    ([path, username]) =>
      axios.get(path, {
        params: {
          user_id: username,
        },
      })
  );
  const subStatus = useMemo(() => {
    if (isLoading || !response) return undefined;

    const { subscriber } = response.data;

    return process.env.NEXT_PUBLIC_REVCAT_ENTITLEMENT_ID in
      subscriber.entitlements
      ? "premium"
      : "none";
  }, [isLoading, response]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ProfileForm
        onSubmit={(values) => {
          setUsername(values.username);
        }}
      />
      <PaywallDialog open={subStatus === "none"} username={username} />
      <PremiumDialog
        open={subStatus === "premium"}
        content={response?.data.subscriber.entitlements}
      />
    </main>
  );
}
