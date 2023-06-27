declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_PRIVATE_KEY: string;
      REVCAT_PRIVATE_KEY: string;
      REVCAT_PUBLIC_KEY: string;
      DOMAIN: string;
      NEXT_PUBLIC_REVCAT_ENTITLEMENT_ID: string;
    }
  }
}

export {};
