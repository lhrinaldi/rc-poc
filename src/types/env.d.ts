declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_PRIVATE_KEY: string;
      REVCAT_PRIVATE_KEY: string;
      REVCAT_PUBLIC_KEY: string;
      REVCAT_PROJECT_ID: string;
      STRIPE_WEBHOOK_SECRET: string;
      DOMAIN: string;
      NEXT_PUBLIC_REVCAT_ENTITLEMENT_ID: string;
    }
  }
}

export {};
