const DeferAGoogleSubscription = {
  body: {
    type: 'object',
    required: ['expiry_time_ms'],
    properties: {
      expiry_time_ms: {
        type: 'integer',
        description:
          'The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.',
        format: 'int32',
        minimum: -2147483648,
        maximum: 2147483647,
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
          product_identifier: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The identifier of the product belonging to the subscription that is being revoked.',
          },
        },
        required: ['app_user_id', 'product_identifier'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const DeleteOfferingOverride = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
        },
        required: ['app_user_id'],
      },
    ],
  },
  response: { '201': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const DeleteSubscriber = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user id, or alias, of the subscriber.',
          },
        },
        required: ['app_user_id'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const GetOfferings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              "The app user ID used with the mobile SDK. The app user ID doesn't have to exist for the endpoint to work but it can affect the current offering depending on whether you have any [Experiments](doc:experiments) running or have [overridden the current offering](ref:override-offering) for this specific app user ID.",
          },
        },
        required: ['app_user_id'],
      },
      {
        type: 'object',
        properties: {
          'X-Platform': {
            type: 'string',
            default: 'ios',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              "Set the X-Platform header to fetch that platform's packages. Can be `ios`, `android`, `amazon`, or `stripe`.",
          },
        },
        required: ['X-Platform'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        current_offering_id: { type: 'string', examples: ['default'] },
        offerings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              description: { type: 'string', examples: ['The default offering'] },
              identifier: { type: 'string', examples: ['default'] },
              packages: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    identifier: { type: 'string', examples: ['$rc_monthly'] },
                    platform_product_identifier: {
                      type: 'string',
                      examples: ['monthly_free_trial'],
                    },
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: {
        code: { type: 'integer', default: 0, examples: [7000] },
        message: { type: 'string', examples: ['Invalid Platform.'] },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: {
        code: { type: 'integer', default: 0, examples: [7243] },
        message: { type: 'string', examples: ['Secret API keys should not be used in your app.'] },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GrantAPromotionalEntitlement = {
  body: {
    type: 'object',
    required: ['duration'],
    properties: {
      duration: {
        type: 'string',
        description:
          'How long of a duration to grant the promotional entitlement for. See below for possible values.',
      },
      start_time_ms: {
        type: 'string',
        description:
          'A Unix epoch in milliseconds for when the promotional entitlement should have been considered as started. If not provided, the entitlement will be granted immediately. Future dates will also be granted immediately and will be active until the expiration date lapses.',
        format: 'date-time',
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
          entitlement_identifier: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The identifier for the entitlement you want to grant to the user.',
          },
        },
        required: ['app_user_id', 'entitlement_identifier'],
      },
    ],
  },
  response: { '201': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const OverrideOffering = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
          offering_uuid: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The UUID for the offering you want to set as the override for the user. The UUID can be found in the URL of the offering. For example, the offering UUID in https://app.revenuecat.com/apps/abcd1234/offerings/ofrng1234567abc is `ofrng1234567abc`.',
          },
        },
        required: ['app_user_id', 'offering_uuid'],
      },
    ],
  },
  response: { '201': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const Receipts = {
  body: {
    type: 'object',
    required: ['app_user_id', 'fetch_token'],
    properties: {
      app_user_id: {
        type: 'string',
        description: 'App User ID of the user the receipt is associated with.',
      },
      fetch_token: {
        type: 'string',
        description:
          'For iOS, the base64 encoded receipt file, for Android the receipt token, for Amazon the receipt, and for Stripe the subscription ID or the Stripe Checkout Session ID.',
      },
      product_id: {
        type: 'string',
        description: 'The Apple, Google, or Amazon product identifier or SKU. Required for Google.',
        default: 'com.my.product.iap',
      },
      price: {
        type: 'number',
        description: 'The price of the product. **Required if you provide a currency.**',
        default: 1.99,
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      currency: {
        type: 'string',
        description:
          'The currency of the product. The currency must be in [ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217). **Required if you provide a price.**',
        default: 'USD',
      },
      payment_mode: {
        type: 'string',
        description:
          'Optionally used by the iOS SDK to communicate intro pricing periods. Either `pay_as_you_go = 0`, `pay_up_front = 1`, or `free_trial = 2`. Defaults to `2` (free trial) if an introductory period is detected in the receipt but this value is not provided.',
      },
      introductory_price: {
        type: 'number',
        description: 'Introductory price paid',
        format: 'float',
        minimum: -3.402823669209385e38,
        maximum: 3.402823669209385e38,
      },
      is_restore: {
        type: 'string',
        description:
          'If true, the fetch token will trigger your configured [restore behavior](https://www.revenuecat.com/docs/restoring-purchases#restore-behavior) for any other users sharing the same fetch token.',
        default: 'false',
      },
      presented_offering_identifier: {
        type: 'string',
        description:
          "Optional. The offering that was presented to the user at the time of purchase.  This will be attached to any new transactions in this fetch token and will be available in ETL exports and webhooks. This is mostly useful if you're sending fetch tokens from your backend.",
      },
      attributes: {
        properties: {
          key_name: {
            type: 'object',
            description:
              'Mapping of key names to subscriber attribute objects. See the [attributes object](ref:subscribers#the-subscriber-attribute-object).',
            required: ['value'],
            properties: {
              value: {
                type: 'string',
                description:
                  'The value of the attribute. If the value is `null` or an empty string, the attribute will be deleted.',
              },
              updated_at_ms: {
                type: 'string',
                description:
                  'UNIX epoch in milliseconds of when the attribute was updated. This value is used to resolve conflicts, an attribute will only be updated if the new `updated_at_ms` value is newer than the value for the stored attribute.',
                format: 'date-time',
              },
            },
          },
        },
        type: 'object',
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          'X-Platform': {
            type: 'string',
            default: 'ios',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The platform this purchase is for. Either `ios`, `android`, `amazon`, `macos`, `uikitformac`, or `stripe`',
          },
        },
        required: ['X-Platform'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const RefundAGoogleSubscription = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
          store_transaction_identifier: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The identifier of the transaction to refund. Example: GPA.3309-9122-6177-45730',
          },
        },
        required: ['app_user_id', 'store_transaction_identifier'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const RevokeAGoogleSubscription = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
          product_identifier: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The identifier of the product belonging to the subscription that is being revoked.',
          },
        },
        required: ['app_user_id', 'product_identifier'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const RevokePromotionalEntitlements = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user id, or alias, of the subscriber.',
          },
          entitlement_identifier: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The identifier for the entitlement you want to revoke from the user.',
          },
        },
        required: ['app_user_id', 'entitlement_identifier'],
      },
    ],
  },
  response: { '200': { $schema: 'http://json-schema.org/draft-04/schema#' } },
} as const;
const Subscribers = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID used with the mobile SDK.',
          },
        },
        required: ['app_user_id'],
      },
      {
        type: 'object',
        properties: {
          'X-Platform': {
            type: 'string',
            default: 'ios',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              "Optionally set the X-Platform header to update the subscriber record's `last_seen` field. Set to either `ios`, `android`, `amazon`, `macos`, `uikitformac`. Don't set this if you are calling the getter for informational purposes or using a secret API key to fetch subscriber attributes.",
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        request_date: { type: 'string', examples: ['2019-07-26T17:40:10Z'] },
        request_date_ms: { type: 'integer', default: 0, examples: [1564162810884] },
        subscriber: {
          type: 'object',
          properties: {
            entitlements: {
              type: 'object',
              properties: {
                pro_cat: {
                  type: 'object',
                  properties: {
                    expires_date: {},
                    grace_period_expires_date: {},
                    product_identifier: { type: 'string', examples: ['onetime'] },
                    purchase_date: { type: 'string', examples: ['2019-04-05T21:52:45Z'] },
                  },
                },
              },
            },
            first_seen: { type: 'string', examples: ['2019-02-21T00:08:41Z'] },
            management_url: {
              type: 'string',
              examples: ['https://apps.apple.com/account/subscriptions'],
            },
            non_subscriptions: {
              type: 'object',
              properties: {
                onetime: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string', examples: ['cadba0c81b'] },
                      is_sandbox: { type: 'boolean', default: true, examples: [true] },
                      purchase_date: { type: 'string', examples: ['2019-04-05T21:52:45Z'] },
                      store: { type: 'string', examples: ['app_store'] },
                    },
                  },
                },
              },
            },
            original_app_user_id: { type: 'string', examples: ['XXX-XXXXX-XXXXX-XX'] },
            original_application_version: { type: 'string', examples: ['1.0'] },
            original_purchase_date: { type: 'string', examples: ['2019-01-30T23:54:10Z'] },
            other_purchases: { type: 'object', properties: {} },
            subscriptions: {
              type: 'object',
              properties: {
                annual: {
                  type: 'object',
                  properties: {
                    auto_resume_date: {},
                    billing_issues_detected_at: {},
                    expires_date: { type: 'string', examples: ['2019-08-14T21:07:40Z'] },
                    grace_period_expires_date: {},
                    is_sandbox: { type: 'boolean', default: true, examples: [true] },
                    original_purchase_date: { type: 'string', examples: ['2019-02-21T00:42:05Z'] },
                    ownership_type: { type: 'string', examples: ['PURCHASED'] },
                    period_type: { type: 'string', examples: ['normal'] },
                    purchase_date: { type: 'string', examples: ['2019-07-14T20:07:40Z'] },
                    refunded_at: {},
                    store: { type: 'string', examples: ['app_store'] },
                    unsubscribe_detected_at: { type: 'string', examples: ['2019-07-17T22:48:38Z'] },
                  },
                },
                onemonth: {
                  type: 'object',
                  properties: {
                    auto_resume_date: {},
                    billing_issues_detected_at: {},
                    expires_date: { type: 'string', examples: ['2019-06-17T22:47:55Z'] },
                    grace_period_expires_date: {},
                    is_sandbox: { type: 'boolean', default: true, examples: [true] },
                    original_purchase_date: { type: 'string', examples: ['2019-02-21T00:42:05Z'] },
                    ownership_type: { type: 'string', examples: ['PURCHASED'] },
                    period_type: { type: 'string', examples: ['normal'] },
                    purchase_date: { type: 'string', examples: ['2019-06-17T22:42:55Z'] },
                    refunded_at: {},
                    store: { type: 'string', examples: ['app_store'] },
                    unsubscribe_detected_at: { type: 'string', examples: ['2019-06-17T22:48:38Z'] },
                  },
                },
                rc_promo_pro_cat_monthly: {
                  type: 'object',
                  properties: {
                    auto_resume_date: {},
                    billing_issues_detected_at: {},
                    expires_date: { type: 'string', examples: ['2019-08-26T01:02:16Z'] },
                    grace_period_expires_date: {},
                    is_sandbox: { type: 'boolean', default: true, examples: [false] },
                    original_purchase_date: { type: 'string', examples: ['2019-07-26T01:02:16Z'] },
                    ownership_type: { type: 'string', examples: ['FAMILY_SHARED'] },
                    period_type: { type: 'string', examples: ['normal'] },
                    purchase_date: { type: 'string', examples: ['2019-07-26T01:02:16Z'] },
                    refunded_at: {},
                    store: { type: 'string', examples: ['promotional'] },
                    unsubscribe_detected_at: {},
                  },
                },
              },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': { $schema: 'http://json-schema.org/draft-04/schema#' },
    '401': { $schema: 'http://json-schema.org/draft-04/schema#' },
  },
} as const;
const Subscribersattribution = {
  body: {
    type: 'object',
    required: ['data', 'network'],
    properties: {
      data: {
        type: 'object',
        description: 'The data returned by the attribution network callbacks.',
        properties: {
          rc_idfa: { type: 'string', description: 'The idfa from AdSupport on iOS. (iOS Only)' },
          rc_gps_adid: {
            type: 'string',
            description: 'The Google Play Services Advertising identifier. (Android Only)',
          },
        },
      },
      network: {
        type: 'string',
        description:
          'The attribution network the data is coming from. See below for possible values.',
        enum: ['0', '1', '2', '3', '4', '5'],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            default: 'your user id',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user ID, or alias, of the subscriber.',
          },
        },
        required: ['app_user_id'],
      },
    ],
  },
  response: {
    '200': { type: 'object', properties: {}, $schema: 'http://json-schema.org/draft-04/schema#' },
  },
} as const;
const UpdateSubscriberAttributes = {
  body: {
    type: 'object',
    properties: {
      attributes: {
        properties: {
          key_name: {
            type: 'object',
            description: 'Mapping of key names to subscriber attribute objects.',
            required: ['value'],
            properties: {
              value: {
                type: 'string',
                description:
                  'The value of the attribute. If the value is `null` or an empty string, the attribute will be deleted.',
              },
              updated_at_ms: {
                type: 'string',
                description:
                  'UNIX epoch in milliseconds of when the attribute was updated. This value is used to resolve conflicts, an attribute will only be updated if the new `updated_at_ms` value is newer than the value for the stored attribute.',
                format: 'date-time',
              },
            },
          },
        },
        required: ['key_name'],
        type: 'object',
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          app_user_id: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The app user id used with the mobile SDK.',
          },
        },
        required: ['app_user_id'],
      },
    ],
  },
  response: {
    '200': { $schema: 'http://json-schema.org/draft-04/schema#' },
    '400': {
      type: 'object',
      properties: {
        code: { type: 'integer', default: 0, examples: [7263] },
        message: {
          type: 'string',
          examples: ['Some subscriber attributes keys were unable to saved.'],
        },
        attribute_errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              key_name: { type: 'string', examples: ['$email'] },
              message: { type: 'string', examples: ['Value is not a valid email address.'] },
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
export {
  DeferAGoogleSubscription,
  DeleteOfferingOverride,
  DeleteSubscriber,
  GetOfferings,
  GrantAPromotionalEntitlement,
  OverrideOffering,
  Receipts,
  RefundAGoogleSubscription,
  RevokeAGoogleSubscription,
  RevokePromotionalEntitlements,
  Subscribers,
  Subscribersattribution,
  UpdateSubscriberAttributes,
};
