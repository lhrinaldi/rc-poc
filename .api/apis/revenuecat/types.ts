import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type DeferAGoogleSubscriptionBodyParam = FromSchema<
  typeof schemas.DeferAGoogleSubscription.body
>;
export type DeferAGoogleSubscriptionMetadataParam = FromSchema<
  typeof schemas.DeferAGoogleSubscription.metadata
>;
export type DeferAGoogleSubscriptionResponse200 = FromSchema<
  (typeof schemas.DeferAGoogleSubscription.response)['200']
>;
export type DeleteOfferingOverrideMetadataParam = FromSchema<
  typeof schemas.DeleteOfferingOverride.metadata
>;
export type DeleteOfferingOverrideResponse201 = FromSchema<
  (typeof schemas.DeleteOfferingOverride.response)['201']
>;
export type DeleteSubscriberMetadataParam = FromSchema<typeof schemas.DeleteSubscriber.metadata>;
export type DeleteSubscriberResponse200 = FromSchema<
  (typeof schemas.DeleteSubscriber.response)['200']
>;
export type GetOfferingsMetadataParam = FromSchema<typeof schemas.GetOfferings.metadata>;
export type GetOfferingsResponse200 = FromSchema<(typeof schemas.GetOfferings.response)['200']>;
export type GetOfferingsResponse400 = FromSchema<(typeof schemas.GetOfferings.response)['400']>;
export type GetOfferingsResponse403 = FromSchema<(typeof schemas.GetOfferings.response)['403']>;
export type GrantAPromotionalEntitlementBodyParam = FromSchema<
  typeof schemas.GrantAPromotionalEntitlement.body
>;
export type GrantAPromotionalEntitlementMetadataParam = FromSchema<
  typeof schemas.GrantAPromotionalEntitlement.metadata
>;
export type GrantAPromotionalEntitlementResponse201 = FromSchema<
  (typeof schemas.GrantAPromotionalEntitlement.response)['201']
>;
export type OverrideOfferingMetadataParam = FromSchema<typeof schemas.OverrideOffering.metadata>;
export type OverrideOfferingResponse201 = FromSchema<
  (typeof schemas.OverrideOffering.response)['201']
>;
export type ReceiptsBodyParam = FromSchema<typeof schemas.Receipts.body>;
export type ReceiptsMetadataParam = FromSchema<typeof schemas.Receipts.metadata>;
export type ReceiptsResponse200 = FromSchema<(typeof schemas.Receipts.response)['200']>;
export type RefundAGoogleSubscriptionMetadataParam = FromSchema<
  typeof schemas.RefundAGoogleSubscription.metadata
>;
export type RefundAGoogleSubscriptionResponse200 = FromSchema<
  (typeof schemas.RefundAGoogleSubscription.response)['200']
>;
export type RevokeAGoogleSubscriptionMetadataParam = FromSchema<
  typeof schemas.RevokeAGoogleSubscription.metadata
>;
export type RevokeAGoogleSubscriptionResponse200 = FromSchema<
  (typeof schemas.RevokeAGoogleSubscription.response)['200']
>;
export type RevokePromotionalEntitlementsMetadataParam = FromSchema<
  typeof schemas.RevokePromotionalEntitlements.metadata
>;
export type RevokePromotionalEntitlementsResponse200 = FromSchema<
  (typeof schemas.RevokePromotionalEntitlements.response)['200']
>;
export type SubscribersMetadataParam = FromSchema<typeof schemas.Subscribers.metadata>;
export type SubscribersResponse200 = FromSchema<(typeof schemas.Subscribers.response)['200']>;
export type SubscribersResponse400 = FromSchema<(typeof schemas.Subscribers.response)['400']>;
export type SubscribersResponse401 = FromSchema<(typeof schemas.Subscribers.response)['401']>;
export type SubscribersattributionBodyParam = FromSchema<
  typeof schemas.Subscribersattribution.body
>;
export type SubscribersattributionMetadataParam = FromSchema<
  typeof schemas.Subscribersattribution.metadata
>;
export type SubscribersattributionResponse200 = FromSchema<
  (typeof schemas.Subscribersattribution.response)['200']
>;
export type UpdateSubscriberAttributesBodyParam = FromSchema<
  typeof schemas.UpdateSubscriberAttributes.body
>;
export type UpdateSubscriberAttributesMetadataParam = FromSchema<
  typeof schemas.UpdateSubscriberAttributes.metadata
>;
export type UpdateSubscriberAttributesResponse200 = FromSchema<
  (typeof schemas.UpdateSubscriberAttributes.response)['200']
>;
export type UpdateSubscriberAttributesResponse400 = FromSchema<
  (typeof schemas.UpdateSubscriberAttributes.response)['400']
>;
