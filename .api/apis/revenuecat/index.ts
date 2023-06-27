import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'revenuecat/1.0 (api/6.0.0)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Gets the latest subscriber info or creates one if it doesn't exist.
   *
   * @summary Get or Create Subscriber
   */
  subscribers(
    metadata: types.SubscribersMetadataParam
  ): Promise<
    | FetchResponse<200, types.SubscribersResponse200>
    | FetchResponse<400, types.SubscribersResponse400>
    | FetchResponse<401, types.SubscribersResponse401>
  > {
    return this.core.fetch('/subscribers/{app_user_id}', 'get', metadata);
  }

  /**
   * Permanently deletes a subscriber.
   *
   * @summary Delete Subscriber
   */
  deleteSubscriber(
    metadata: types.DeleteSubscriberMetadataParam
  ): Promise<FetchResponse<200, types.DeleteSubscriberResponse200>> {
    return this.core.fetch('/subscribers/{app_user_id}', 'delete', metadata);
  }

  /**
   * Records a purchase for a user from iOS, Android, or Stripe and will create a user if
   * they don't already exist.
   *
   * @summary Create a Purchase
   */
  receipts(
    body: types.ReceiptsBodyParam,
    metadata: types.ReceiptsMetadataParam
  ): Promise<FetchResponse<200, types.ReceiptsResponse200>> {
    return this.core.fetch('/receipts', 'post', body, metadata);
  }

  /**
   * Attaches attribution data to a subscriber from specific supported networks.
   *
   * @summary Add User Attribution Data
   */
  subscribersattribution(
    body: types.SubscribersattributionBodyParam,
    metadata: types.SubscribersattributionMetadataParam
  ): Promise<FetchResponse<200, types.SubscribersattributionResponse200>> {
    return this.core.fetch('/subscribers/{app_user_id}/attribution', 'post', body, metadata);
  }

  /**
   * Grants a user a promotional entitlement. Does not override or defer a store transaction,
   * applied simultaneously.
   *
   * @summary Grant a Promotional Entitlement
   */
  grantAPromotionalEntitlement(
    body: types.GrantAPromotionalEntitlementBodyParam,
    metadata: types.GrantAPromotionalEntitlementMetadataParam
  ): Promise<FetchResponse<201, types.GrantAPromotionalEntitlementResponse201>> {
    return this.core.fetch(
      '/subscribers/{app_user_id}/entitlements/{entitlement_identifier}/promotional',
      'post',
      body,
      metadata
    );
  }

  /**
   * Revokes all promotional entitlements for a given entitlement identifier and app user ID.
   *
   * @summary Revoke Promotional Entitlements
   */
  revokePromotionalEntitlements(
    metadata: types.RevokePromotionalEntitlementsMetadataParam
  ): Promise<FetchResponse<200, types.RevokePromotionalEntitlementsResponse200>> {
    return this.core.fetch(
      '/subscribers/{app_user_id}/entitlements/{entitlement_identifier}/revoke_promotionals',
      'post',
      metadata
    );
  }

  /**
   * Immediately revokes access to a Google Subscription and issues a refund for the last
   * purchase. If you want to refund a one-time Google purchase, see [refund a Google
   * purchase](ref:refund-a-google-subscription).
   *
   * @summary Google Play: Refund and Revoke Subscription
   */
  revokeAGoogleSubscription(
    metadata: types.RevokeAGoogleSubscriptionMetadataParam
  ): Promise<FetchResponse<200, types.RevokeAGoogleSubscriptionResponse200>> {
    return this.core.fetch(
      '/subscribers/{app_user_id}/subscriptions/{product_identifier}/revoke',
      'post',
      metadata
    );
  }

  /**
   * Updates subscriber attributes for a user.
   *
   * @summary Update Subscriber Attributes
   */
  updateSubscriberAttributes(
    body: types.UpdateSubscriberAttributesBodyParam,
    metadata: types.UpdateSubscriberAttributesMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateSubscriberAttributesResponse200>
    | FetchResponse<400, types.UpdateSubscriberAttributesResponse400>
  >;
  /**
   * Updates subscriber attributes for a user.
   *
   * @summary Update Subscriber Attributes
   */
  updateSubscriberAttributes(
    metadata: types.UpdateSubscriberAttributesMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateSubscriberAttributesResponse200>
    | FetchResponse<400, types.UpdateSubscriberAttributesResponse400>
  >;
  /**
   * Updates subscriber attributes for a user.
   *
   * @summary Update Subscriber Attributes
   */
  updateSubscriberAttributes(
    body?:
      | types.UpdateSubscriberAttributesBodyParam
      | types.UpdateSubscriberAttributesMetadataParam,
    metadata?: types.UpdateSubscriberAttributesMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateSubscriberAttributesResponse200>
    | FetchResponse<400, types.UpdateSubscriberAttributesResponse400>
  > {
    return this.core.fetch('/subscribers/{app_user_id}/attributes', 'post', body, metadata);
  }

  /**
   * Defers the purchase of a Google Subscription to a later date.
   *
   * @summary Google Play: Defer a Subscription
   */
  deferAGoogleSubscription(
    body: types.DeferAGoogleSubscriptionBodyParam,
    metadata: types.DeferAGoogleSubscriptionMetadataParam
  ): Promise<FetchResponse<200, types.DeferAGoogleSubscriptionResponse200>> {
    return this.core.fetch(
      '/subscribers/{app_user_id}/subscriptions/{product_identifier}/defer',
      'post',
      body,
      metadata
    );
  }

  /**
   * Overrides the current Offering for a specific user
   *
   * @summary Override a Customer's Current Offering
   */
  overrideOffering(
    metadata: types.OverrideOfferingMetadataParam
  ): Promise<FetchResponse<201, types.OverrideOfferingResponse201>> {
    return this.core.fetch(
      '/subscribers/{app_user_id}/offerings/{offering_uuid}/override',
      'post',
      metadata
    );
  }

  /**
   * Reset the offering overrides back to the current offering for a specific user
   *
   * @summary Remove a Customer's Current Offering Override
   */
  deleteOfferingOverride(
    metadata: types.DeleteOfferingOverrideMetadataParam
  ): Promise<FetchResponse<201, types.DeleteOfferingOverrideResponse201>> {
    return this.core.fetch('/subscribers/{app_user_id}/offerings/override', 'delete', metadata);
  }

  /**
   * Gets the offerings for your app.
   *
   * @summary Get Offerings
   */
  getOfferings(
    metadata: types.GetOfferingsMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetOfferingsResponse200>
    | FetchResponse<400, types.GetOfferingsResponse400>
    | FetchResponse<403, types.GetOfferingsResponse403>
  > {
    return this.core.fetch('/subscribers/{app_user_id}/offerings', 'get', metadata);
  }

  /**
   * Issues a refund for the most recent purchase of a Google product and revokes access.
   * Works for subscription and non-subscription purchases that occurred in the last 365
   * days.
   *
   * @summary Google Play: Refund and Revoke Purchase
   */
  refundAGoogleSubscription(
    metadata: types.RefundAGoogleSubscriptionMetadataParam
  ): Promise<FetchResponse<200, types.RefundAGoogleSubscriptionResponse200>> {
    return this.core.fetch(
      '/subscribers/{app_user_id}/transactions/{store_transaction_identifier}/refund',
      'post',
      metadata
    );
  }
}

const createSDK = (() => {
  return new SDK();
})();
export default createSDK;

export type {
  DeferAGoogleSubscriptionBodyParam,
  DeferAGoogleSubscriptionMetadataParam,
  DeferAGoogleSubscriptionResponse200,
  DeleteOfferingOverrideMetadataParam,
  DeleteOfferingOverrideResponse201,
  DeleteSubscriberMetadataParam,
  DeleteSubscriberResponse200,
  GetOfferingsMetadataParam,
  GetOfferingsResponse200,
  GetOfferingsResponse400,
  GetOfferingsResponse403,
  GrantAPromotionalEntitlementBodyParam,
  GrantAPromotionalEntitlementMetadataParam,
  GrantAPromotionalEntitlementResponse201,
  OverrideOfferingMetadataParam,
  OverrideOfferingResponse201,
  ReceiptsBodyParam,
  ReceiptsMetadataParam,
  ReceiptsResponse200,
  RefundAGoogleSubscriptionMetadataParam,
  RefundAGoogleSubscriptionResponse200,
  RevokeAGoogleSubscriptionMetadataParam,
  RevokeAGoogleSubscriptionResponse200,
  RevokePromotionalEntitlementsMetadataParam,
  RevokePromotionalEntitlementsResponse200,
  SubscribersMetadataParam,
  SubscribersResponse200,
  SubscribersResponse400,
  SubscribersResponse401,
  SubscribersattributionBodyParam,
  SubscribersattributionMetadataParam,
  SubscribersattributionResponse200,
  UpdateSubscriberAttributesBodyParam,
  UpdateSubscriberAttributesMetadataParam,
  UpdateSubscriberAttributesResponse200,
  UpdateSubscriberAttributesResponse400,
} from './types';
