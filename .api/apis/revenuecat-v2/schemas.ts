const AttachProductsToEntitlement = {
  body: {
    type: 'object',
    required: ['product_ids'],
    properties: {
      product_ids: {
        description: 'IDs of the products to be attached to the entitlement.',
        type: 'array',
        minLength: 1,
        maxLength: 50,
        items: { type: 'string', maxLength: 255, minLength: 1, examples: ['prod1a2b3c4d5e'] },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          entitlement_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['entla1b2c3d4e5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the entitlement',
          },
        },
        required: ['project_id', 'entitlement_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['project_id', 'id', 'lookup_key', 'display_name', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`entitlement`",
          enum: ['entitlement'],
          type: 'string',
        },
        project_id: {
          description: 'ID of the project to which the entitlement belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        id: {
          description: 'The id of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['entla1b2c3d4e5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['premium'],
        },
        display_name: {
          description: 'The display name of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium'],
        },
        created_at: {
          type: ['integer', 'null'],
          description: 'The date when the entitlement was created in ms since epoch',
          examples: [1658399423658],
        },
        products: {
          description: 'List of products attached to the entitlement',
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductsList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: [
                  'id',
                  'store_identifier',
                  'type',
                  'created_at',
                  'app_id',
                  'object',
                  'display_name',
                ],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                    enum: ['product'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['prod1a2b3c4d5e'],
                  },
                  store_identifier: {
                    description: 'The store product identifier',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['rc_1w_199'],
                  },
                  type: {
                    description: 'The product type\n\n`subscription` `one_time`',
                    type: ['string', 'null'],
                    enum: ['subscription', 'one_time'],
                  },
                  subscription: {
                    description: 'The subscription product object',
                    type: ['object', 'null'],
                    required: ['duration', 'grace_period_duration', 'trial_duration'],
                    properties: {
                      duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description: 'The duration of the subscription in ISO-8601 standard',
                        examples: ['P1M'],
                      },
                      grace_period_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subscription's grace period in ISO-8601 standard",
                        examples: ['P3D'],
                      },
                      trial_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subcription's trial period in ISO-8601 standard",
                        examples: ['P1W'],
                      },
                    },
                  },
                  created_at: {
                    description: 'The date when the product was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  app_id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  app: {
                    type: ['object', 'null'],
                    required: ['id', 'name', 'created_at', 'type', 'project_id'],
                    properties: {
                      id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      name: {
                        description: 'The name of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                      },
                      created_at: {
                        description: 'The date when the app was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      type: {
                        description:
                          'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                        type: ['string', 'null'],
                        enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                        examples: ['amazon'],
                      },
                      project_id: {
                        description: 'The id of the project',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['proj1a2b3c4'],
                      },
                    },
                    description: 'The app associated with the product',
                  },
                  display_name: {
                    description: 'The display name of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Premium Monthly 2023'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Entitlement's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const AttachProductsToPackage = {
  body: {
    type: 'object',
    required: ['products'],
    properties: {
      products: {
        description: 'Product association list',
        type: 'array',
        minLength: 1,
        maxLength: 50,
        items: {
          type: 'object',
          required: ['product_id', 'eligibility_criteria'],
          properties: {
            product_id: {
              type: ['string', 'null'],
              maxLength: 255,
              minLength: 1,
              examples: ['prod1a2b3c4d5e'],
            },
            eligibility_criteria: {
              type: ['string', 'null'],
              enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
              examples: ['all'],
            },
          },
        },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          package_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['pkge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the package',
          },
        },
        required: ['project_id', 'package_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
          enum: ['package'],
          type: 'string',
        },
        id: {
          description: 'The id of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['pkge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'The lookup_key of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['monthly'],
        },
        display_name: {
          description: 'The display name of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Monthly discounted with 3-day trial'],
        },
        position: {
          description: 'The position of the package within the offering',
          type: ['integer', 'null'],
          examples: [1],
        },
        created_at: {
          description: 'The date the package was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        products: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductList',
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Product association',
              items: {
                type: 'object',
                required: ['product', 'eligibility_criteria'],
                properties: {
                  product: {
                    type: ['object', 'null'],
                    required: [
                      'id',
                      'store_identifier',
                      'type',
                      'created_at',
                      'app_id',
                      'object',
                      'display_name',
                    ],
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                        enum: ['product'],
                        type: 'string',
                      },
                      id: {
                        description: 'The id of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['prod1a2b3c4d5e'],
                      },
                      store_identifier: {
                        description: 'The store product identifier',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['rc_1w_199'],
                      },
                      type: {
                        description: 'The product type\n\n`subscription` `one_time`',
                        type: ['string', 'null'],
                        enum: ['subscription', 'one_time'],
                      },
                      subscription: {
                        description: 'The subscription product object',
                        type: ['object', 'null'],
                        required: ['duration', 'grace_period_duration', 'trial_duration'],
                        properties: {
                          duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description: 'The duration of the subscription in ISO-8601 standard',
                            examples: ['P1M'],
                          },
                          grace_period_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subscription's grace period in ISO-8601 standard",
                            examples: ['P3D'],
                          },
                          trial_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subcription's trial period in ISO-8601 standard",
                            examples: ['P1W'],
                          },
                        },
                      },
                      created_at: {
                        description: 'The date when the product was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      app_id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      app: {
                        type: ['object', 'null'],
                        required: ['id', 'name', 'created_at', 'type', 'project_id'],
                        properties: {
                          id: {
                            description: 'The id of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['app1a2b3c4'],
                          },
                          name: {
                            description: 'The name of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 1500,
                          },
                          created_at: {
                            description: 'The date when the app was created in ms since epoch',
                            type: ['integer', 'null'],
                            examples: [1658399423658],
                          },
                          type: {
                            description:
                              'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                            type: ['string', 'null'],
                            enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                            examples: ['amazon'],
                          },
                          project_id: {
                            description: 'The id of the project',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['proj1a2b3c4'],
                          },
                        },
                        description: 'The app associated with the product',
                      },
                      display_name: {
                        description: 'The display name of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                        examples: ['Premium Monthly 2023'],
                      },
                    },
                  },
                  eligibility_criteria: {
                    type: ['string', 'null'],
                    enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                    description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the project's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
              ],
            },
          },
          type: ['object', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreateEntitlement = {
  body: {
    type: 'object',
    required: ['lookup_key', 'display_name'],
    properties: {
      lookup_key: {
        description: 'The identifier of the entitlement',
        type: 'string',
        minLength: 1,
        maxLength: 200,
        examples: ['premium'],
      },
      display_name: {
        description: 'The display name of the entitlement',
        type: 'string',
        minLength: 1,
        maxLength: 1500,
        examples: ['Premium access to all features'],
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      required: ['project_id', 'id', 'lookup_key', 'display_name', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`entitlement`",
          enum: ['entitlement'],
          type: 'string',
        },
        project_id: {
          description: 'ID of the project to which the entitlement belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        id: {
          description: 'The id of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['entla1b2c3d4e5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['premium'],
        },
        display_name: {
          description: 'The display name of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium'],
        },
        created_at: {
          type: ['integer', 'null'],
          description: 'The date when the entitlement was created in ms since epoch',
          examples: [1658399423658],
        },
        products: {
          description: 'List of products attached to the entitlement',
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductsList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: [
                  'id',
                  'store_identifier',
                  'type',
                  'created_at',
                  'app_id',
                  'object',
                  'display_name',
                ],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                    enum: ['product'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['prod1a2b3c4d5e'],
                  },
                  store_identifier: {
                    description: 'The store product identifier',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['rc_1w_199'],
                  },
                  type: {
                    description: 'The product type\n\n`subscription` `one_time`',
                    type: ['string', 'null'],
                    enum: ['subscription', 'one_time'],
                  },
                  subscription: {
                    description: 'The subscription product object',
                    type: ['object', 'null'],
                    required: ['duration', 'grace_period_duration', 'trial_duration'],
                    properties: {
                      duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description: 'The duration of the subscription in ISO-8601 standard',
                        examples: ['P1M'],
                      },
                      grace_period_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subscription's grace period in ISO-8601 standard",
                        examples: ['P3D'],
                      },
                      trial_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subcription's trial period in ISO-8601 standard",
                        examples: ['P1W'],
                      },
                    },
                  },
                  created_at: {
                    description: 'The date when the product was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  app_id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  app: {
                    type: ['object', 'null'],
                    required: ['id', 'name', 'created_at', 'type', 'project_id'],
                    properties: {
                      id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      name: {
                        description: 'The name of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                      },
                      created_at: {
                        description: 'The date when the app was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      type: {
                        description:
                          'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                        type: ['string', 'null'],
                        enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                        examples: ['amazon'],
                      },
                      project_id: {
                        description: 'The id of the project',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['proj1a2b3c4'],
                      },
                    },
                    description: 'The app associated with the product',
                  },
                  display_name: {
                    description: 'The display name of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Premium Monthly 2023'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Entitlement's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreateOffering = {
  body: {
    type: 'object',
    required: ['lookup_key', 'display_name'],
    properties: {
      lookup_key: {
        description: 'The custom identifier of the offering',
        type: 'string',
        minLength: 1,
        maxLength: 200,
        examples: ['default'],
      },
      display_name: {
        description: 'The display_name of the offering',
        type: 'string',
        minLength: 1,
        maxLength: 1500,
        examples: ['The standard set of packages'],
      },
      metadata: {
        description: 'Custom metadata of the offering',
        type: ['object', 'null'],
        additionalProperties: { type: 'string' },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'is_current', 'created_at', 'project_id'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`offering`",
          enum: ['offering'],
          type: 'string',
        },
        id: {
          description: 'The id of the offering',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['ofrnge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['default'],
        },
        display_name: {
          description: 'The display name of the offering',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['The standard set of packages'],
        },
        is_current: {
          description: 'Indicates if the offering is the current offering',
          type: ['boolean', 'null'],
          examples: [true],
        },
        created_at: {
          description: 'The date the offering was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        project_id: {
          description: 'ID of the project to which the offering belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        metadata: {
          description: 'Custom metadata of the offering',
          type: ['object', 'null'],
          additionalProperties: { type: 'string' },
        },
        packages: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'PackageList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
                    enum: ['package'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['pkge1a2b3c4d5'],
                  },
                  lookup_key: {
                    description: 'The lookup_key of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 200,
                    examples: ['monthly'],
                  },
                  display_name: {
                    description: 'The display name of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Monthly discounted with 3-day trial'],
                  },
                  position: {
                    description: 'The position of the package within the offering',
                    type: ['integer', 'null'],
                    examples: [1],
                  },
                  created_at: {
                    description: 'The date the package was created at in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  products: {
                    required: ['items', 'next_page', 'object', 'url'],
                    title: 'ProductList',
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                        enum: ['list'],
                        type: 'string',
                      },
                      items: {
                        description: 'Product association',
                        items: {
                          type: 'object',
                          required: ['product', 'eligibility_criteria'],
                          properties: {
                            product: {
                              type: ['object', 'null'],
                              required: [
                                'id',
                                'store_identifier',
                                'type',
                                'created_at',
                                'app_id',
                                'object',
                                'display_name',
                              ],
                              properties: {
                                object: {
                                  description:
                                    "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                                  enum: ['product'],
                                  type: 'string',
                                },
                                id: {
                                  description: 'The id of the product',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['prod1a2b3c4d5e'],
                                },
                                store_identifier: {
                                  description: 'The store product identifier',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['rc_1w_199'],
                                },
                                type: {
                                  description: 'The product type\n\n`subscription` `one_time`',
                                  type: ['string', 'null'],
                                  enum: ['subscription', 'one_time'],
                                },
                                subscription: {
                                  description: 'The subscription product object',
                                  type: ['object', 'null'],
                                  required: ['duration', 'grace_period_duration', 'trial_duration'],
                                  properties: {
                                    duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        'The duration of the subscription in ISO-8601 standard',
                                      examples: ['P1M'],
                                    },
                                    grace_period_duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        "The duration of the subscription's grace period in ISO-8601 standard",
                                      examples: ['P3D'],
                                    },
                                    trial_duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        "The duration of the subcription's trial period in ISO-8601 standard",
                                      examples: ['P1W'],
                                    },
                                  },
                                },
                                created_at: {
                                  description:
                                    'The date when the product was created in ms since epoch',
                                  type: ['integer', 'null'],
                                  examples: [1658399423658],
                                },
                                app_id: {
                                  description: 'The id of the app',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['app1a2b3c4'],
                                },
                                app: {
                                  type: ['object', 'null'],
                                  required: ['id', 'name', 'created_at', 'type', 'project_id'],
                                  properties: {
                                    id: {
                                      description: 'The id of the app',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 255,
                                      examples: ['app1a2b3c4'],
                                    },
                                    name: {
                                      description: 'The name of the app',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 1500,
                                    },
                                    created_at: {
                                      description:
                                        'The date when the app was created in ms since epoch',
                                      type: ['integer', 'null'],
                                      examples: [1658399423658],
                                    },
                                    type: {
                                      description:
                                        'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                                      type: ['string', 'null'],
                                      enum: [
                                        'amazon',
                                        'app_store',
                                        'mac_app_store',
                                        'play_store',
                                        'stripe',
                                      ],
                                      examples: ['amazon'],
                                    },
                                    project_id: {
                                      description: 'The id of the project',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 255,
                                      examples: ['proj1a2b3c4'],
                                    },
                                  },
                                  description: 'The app associated with the product',
                                },
                                display_name: {
                                  description: 'The display name of the product',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 1500,
                                  examples: ['Premium Monthly 2023'],
                                },
                              },
                            },
                            eligibility_criteria: {
                              type: ['string', 'null'],
                              enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                              description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                            },
                          },
                        },
                        type: 'array',
                      },
                      next_page: {
                        description:
                          "URL to access the next page of the project's products. If not present / null, there is no next page",
                        type: ['string', 'null'],
                        examples: [
                          '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
                        ],
                      },
                      url: {
                        description: 'The URL where this list can be accessed.',
                        maxLength: 5000,
                        type: 'string',
                        examples: [
                          '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
                        ],
                      },
                    },
                    type: ['object', 'null'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Offering's packages. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreatePackages = {
  body: {
    type: 'object',
    required: ['lookup_key', 'display_name'],
    properties: {
      lookup_key: {
        description: 'The lookup_key of the package',
        type: ['string', 'null'],
        minLength: 1,
        maxLength: 200,
        examples: ['monthly'],
      },
      display_name: {
        description: 'The display name of the package',
        type: 'string',
        minLength: 1,
        maxLength: 1500,
        examples: ['monthly with one-week trial'],
      },
      position: {
        description: 'The position of the package in the offering',
        type: 'integer',
        examples: [1],
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          offering_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['ofrnge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the offering',
          },
        },
        required: ['project_id', 'offering_id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
          enum: ['package'],
          type: 'string',
        },
        id: {
          description: 'The id of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['pkge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'The lookup_key of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['monthly'],
        },
        display_name: {
          description: 'The display name of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Monthly discounted with 3-day trial'],
        },
        position: {
          description: 'The position of the package within the offering',
          type: ['integer', 'null'],
          examples: [1],
        },
        created_at: {
          description: 'The date the package was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        products: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductList',
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Product association',
              items: {
                type: 'object',
                required: ['product', 'eligibility_criteria'],
                properties: {
                  product: {
                    type: ['object', 'null'],
                    required: [
                      'id',
                      'store_identifier',
                      'type',
                      'created_at',
                      'app_id',
                      'object',
                      'display_name',
                    ],
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                        enum: ['product'],
                        type: 'string',
                      },
                      id: {
                        description: 'The id of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['prod1a2b3c4d5e'],
                      },
                      store_identifier: {
                        description: 'The store product identifier',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['rc_1w_199'],
                      },
                      type: {
                        description: 'The product type\n\n`subscription` `one_time`',
                        type: ['string', 'null'],
                        enum: ['subscription', 'one_time'],
                      },
                      subscription: {
                        description: 'The subscription product object',
                        type: ['object', 'null'],
                        required: ['duration', 'grace_period_duration', 'trial_duration'],
                        properties: {
                          duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description: 'The duration of the subscription in ISO-8601 standard',
                            examples: ['P1M'],
                          },
                          grace_period_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subscription's grace period in ISO-8601 standard",
                            examples: ['P3D'],
                          },
                          trial_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subcription's trial period in ISO-8601 standard",
                            examples: ['P1W'],
                          },
                        },
                      },
                      created_at: {
                        description: 'The date when the product was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      app_id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      app: {
                        type: ['object', 'null'],
                        required: ['id', 'name', 'created_at', 'type', 'project_id'],
                        properties: {
                          id: {
                            description: 'The id of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['app1a2b3c4'],
                          },
                          name: {
                            description: 'The name of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 1500,
                          },
                          created_at: {
                            description: 'The date when the app was created in ms since epoch',
                            type: ['integer', 'null'],
                            examples: [1658399423658],
                          },
                          type: {
                            description:
                              'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                            type: ['string', 'null'],
                            enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                            examples: ['amazon'],
                          },
                          project_id: {
                            description: 'The id of the project',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['proj1a2b3c4'],
                          },
                        },
                        description: 'The app associated with the product',
                      },
                      display_name: {
                        description: 'The display name of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                        examples: ['Premium Monthly 2023'],
                      },
                    },
                  },
                  eligibility_criteria: {
                    type: ['string', 'null'],
                    enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                    description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the project's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
              ],
            },
          },
          type: ['object', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreateProduct = {
  body: {
    type: 'object',
    required: ['store_identifier', 'app_id', 'type'],
    properties: {
      store_identifier: {
        description:
          "The store identifier of the product.\n- For Apple App Store products this is the product ID of the subscription or in-app product.\n- For Google's Play Store, it should follow the format 'productId:basePlanId' for subscription products and SKU for one-time purchase products.\n- For Stripe, the product identifier that always starts with \"prod_\"\n- For Amazon, if it's a subscription, the term SKU of the subscription. If it's a one-time purchase, the SKU of the product.\n",
        type: 'string',
        minLength: 1,
        maxLength: 200,
        examples: ['com.revenuecat.magicweather.monthly'],
      },
      app_id: {
        description: 'The ID of the app',
        type: 'string',
        minLength: 1,
        maxLength: 255,
        examples: ['app1a2b3c4'],
      },
      type: {
        description: 'The product type',
        type: ['string', 'null'],
        enum: ['subscription', 'one_time'],
        examples: ['subscription'],
      },
      display_name: {
        description: 'The display name of the product',
        type: ['string', 'null'],
        minLength: 1,
        maxLength: 1500,
        examples: ['Premium Monthly 2023'],
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      required: [
        'id',
        'store_identifier',
        'type',
        'created_at',
        'app_id',
        'object',
        'display_name',
      ],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
          enum: ['product'],
          type: 'string',
        },
        id: {
          description: 'The id of the product',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['prod1a2b3c4d5e'],
        },
        store_identifier: {
          description: 'The store product identifier',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['rc_1w_199'],
        },
        type: {
          description: 'The product type\n\n`subscription` `one_time`',
          type: ['string', 'null'],
          enum: ['subscription', 'one_time'],
        },
        subscription: {
          description: 'The subscription product object',
          type: ['object', 'null'],
          required: ['duration', 'grace_period_duration', 'trial_duration'],
          properties: {
            duration: {
              type: ['string', 'null'],
              pattern:
                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
              description: 'The duration of the subscription in ISO-8601 standard',
              examples: ['P1M'],
            },
            grace_period_duration: {
              type: ['string', 'null'],
              pattern:
                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
              description: "The duration of the subscription's grace period in ISO-8601 standard",
              examples: ['P3D'],
            },
            trial_duration: {
              type: ['string', 'null'],
              pattern:
                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
              description: "The duration of the subcription's trial period in ISO-8601 standard",
              examples: ['P1W'],
            },
          },
        },
        created_at: {
          description: 'The date when the product was created in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        app_id: {
          description: 'The id of the app',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['app1a2b3c4'],
        },
        app: {
          type: ['object', 'null'],
          required: ['id', 'name', 'created_at', 'type', 'project_id'],
          properties: {
            id: {
              description: 'The id of the app',
              type: ['string', 'null'],
              minLength: 1,
              maxLength: 255,
              examples: ['app1a2b3c4'],
            },
            name: {
              description: 'The name of the app',
              type: ['string', 'null'],
              minLength: 1,
              maxLength: 1500,
            },
            created_at: {
              description: 'The date when the app was created in ms since epoch',
              type: ['integer', 'null'],
              examples: [1658399423658],
            },
            type: {
              description:
                'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
              type: ['string', 'null'],
              enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
              examples: ['amazon'],
            },
            project_id: {
              description: 'The id of the project',
              type: ['string', 'null'],
              minLength: 1,
              maxLength: 255,
              examples: ['proj1a2b3c4'],
            },
          },
          description: 'The app associated with the product',
        },
        display_name: {
          description: 'The display name of the product',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium Monthly 2023'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeleteEntitlement = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          entitlement_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['entla1b2c3d4e5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the entitlement',
          },
        },
        required: ['project_id', 'entitlement_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['object', 'id', 'deleted_at'],
      properties: {
        object: {
          description:
            'The type of the deleted object\n\n`entitlement` `offering` `package` `product` `customer`',
          enum: ['entitlement', 'offering', 'package', 'product', 'customer'],
          type: 'string',
        },
        id: { description: 'The ID of the deleted object', type: ['string', 'null'] },
        deleted_at: {
          type: ['integer', 'null'],
          description: 'The date when the object was deleted in ms since epoch',
          examples: [1658399423658],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeleteOffering = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          offering_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['ofrnge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the offering',
          },
        },
        required: ['project_id', 'offering_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['object', 'id', 'deleted_at'],
      properties: {
        object: {
          description:
            'The type of the deleted object\n\n`entitlement` `offering` `package` `product` `customer`',
          enum: ['entitlement', 'offering', 'package', 'product', 'customer'],
          type: 'string',
        },
        id: { description: 'The ID of the deleted object', type: ['string', 'null'] },
        deleted_at: {
          type: ['integer', 'null'],
          description: 'The date when the object was deleted in ms since epoch',
          examples: [1658399423658],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeletePackageFromOffering = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          package_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['pkge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the package',
          },
        },
        required: ['project_id', 'package_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['object', 'id', 'deleted_at'],
      properties: {
        object: {
          description:
            'The type of the deleted object\n\n`entitlement` `offering` `package` `product` `customer`',
          enum: ['entitlement', 'offering', 'package', 'product', 'customer'],
          type: 'string',
        },
        id: { description: 'The ID of the deleted object', type: ['string', 'null'] },
        deleted_at: {
          type: ['integer', 'null'],
          description: 'The date when the object was deleted in ms since epoch',
          examples: [1658399423658],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeleteProduct = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          product_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['prod1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the product',
          },
        },
        required: ['project_id', 'product_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['object', 'id', 'deleted_at'],
      properties: {
        object: {
          description:
            'The type of the deleted object\n\n`entitlement` `offering` `package` `product` `customer`',
          enum: ['entitlement', 'offering', 'package', 'product', 'customer'],
          type: 'string',
        },
        id: { description: 'The ID of the deleted object', type: ['string', 'null'] },
        deleted_at: {
          type: ['integer', 'null'],
          description: 'The date when the object was deleted in ms since epoch',
          examples: [1658399423658],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DetachProductsFromEntitlement = {
  body: {
    type: 'object',
    required: ['product_ids'],
    properties: {
      product_ids: {
        description: 'IDs of the products to be detached from the entitlement.',
        type: 'array',
        minLength: 1,
        maxLength: 50,
        items: { type: 'string', maxLength: 255, minLength: 1, examples: ['prod1a2b3c4d5e'] },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          entitlement_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['entla1b2c3d4e5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the entitlement',
          },
        },
        required: ['project_id', 'entitlement_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['project_id', 'id', 'lookup_key', 'display_name', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`entitlement`",
          enum: ['entitlement'],
          type: 'string',
        },
        project_id: {
          description: 'ID of the project to which the entitlement belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        id: {
          description: 'The id of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['entla1b2c3d4e5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['premium'],
        },
        display_name: {
          description: 'The display name of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium'],
        },
        created_at: {
          type: ['integer', 'null'],
          description: 'The date when the entitlement was created in ms since epoch',
          examples: [1658399423658],
        },
        products: {
          description: 'List of products attached to the entitlement',
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductsList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: [
                  'id',
                  'store_identifier',
                  'type',
                  'created_at',
                  'app_id',
                  'object',
                  'display_name',
                ],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                    enum: ['product'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['prod1a2b3c4d5e'],
                  },
                  store_identifier: {
                    description: 'The store product identifier',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['rc_1w_199'],
                  },
                  type: {
                    description: 'The product type\n\n`subscription` `one_time`',
                    type: ['string', 'null'],
                    enum: ['subscription', 'one_time'],
                  },
                  subscription: {
                    description: 'The subscription product object',
                    type: ['object', 'null'],
                    required: ['duration', 'grace_period_duration', 'trial_duration'],
                    properties: {
                      duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description: 'The duration of the subscription in ISO-8601 standard',
                        examples: ['P1M'],
                      },
                      grace_period_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subscription's grace period in ISO-8601 standard",
                        examples: ['P3D'],
                      },
                      trial_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subcription's trial period in ISO-8601 standard",
                        examples: ['P1W'],
                      },
                    },
                  },
                  created_at: {
                    description: 'The date when the product was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  app_id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  app: {
                    type: ['object', 'null'],
                    required: ['id', 'name', 'created_at', 'type', 'project_id'],
                    properties: {
                      id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      name: {
                        description: 'The name of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                      },
                      created_at: {
                        description: 'The date when the app was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      type: {
                        description:
                          'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                        type: ['string', 'null'],
                        enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                        examples: ['amazon'],
                      },
                      project_id: {
                        description: 'The id of the project',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['proj1a2b3c4'],
                      },
                    },
                    description: 'The app associated with the product',
                  },
                  display_name: {
                    description: 'The display name of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Premium Monthly 2023'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Entitlement's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DetachProductsFromPackage = {
  body: {
    type: 'object',
    required: ['product_ids'],
    properties: {
      product_ids: {
        description: 'IDs of the products to detach from the package',
        type: 'array',
        minLength: 1,
        maxLength: 50,
        items: { type: 'string', maxLength: 255, minLength: 1, examples: ['prod1a2b3c4d5e'] },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          package_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['pkge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the package',
          },
        },
        required: ['project_id', 'package_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
          enum: ['package'],
          type: 'string',
        },
        id: {
          description: 'The id of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['pkge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'The lookup_key of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['monthly'],
        },
        display_name: {
          description: 'The display name of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Monthly discounted with 3-day trial'],
        },
        position: {
          description: 'The position of the package within the offering',
          type: ['integer', 'null'],
          examples: [1],
        },
        created_at: {
          description: 'The date the package was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        products: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductList',
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Product association',
              items: {
                type: 'object',
                required: ['product', 'eligibility_criteria'],
                properties: {
                  product: {
                    type: ['object', 'null'],
                    required: [
                      'id',
                      'store_identifier',
                      'type',
                      'created_at',
                      'app_id',
                      'object',
                      'display_name',
                    ],
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                        enum: ['product'],
                        type: 'string',
                      },
                      id: {
                        description: 'The id of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['prod1a2b3c4d5e'],
                      },
                      store_identifier: {
                        description: 'The store product identifier',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['rc_1w_199'],
                      },
                      type: {
                        description: 'The product type\n\n`subscription` `one_time`',
                        type: ['string', 'null'],
                        enum: ['subscription', 'one_time'],
                      },
                      subscription: {
                        description: 'The subscription product object',
                        type: ['object', 'null'],
                        required: ['duration', 'grace_period_duration', 'trial_duration'],
                        properties: {
                          duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description: 'The duration of the subscription in ISO-8601 standard',
                            examples: ['P1M'],
                          },
                          grace_period_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subscription's grace period in ISO-8601 standard",
                            examples: ['P3D'],
                          },
                          trial_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subcription's trial period in ISO-8601 standard",
                            examples: ['P1W'],
                          },
                        },
                      },
                      created_at: {
                        description: 'The date when the product was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      app_id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      app: {
                        type: ['object', 'null'],
                        required: ['id', 'name', 'created_at', 'type', 'project_id'],
                        properties: {
                          id: {
                            description: 'The id of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['app1a2b3c4'],
                          },
                          name: {
                            description: 'The name of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 1500,
                          },
                          created_at: {
                            description: 'The date when the app was created in ms since epoch',
                            type: ['integer', 'null'],
                            examples: [1658399423658],
                          },
                          type: {
                            description:
                              'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                            type: ['string', 'null'],
                            enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                            examples: ['amazon'],
                          },
                          project_id: {
                            description: 'The id of the project',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['proj1a2b3c4'],
                          },
                        },
                        description: 'The app associated with the product',
                      },
                      display_name: {
                        description: 'The display name of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                        examples: ['Premium Monthly 2023'],
                      },
                    },
                  },
                  eligibility_criteria: {
                    type: ['string', 'null'],
                    enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                    description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the project's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
              ],
            },
          },
          type: ['object', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetApp = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          app_id: {
            type: 'string',
            maxLength: 255,
            examples: ['app1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the app',
          },
        },
        required: ['project_id', 'app_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'name', 'created_at', 'type', 'project_id'],
      properties: {
        id: {
          description: 'The id of the app',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['app1a2b3c4'],
        },
        name: {
          description: 'The name of the app',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
        },
        created_at: {
          description: 'The date when the app was created in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        type: {
          description:
            'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
          type: ['string', 'null'],
          enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
          examples: ['amazon'],
        },
        project_id: {
          description: 'The id of the project',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['proj1a2b3c4'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetEntitlement = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          entitlement_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['entla1b2c3d4e5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the entitlement',
          },
        },
        required: ['project_id', 'entitlement_id'],
      },
      {
        type: 'object',
        properties: {
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['product'],
              examples: ['product'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `product`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['project_id', 'id', 'lookup_key', 'display_name', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`entitlement`",
          enum: ['entitlement'],
          type: 'string',
        },
        project_id: {
          description: 'ID of the project to which the entitlement belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        id: {
          description: 'The id of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['entla1b2c3d4e5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['premium'],
        },
        display_name: {
          description: 'The display name of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium'],
        },
        created_at: {
          type: ['integer', 'null'],
          description: 'The date when the entitlement was created in ms since epoch',
          examples: [1658399423658],
        },
        products: {
          description: 'List of products attached to the entitlement',
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductsList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: [
                  'id',
                  'store_identifier',
                  'type',
                  'created_at',
                  'app_id',
                  'object',
                  'display_name',
                ],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                    enum: ['product'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['prod1a2b3c4d5e'],
                  },
                  store_identifier: {
                    description: 'The store product identifier',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['rc_1w_199'],
                  },
                  type: {
                    description: 'The product type\n\n`subscription` `one_time`',
                    type: ['string', 'null'],
                    enum: ['subscription', 'one_time'],
                  },
                  subscription: {
                    description: 'The subscription product object',
                    type: ['object', 'null'],
                    required: ['duration', 'grace_period_duration', 'trial_duration'],
                    properties: {
                      duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description: 'The duration of the subscription in ISO-8601 standard',
                        examples: ['P1M'],
                      },
                      grace_period_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subscription's grace period in ISO-8601 standard",
                        examples: ['P3D'],
                      },
                      trial_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subcription's trial period in ISO-8601 standard",
                        examples: ['P1W'],
                      },
                    },
                  },
                  created_at: {
                    description: 'The date when the product was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  app_id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  app: {
                    type: ['object', 'null'],
                    required: ['id', 'name', 'created_at', 'type', 'project_id'],
                    properties: {
                      id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      name: {
                        description: 'The name of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                      },
                      created_at: {
                        description: 'The date when the app was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      type: {
                        description:
                          'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                        type: ['string', 'null'],
                        enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                        examples: ['amazon'],
                      },
                      project_id: {
                        description: 'The id of the project',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['proj1a2b3c4'],
                      },
                    },
                    description: 'The app associated with the product',
                  },
                  display_name: {
                    description: 'The display name of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Premium Monthly 2023'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Entitlement's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetOffering = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          offering_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['ofrnge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the offering',
          },
        },
        required: ['project_id', 'offering_id'],
      },
      {
        type: 'object',
        properties: {
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['package', 'package.product'],
              examples: ['package'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `package`, `package.product`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'is_current', 'created_at', 'project_id'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`offering`",
          enum: ['offering'],
          type: 'string',
        },
        id: {
          description: 'The id of the offering',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['ofrnge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['default'],
        },
        display_name: {
          description: 'The display name of the offering',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['The standard set of packages'],
        },
        is_current: {
          description: 'Indicates if the offering is the current offering',
          type: ['boolean', 'null'],
          examples: [true],
        },
        created_at: {
          description: 'The date the offering was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        project_id: {
          description: 'ID of the project to which the offering belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        metadata: {
          description: 'Custom metadata of the offering',
          type: ['object', 'null'],
          additionalProperties: { type: 'string' },
        },
        packages: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'PackageList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
                    enum: ['package'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['pkge1a2b3c4d5'],
                  },
                  lookup_key: {
                    description: 'The lookup_key of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 200,
                    examples: ['monthly'],
                  },
                  display_name: {
                    description: 'The display name of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Monthly discounted with 3-day trial'],
                  },
                  position: {
                    description: 'The position of the package within the offering',
                    type: ['integer', 'null'],
                    examples: [1],
                  },
                  created_at: {
                    description: 'The date the package was created at in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  products: {
                    required: ['items', 'next_page', 'object', 'url'],
                    title: 'ProductList',
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                        enum: ['list'],
                        type: 'string',
                      },
                      items: {
                        description: 'Product association',
                        items: {
                          type: 'object',
                          required: ['product', 'eligibility_criteria'],
                          properties: {
                            product: {
                              type: ['object', 'null'],
                              required: [
                                'id',
                                'store_identifier',
                                'type',
                                'created_at',
                                'app_id',
                                'object',
                                'display_name',
                              ],
                              properties: {
                                object: {
                                  description:
                                    "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                                  enum: ['product'],
                                  type: 'string',
                                },
                                id: {
                                  description: 'The id of the product',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['prod1a2b3c4d5e'],
                                },
                                store_identifier: {
                                  description: 'The store product identifier',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['rc_1w_199'],
                                },
                                type: {
                                  description: 'The product type\n\n`subscription` `one_time`',
                                  type: ['string', 'null'],
                                  enum: ['subscription', 'one_time'],
                                },
                                subscription: {
                                  description: 'The subscription product object',
                                  type: ['object', 'null'],
                                  required: ['duration', 'grace_period_duration', 'trial_duration'],
                                  properties: {
                                    duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        'The duration of the subscription in ISO-8601 standard',
                                      examples: ['P1M'],
                                    },
                                    grace_period_duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        "The duration of the subscription's grace period in ISO-8601 standard",
                                      examples: ['P3D'],
                                    },
                                    trial_duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        "The duration of the subcription's trial period in ISO-8601 standard",
                                      examples: ['P1W'],
                                    },
                                  },
                                },
                                created_at: {
                                  description:
                                    'The date when the product was created in ms since epoch',
                                  type: ['integer', 'null'],
                                  examples: [1658399423658],
                                },
                                app_id: {
                                  description: 'The id of the app',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['app1a2b3c4'],
                                },
                                app: {
                                  type: ['object', 'null'],
                                  required: ['id', 'name', 'created_at', 'type', 'project_id'],
                                  properties: {
                                    id: {
                                      description: 'The id of the app',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 255,
                                      examples: ['app1a2b3c4'],
                                    },
                                    name: {
                                      description: 'The name of the app',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 1500,
                                    },
                                    created_at: {
                                      description:
                                        'The date when the app was created in ms since epoch',
                                      type: ['integer', 'null'],
                                      examples: [1658399423658],
                                    },
                                    type: {
                                      description:
                                        'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                                      type: ['string', 'null'],
                                      enum: [
                                        'amazon',
                                        'app_store',
                                        'mac_app_store',
                                        'play_store',
                                        'stripe',
                                      ],
                                      examples: ['amazon'],
                                    },
                                    project_id: {
                                      description: 'The id of the project',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 255,
                                      examples: ['proj1a2b3c4'],
                                    },
                                  },
                                  description: 'The app associated with the product',
                                },
                                display_name: {
                                  description: 'The display name of the product',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 1500,
                                  examples: ['Premium Monthly 2023'],
                                },
                              },
                            },
                            eligibility_criteria: {
                              type: ['string', 'null'],
                              enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                              description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                            },
                          },
                        },
                        type: 'array',
                      },
                      next_page: {
                        description:
                          "URL to access the next page of the project's products. If not present / null, there is no next page",
                        type: ['string', 'null'],
                        examples: [
                          '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
                        ],
                      },
                      url: {
                        description: 'The URL where this list can be accessed.',
                        maxLength: 5000,
                        type: 'string',
                        examples: [
                          '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
                        ],
                      },
                    },
                    type: ['object', 'null'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Offering's packages. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetPackage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          package_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['pkge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the package',
          },
        },
        required: ['project_id', 'package_id'],
      },
      {
        type: 'object',
        properties: {
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['product'],
              examples: ['product'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `product`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
          enum: ['package'],
          type: 'string',
        },
        id: {
          description: 'The id of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['pkge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'The lookup_key of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['monthly'],
        },
        display_name: {
          description: 'The display name of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Monthly discounted with 3-day trial'],
        },
        position: {
          description: 'The position of the package within the offering',
          type: ['integer', 'null'],
          examples: [1],
        },
        created_at: {
          description: 'The date the package was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        products: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductList',
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Product association',
              items: {
                type: 'object',
                required: ['product', 'eligibility_criteria'],
                properties: {
                  product: {
                    type: ['object', 'null'],
                    required: [
                      'id',
                      'store_identifier',
                      'type',
                      'created_at',
                      'app_id',
                      'object',
                      'display_name',
                    ],
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                        enum: ['product'],
                        type: 'string',
                      },
                      id: {
                        description: 'The id of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['prod1a2b3c4d5e'],
                      },
                      store_identifier: {
                        description: 'The store product identifier',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['rc_1w_199'],
                      },
                      type: {
                        description: 'The product type\n\n`subscription` `one_time`',
                        type: ['string', 'null'],
                        enum: ['subscription', 'one_time'],
                      },
                      subscription: {
                        description: 'The subscription product object',
                        type: ['object', 'null'],
                        required: ['duration', 'grace_period_duration', 'trial_duration'],
                        properties: {
                          duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description: 'The duration of the subscription in ISO-8601 standard',
                            examples: ['P1M'],
                          },
                          grace_period_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subscription's grace period in ISO-8601 standard",
                            examples: ['P3D'],
                          },
                          trial_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subcription's trial period in ISO-8601 standard",
                            examples: ['P1W'],
                          },
                        },
                      },
                      created_at: {
                        description: 'The date when the product was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      app_id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      app: {
                        type: ['object', 'null'],
                        required: ['id', 'name', 'created_at', 'type', 'project_id'],
                        properties: {
                          id: {
                            description: 'The id of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['app1a2b3c4'],
                          },
                          name: {
                            description: 'The name of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 1500,
                          },
                          created_at: {
                            description: 'The date when the app was created in ms since epoch',
                            type: ['integer', 'null'],
                            examples: [1658399423658],
                          },
                          type: {
                            description:
                              'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                            type: ['string', 'null'],
                            enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                            examples: ['amazon'],
                          },
                          project_id: {
                            description: 'The id of the project',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['proj1a2b3c4'],
                          },
                        },
                        description: 'The app associated with the product',
                      },
                      display_name: {
                        description: 'The display name of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                        examples: ['Premium Monthly 2023'],
                      },
                    },
                  },
                  eligibility_criteria: {
                    type: ['string', 'null'],
                    enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                    description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the project's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
              ],
            },
          },
          type: ['object', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetProduct = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          product_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['prod1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the product',
          },
        },
        required: ['project_id', 'product_id'],
      },
      {
        type: 'object',
        properties: {
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['app'],
              examples: ['app'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `app`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: [
        'id',
        'store_identifier',
        'type',
        'created_at',
        'app_id',
        'object',
        'display_name',
      ],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
          enum: ['product'],
          type: 'string',
        },
        id: {
          description: 'The id of the product',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['prod1a2b3c4d5e'],
        },
        store_identifier: {
          description: 'The store product identifier',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['rc_1w_199'],
        },
        type: {
          description: 'The product type\n\n`subscription` `one_time`',
          type: ['string', 'null'],
          enum: ['subscription', 'one_time'],
        },
        subscription: {
          description: 'The subscription product object',
          type: ['object', 'null'],
          required: ['duration', 'grace_period_duration', 'trial_duration'],
          properties: {
            duration: {
              type: ['string', 'null'],
              pattern:
                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
              description: 'The duration of the subscription in ISO-8601 standard',
              examples: ['P1M'],
            },
            grace_period_duration: {
              type: ['string', 'null'],
              pattern:
                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
              description: "The duration of the subscription's grace period in ISO-8601 standard",
              examples: ['P3D'],
            },
            trial_duration: {
              type: ['string', 'null'],
              pattern:
                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
              description: "The duration of the subcription's trial period in ISO-8601 standard",
              examples: ['P1W'],
            },
          },
        },
        created_at: {
          description: 'The date when the product was created in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        app_id: {
          description: 'The id of the app',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['app1a2b3c4'],
        },
        app: {
          type: ['object', 'null'],
          required: ['id', 'name', 'created_at', 'type', 'project_id'],
          properties: {
            id: {
              description: 'The id of the app',
              type: ['string', 'null'],
              minLength: 1,
              maxLength: 255,
              examples: ['app1a2b3c4'],
            },
            name: {
              description: 'The name of the app',
              type: ['string', 'null'],
              minLength: 1,
              maxLength: 1500,
            },
            created_at: {
              description: 'The date when the app was created in ms since epoch',
              type: ['integer', 'null'],
              examples: [1658399423658],
            },
            type: {
              description:
                'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
              type: ['string', 'null'],
              enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
              examples: ['amazon'],
            },
            project_id: {
              description: 'The id of the project',
              type: ['string', 'null'],
              minLength: 1,
              maxLength: 255,
              examples: ['proj1a2b3c4'],
            },
          },
          description: 'The app associated with the product',
        },
        display_name: {
          description: 'The display name of the product',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium Monthly 2023'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetProductsFromEntitlement = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          entitlement_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['entla1b2c3d4e5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the entitlement',
          },
        },
        required: ['project_id', 'entitlement_id'],
      },
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'ProductsFromEntitlementList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: [
              'id',
              'store_identifier',
              'type',
              'created_at',
              'app_id',
              'object',
              'display_name',
            ],
            properties: {
              object: {
                description:
                  "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                enum: ['product'],
                type: 'string',
              },
              id: {
                description: 'The id of the product',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['prod1a2b3c4d5e'],
              },
              store_identifier: {
                description: 'The store product identifier',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['rc_1w_199'],
              },
              type: {
                description: 'The product type\n\n`subscription` `one_time`',
                type: ['string', 'null'],
                enum: ['subscription', 'one_time'],
              },
              subscription: {
                description: 'The subscription product object',
                type: ['object', 'null'],
                required: ['duration', 'grace_period_duration', 'trial_duration'],
                properties: {
                  duration: {
                    type: ['string', 'null'],
                    pattern:
                      '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                    description: 'The duration of the subscription in ISO-8601 standard',
                    examples: ['P1M'],
                  },
                  grace_period_duration: {
                    type: ['string', 'null'],
                    pattern:
                      '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                    description:
                      "The duration of the subscription's grace period in ISO-8601 standard",
                    examples: ['P3D'],
                  },
                  trial_duration: {
                    type: ['string', 'null'],
                    pattern:
                      '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                    description:
                      "The duration of the subcription's trial period in ISO-8601 standard",
                    examples: ['P1W'],
                  },
                },
              },
              created_at: {
                description: 'The date when the product was created in ms since epoch',
                type: ['integer', 'null'],
                examples: [1658399423658],
              },
              app_id: {
                description: 'The id of the app',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['app1a2b3c4'],
              },
              app: {
                type: ['object', 'null'],
                required: ['id', 'name', 'created_at', 'type', 'project_id'],
                properties: {
                  id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  name: {
                    description: 'The name of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                  },
                  created_at: {
                    description: 'The date when the app was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  type: {
                    description:
                      'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                    type: ['string', 'null'],
                    enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                    examples: ['amazon'],
                  },
                  project_id: {
                    description: 'The id of the project',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['proj1a2b3c4'],
                  },
                },
                description: 'The app associated with the product',
              },
              display_name: {
                description: 'The display name of the product',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 1500,
                examples: ['Premium Monthly 2023'],
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the entitlement's products. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: [
            '/v2/projects/proj1ab2c3d4/entitlements/entla1b2c3d4e5/products?starting_after=prod1a2b3c4d5',
          ],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/proj1ab2c3d4/entitlements/entla1b2c3d4e5/products'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetProductsFromPackage = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          package_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['pkge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the package',
          },
        },
        required: ['project_id', 'package_id'],
      },
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'ProductsFromPackageList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object',
          items: {
            type: 'object',
            required: ['product', 'eligibility_criteria'],
            properties: {
              product: {
                type: ['object', 'null'],
                required: [
                  'id',
                  'store_identifier',
                  'type',
                  'created_at',
                  'app_id',
                  'object',
                  'display_name',
                ],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                    enum: ['product'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['prod1a2b3c4d5e'],
                  },
                  store_identifier: {
                    description: 'The store product identifier',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['rc_1w_199'],
                  },
                  type: {
                    description: 'The product type\n\n`subscription` `one_time`',
                    type: ['string', 'null'],
                    enum: ['subscription', 'one_time'],
                  },
                  subscription: {
                    description: 'The subscription product object',
                    type: ['object', 'null'],
                    required: ['duration', 'grace_period_duration', 'trial_duration'],
                    properties: {
                      duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description: 'The duration of the subscription in ISO-8601 standard',
                        examples: ['P1M'],
                      },
                      grace_period_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subscription's grace period in ISO-8601 standard",
                        examples: ['P3D'],
                      },
                      trial_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subcription's trial period in ISO-8601 standard",
                        examples: ['P1W'],
                      },
                    },
                  },
                  created_at: {
                    description: 'The date when the product was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  app_id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  app: {
                    type: ['object', 'null'],
                    required: ['id', 'name', 'created_at', 'type', 'project_id'],
                    properties: {
                      id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      name: {
                        description: 'The name of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                      },
                      created_at: {
                        description: 'The date when the app was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      type: {
                        description:
                          'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                        type: ['string', 'null'],
                        enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                        examples: ['amazon'],
                      },
                      project_id: {
                        description: 'The id of the project',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['proj1a2b3c4'],
                      },
                    },
                    description: 'The app associated with the product',
                  },
                  display_name: {
                    description: 'The display name of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Premium Monthly 2023'],
                  },
                },
              },
              eligibility_criteria: {
                type: ['string', 'null'],
                enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the entitlement's products. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: [
            '/v2/projects/proj1ab2c3d4/packages/pkge1a2b3c4d5/products?starting_after=prod1a2b3c4d5',
          ],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/proj1ab2c3d4/packages/pkge1a2b3c4d5/products'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListApps = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'AppList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: ['id', 'name', 'created_at', 'type', 'project_id'],
            properties: {
              id: {
                description: 'The id of the app',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['app1a2b3c4'],
              },
              name: {
                description: 'The name of the app',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 1500,
              },
              created_at: {
                description: 'The date when the app was created in ms since epoch',
                type: ['integer', 'null'],
                examples: [1658399423658],
              },
              type: {
                description:
                  'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                type: ['string', 'null'],
                enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                examples: ['amazon'],
              },
              project_id: {
                description: 'The id of the project',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['proj1a2b3c4'],
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the project's apps. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: ['/v2/projects/projec1a2b3c4d/apps?starting_after=app1a2b3c4d'],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/projec1a2b3c4d/apps'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListEntitlements = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['items.product'],
              examples: ['items.product'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `items.product`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'EntitlementList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: ['project_id', 'id', 'lookup_key', 'display_name', 'created_at'],
            properties: {
              object: {
                description:
                  "String representing the object's type. Objects of the same type share the same value.\n\n`entitlement`",
                enum: ['entitlement'],
                type: 'string',
              },
              project_id: {
                description: 'ID of the project to which the entitlement belongs',
                minLength: 1,
                maxLength: 20,
                type: ['string', 'null'],
                examples: ['proj1ab2c3d4'],
              },
              id: {
                description: 'The id of the entitlement',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['entla1b2c3d4e5'],
              },
              lookup_key: {
                description: 'A custom identifier of the entitlement',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 200,
                examples: ['premium'],
              },
              display_name: {
                description: 'The display name of the entitlement',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 1500,
                examples: ['Premium'],
              },
              created_at: {
                type: ['integer', 'null'],
                description: 'The date when the entitlement was created in ms since epoch',
                examples: [1658399423658],
              },
              products: {
                description: 'List of products attached to the entitlement',
                required: ['items', 'next_page', 'object', 'url'],
                title: 'ProductsList',
                type: ['object', 'null'],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                    enum: ['list'],
                    type: 'string',
                  },
                  items: {
                    description: 'Details about each object.',
                    items: {
                      type: 'object',
                      required: [
                        'id',
                        'store_identifier',
                        'type',
                        'created_at',
                        'app_id',
                        'object',
                        'display_name',
                      ],
                      properties: {
                        object: {
                          description:
                            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                          enum: ['product'],
                          type: 'string',
                        },
                        id: {
                          description: 'The id of the product',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 255,
                          examples: ['prod1a2b3c4d5e'],
                        },
                        store_identifier: {
                          description: 'The store product identifier',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 255,
                          examples: ['rc_1w_199'],
                        },
                        type: {
                          description: 'The product type\n\n`subscription` `one_time`',
                          type: ['string', 'null'],
                          enum: ['subscription', 'one_time'],
                        },
                        subscription: {
                          description: 'The subscription product object',
                          type: ['object', 'null'],
                          required: ['duration', 'grace_period_duration', 'trial_duration'],
                          properties: {
                            duration: {
                              type: ['string', 'null'],
                              pattern:
                                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                              description: 'The duration of the subscription in ISO-8601 standard',
                              examples: ['P1M'],
                            },
                            grace_period_duration: {
                              type: ['string', 'null'],
                              pattern:
                                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                              description:
                                "The duration of the subscription's grace period in ISO-8601 standard",
                              examples: ['P3D'],
                            },
                            trial_duration: {
                              type: ['string', 'null'],
                              pattern:
                                '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                              description:
                                "The duration of the subcription's trial period in ISO-8601 standard",
                              examples: ['P1W'],
                            },
                          },
                        },
                        created_at: {
                          description: 'The date when the product was created in ms since epoch',
                          type: ['integer', 'null'],
                          examples: [1658399423658],
                        },
                        app_id: {
                          description: 'The id of the app',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 255,
                          examples: ['app1a2b3c4'],
                        },
                        app: {
                          type: ['object', 'null'],
                          required: ['id', 'name', 'created_at', 'type', 'project_id'],
                          properties: {
                            id: {
                              description: 'The id of the app',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 255,
                              examples: ['app1a2b3c4'],
                            },
                            name: {
                              description: 'The name of the app',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 1500,
                            },
                            created_at: {
                              description: 'The date when the app was created in ms since epoch',
                              type: ['integer', 'null'],
                              examples: [1658399423658],
                            },
                            type: {
                              description:
                                'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                              type: ['string', 'null'],
                              enum: [
                                'amazon',
                                'app_store',
                                'mac_app_store',
                                'play_store',
                                'stripe',
                              ],
                              examples: ['amazon'],
                            },
                            project_id: {
                              description: 'The id of the project',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 255,
                              examples: ['proj1a2b3c4'],
                            },
                          },
                          description: 'The app associated with the product',
                        },
                        display_name: {
                          description: 'The display name of the product',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 1500,
                          examples: ['Premium Monthly 2023'],
                        },
                      },
                    },
                    type: 'array',
                  },
                  next_page: {
                    description:
                      "URL to access the next page of the Entitlement's products. If not present / null, there is no next page",
                    type: ['string', 'null'],
                    examples: [
                      '/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac',
                    ],
                  },
                  url: {
                    description: 'The URL where this list can be accessed.',
                    maxLength: 5000,
                    type: 'string',
                    examples: ['/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products'],
                  },
                },
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the project's entitlements. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: ['/v2/projects/proj1ab2c3d4/entitlements?starting_after=entlab21dac'],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/proj1ab2c3d4/entitlements'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListOfferings = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['items.package', 'items.package.product'],
              examples: ['items.package'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `items.package`, `items.package.product`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'OfferingList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: [
              'id',
              'lookup_key',
              'display_name',
              'is_current',
              'created_at',
              'project_id',
            ],
            properties: {
              object: {
                description:
                  "String representing the object's type. Objects of the same type share the same value.\n\n`offering`",
                enum: ['offering'],
                type: 'string',
              },
              id: {
                description: 'The id of the offering',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['ofrnge1a2b3c4d5'],
              },
              lookup_key: {
                description: 'A custom identifier of the entitlement',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 200,
                examples: ['default'],
              },
              display_name: {
                description: 'The display name of the offering',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 1500,
                examples: ['The standard set of packages'],
              },
              is_current: {
                description: 'Indicates if the offering is the current offering',
                type: ['boolean', 'null'],
                examples: [true],
              },
              created_at: {
                description: 'The date the offering was created at in ms since epoch',
                type: ['integer', 'null'],
                examples: [1658399423658],
              },
              project_id: {
                description: 'ID of the project to which the offering belongs',
                minLength: 1,
                maxLength: 20,
                type: ['string', 'null'],
                examples: ['proj1ab2c3d4'],
              },
              metadata: {
                description: 'Custom metadata of the offering',
                type: ['object', 'null'],
                additionalProperties: { type: 'string' },
              },
              packages: {
                required: ['items', 'next_page', 'object', 'url'],
                title: 'PackageList',
                type: ['object', 'null'],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                    enum: ['list'],
                    type: 'string',
                  },
                  items: {
                    description: 'Details about each object.',
                    items: {
                      type: 'object',
                      required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
                      properties: {
                        object: {
                          description:
                            "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
                          enum: ['package'],
                          type: 'string',
                        },
                        id: {
                          description: 'The id of the package',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 255,
                          examples: ['pkge1a2b3c4d5'],
                        },
                        lookup_key: {
                          description: 'The lookup_key of the package',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 200,
                          examples: ['monthly'],
                        },
                        display_name: {
                          description: 'The display name of the package',
                          type: ['string', 'null'],
                          minLength: 1,
                          maxLength: 1500,
                          examples: ['Monthly discounted with 3-day trial'],
                        },
                        position: {
                          description: 'The position of the package within the offering',
                          type: ['integer', 'null'],
                          examples: [1],
                        },
                        created_at: {
                          description: 'The date the package was created at in ms since epoch',
                          type: ['integer', 'null'],
                          examples: [1658399423658],
                        },
                        products: {
                          required: ['items', 'next_page', 'object', 'url'],
                          title: 'ProductList',
                          properties: {
                            object: {
                              description:
                                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                              enum: ['list'],
                              type: 'string',
                            },
                            items: {
                              description: 'Product association',
                              items: {
                                type: 'object',
                                required: ['product', 'eligibility_criteria'],
                                properties: {
                                  product: {
                                    type: ['object', 'null'],
                                    required: [
                                      'id',
                                      'store_identifier',
                                      'type',
                                      'created_at',
                                      'app_id',
                                      'object',
                                      'display_name',
                                    ],
                                    properties: {
                                      object: {
                                        description:
                                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                                        enum: ['product'],
                                        type: 'string',
                                      },
                                      id: {
                                        description: 'The id of the product',
                                        type: ['string', 'null'],
                                        minLength: 1,
                                        maxLength: 255,
                                        examples: ['prod1a2b3c4d5e'],
                                      },
                                      store_identifier: {
                                        description: 'The store product identifier',
                                        type: ['string', 'null'],
                                        minLength: 1,
                                        maxLength: 255,
                                        examples: ['rc_1w_199'],
                                      },
                                      type: {
                                        description:
                                          'The product type\n\n`subscription` `one_time`',
                                        type: ['string', 'null'],
                                        enum: ['subscription', 'one_time'],
                                      },
                                      subscription: {
                                        description: 'The subscription product object',
                                        type: ['object', 'null'],
                                        required: [
                                          'duration',
                                          'grace_period_duration',
                                          'trial_duration',
                                        ],
                                        properties: {
                                          duration: {
                                            type: ['string', 'null'],
                                            pattern:
                                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                            description:
                                              'The duration of the subscription in ISO-8601 standard',
                                            examples: ['P1M'],
                                          },
                                          grace_period_duration: {
                                            type: ['string', 'null'],
                                            pattern:
                                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                            description:
                                              "The duration of the subscription's grace period in ISO-8601 standard",
                                            examples: ['P3D'],
                                          },
                                          trial_duration: {
                                            type: ['string', 'null'],
                                            pattern:
                                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                            description:
                                              "The duration of the subcription's trial period in ISO-8601 standard",
                                            examples: ['P1W'],
                                          },
                                        },
                                      },
                                      created_at: {
                                        description:
                                          'The date when the product was created in ms since epoch',
                                        type: ['integer', 'null'],
                                        examples: [1658399423658],
                                      },
                                      app_id: {
                                        description: 'The id of the app',
                                        type: ['string', 'null'],
                                        minLength: 1,
                                        maxLength: 255,
                                        examples: ['app1a2b3c4'],
                                      },
                                      app: {
                                        type: ['object', 'null'],
                                        required: [
                                          'id',
                                          'name',
                                          'created_at',
                                          'type',
                                          'project_id',
                                        ],
                                        properties: {
                                          id: {
                                            description: 'The id of the app',
                                            type: ['string', 'null'],
                                            minLength: 1,
                                            maxLength: 255,
                                            examples: ['app1a2b3c4'],
                                          },
                                          name: {
                                            description: 'The name of the app',
                                            type: ['string', 'null'],
                                            minLength: 1,
                                            maxLength: 1500,
                                          },
                                          created_at: {
                                            description:
                                              'The date when the app was created in ms since epoch',
                                            type: ['integer', 'null'],
                                            examples: [1658399423658],
                                          },
                                          type: {
                                            description:
                                              'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                                            type: ['string', 'null'],
                                            enum: [
                                              'amazon',
                                              'app_store',
                                              'mac_app_store',
                                              'play_store',
                                              'stripe',
                                            ],
                                            examples: ['amazon'],
                                          },
                                          project_id: {
                                            description: 'The id of the project',
                                            type: ['string', 'null'],
                                            minLength: 1,
                                            maxLength: 255,
                                            examples: ['proj1a2b3c4'],
                                          },
                                        },
                                        description: 'The app associated with the product',
                                      },
                                      display_name: {
                                        description: 'The display name of the product',
                                        type: ['string', 'null'],
                                        minLength: 1,
                                        maxLength: 1500,
                                        examples: ['Premium Monthly 2023'],
                                      },
                                    },
                                  },
                                  eligibility_criteria: {
                                    type: ['string', 'null'],
                                    enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                                    description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                                  },
                                },
                              },
                              type: 'array',
                            },
                            next_page: {
                              description:
                                "URL to access the next page of the project's products. If not present / null, there is no next page",
                              type: ['string', 'null'],
                              examples: [
                                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
                              ],
                            },
                            url: {
                              description: 'The URL where this list can be accessed.',
                              maxLength: 5000,
                              type: 'string',
                              examples: [
                                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
                              ],
                            },
                          },
                          type: ['object', 'null'],
                        },
                      },
                    },
                    type: 'array',
                  },
                  next_page: {
                    description:
                      "URL to access the next page of the Offering's packages. If not present / null, there is no next page",
                    type: ['string', 'null'],
                    examples: [
                      '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac',
                    ],
                  },
                  url: {
                    description: 'The URL where this list can be accessed.',
                    maxLength: 5000,
                    type: 'string',
                    examples: ['/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages'],
                  },
                },
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the project's offerings. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: ['/v2/projects/proj1ab2c3d4/offerings?starting_after=ofrngeab21da'],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/proj1ab2c3d4/offerings'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListPackages = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          offering_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['ofrnge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the offering',
          },
        },
        required: ['project_id', 'offering_id'],
      },
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['items.product'],
              examples: ['items.product'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `items.product`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'PackageList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
            properties: {
              object: {
                description:
                  "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
                enum: ['package'],
                type: 'string',
              },
              id: {
                description: 'The id of the package',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['pkge1a2b3c4d5'],
              },
              lookup_key: {
                description: 'The lookup_key of the package',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 200,
                examples: ['monthly'],
              },
              display_name: {
                description: 'The display name of the package',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 1500,
                examples: ['Monthly discounted with 3-day trial'],
              },
              position: {
                description: 'The position of the package within the offering',
                type: ['integer', 'null'],
                examples: [1],
              },
              created_at: {
                description: 'The date the package was created at in ms since epoch',
                type: ['integer', 'null'],
                examples: [1658399423658],
              },
              products: {
                required: ['items', 'next_page', 'object', 'url'],
                title: 'ProductList',
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                    enum: ['list'],
                    type: 'string',
                  },
                  items: {
                    description: 'Product association',
                    items: {
                      type: 'object',
                      required: ['product', 'eligibility_criteria'],
                      properties: {
                        product: {
                          type: ['object', 'null'],
                          required: [
                            'id',
                            'store_identifier',
                            'type',
                            'created_at',
                            'app_id',
                            'object',
                            'display_name',
                          ],
                          properties: {
                            object: {
                              description:
                                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                              enum: ['product'],
                              type: 'string',
                            },
                            id: {
                              description: 'The id of the product',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 255,
                              examples: ['prod1a2b3c4d5e'],
                            },
                            store_identifier: {
                              description: 'The store product identifier',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 255,
                              examples: ['rc_1w_199'],
                            },
                            type: {
                              description: 'The product type\n\n`subscription` `one_time`',
                              type: ['string', 'null'],
                              enum: ['subscription', 'one_time'],
                            },
                            subscription: {
                              description: 'The subscription product object',
                              type: ['object', 'null'],
                              required: ['duration', 'grace_period_duration', 'trial_duration'],
                              properties: {
                                duration: {
                                  type: ['string', 'null'],
                                  pattern:
                                    '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                  description:
                                    'The duration of the subscription in ISO-8601 standard',
                                  examples: ['P1M'],
                                },
                                grace_period_duration: {
                                  type: ['string', 'null'],
                                  pattern:
                                    '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                  description:
                                    "The duration of the subscription's grace period in ISO-8601 standard",
                                  examples: ['P3D'],
                                },
                                trial_duration: {
                                  type: ['string', 'null'],
                                  pattern:
                                    '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                  description:
                                    "The duration of the subcription's trial period in ISO-8601 standard",
                                  examples: ['P1W'],
                                },
                              },
                            },
                            created_at: {
                              description:
                                'The date when the product was created in ms since epoch',
                              type: ['integer', 'null'],
                              examples: [1658399423658],
                            },
                            app_id: {
                              description: 'The id of the app',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 255,
                              examples: ['app1a2b3c4'],
                            },
                            app: {
                              type: ['object', 'null'],
                              required: ['id', 'name', 'created_at', 'type', 'project_id'],
                              properties: {
                                id: {
                                  description: 'The id of the app',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['app1a2b3c4'],
                                },
                                name: {
                                  description: 'The name of the app',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 1500,
                                },
                                created_at: {
                                  description:
                                    'The date when the app was created in ms since epoch',
                                  type: ['integer', 'null'],
                                  examples: [1658399423658],
                                },
                                type: {
                                  description:
                                    'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                                  type: ['string', 'null'],
                                  enum: [
                                    'amazon',
                                    'app_store',
                                    'mac_app_store',
                                    'play_store',
                                    'stripe',
                                  ],
                                  examples: ['amazon'],
                                },
                                project_id: {
                                  description: 'The id of the project',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['proj1a2b3c4'],
                                },
                              },
                              description: 'The app associated with the product',
                            },
                            display_name: {
                              description: 'The display name of the product',
                              type: ['string', 'null'],
                              minLength: 1,
                              maxLength: 1500,
                              examples: ['Premium Monthly 2023'],
                            },
                          },
                        },
                        eligibility_criteria: {
                          type: ['string', 'null'],
                          enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                          description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                        },
                      },
                    },
                    type: 'array',
                  },
                  next_page: {
                    description:
                      "URL to access the next page of the project's products. If not present / null, there is no next page",
                    type: ['string', 'null'],
                    examples: [
                      '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
                    ],
                  },
                  url: {
                    description: 'The URL where this list can be accessed.',
                    maxLength: 5000,
                    type: 'string',
                    examples: [
                      '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
                    ],
                  },
                },
                type: ['object', 'null'],
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the project's packages. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: [
            '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac',
          ],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListProducts = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
        },
        required: ['project_id'],
      },
      {
        type: 'object',
        properties: {
          app_id: {
            type: 'string',
            examples: ['app1a2b3c4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'This is an optional query parameter to get a list of products of a given entitlement associated with a particular app',
          },
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          expand: {
            type: 'array',
            items: {
              maxLength: 5000,
              minLength: 1,
              type: 'string',
              enum: ['items.app'],
              examples: ['items.app'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Specifies which fields in the response should be expanded. Accepted values are: `items.app`.',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'ProductList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: [
              'id',
              'store_identifier',
              'type',
              'created_at',
              'app_id',
              'object',
              'display_name',
            ],
            properties: {
              object: {
                description:
                  "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                enum: ['product'],
                type: 'string',
              },
              id: {
                description: 'The id of the product',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['prod1a2b3c4d5e'],
              },
              store_identifier: {
                description: 'The store product identifier',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['rc_1w_199'],
              },
              type: {
                description: 'The product type\n\n`subscription` `one_time`',
                type: ['string', 'null'],
                enum: ['subscription', 'one_time'],
              },
              subscription: {
                description: 'The subscription product object',
                type: ['object', 'null'],
                required: ['duration', 'grace_period_duration', 'trial_duration'],
                properties: {
                  duration: {
                    type: ['string', 'null'],
                    pattern:
                      '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                    description: 'The duration of the subscription in ISO-8601 standard',
                    examples: ['P1M'],
                  },
                  grace_period_duration: {
                    type: ['string', 'null'],
                    pattern:
                      '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                    description:
                      "The duration of the subscription's grace period in ISO-8601 standard",
                    examples: ['P3D'],
                  },
                  trial_duration: {
                    type: ['string', 'null'],
                    pattern:
                      '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                    description:
                      "The duration of the subcription's trial period in ISO-8601 standard",
                    examples: ['P1W'],
                  },
                },
              },
              created_at: {
                description: 'The date when the product was created in ms since epoch',
                type: ['integer', 'null'],
                examples: [1658399423658],
              },
              app_id: {
                description: 'The id of the app',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['app1a2b3c4'],
              },
              app: {
                type: ['object', 'null'],
                required: ['id', 'name', 'created_at', 'type', 'project_id'],
                properties: {
                  id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  name: {
                    description: 'The name of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                  },
                  created_at: {
                    description: 'The date when the app was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  type: {
                    description:
                      'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                    type: ['string', 'null'],
                    enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                    examples: ['amazon'],
                  },
                  project_id: {
                    description: 'The id of the project',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['proj1a2b3c4'],
                  },
                },
                description: 'The app associated with the product',
              },
              display_name: {
                description: 'The display name of the product',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 1500,
                examples: ['Premium Monthly 2023'],
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            "URL to access the next page of the project's products. If not present / null, there is no next page",
          type: ['string', 'null'],
          examples: ['/v2/projects/proj1ab2c3d4/products?starting_after=prodab21dac'],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects/proj1ab2c3d4/products'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListProjects = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          starting_after: {
            type: 'string',
            examples: ['ent12354'],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          limit: {
            type: 'integer',
            default: 20,
            examples: [10],
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['items', 'next_page', 'object', 'url'],
      title: 'ProjectList',
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
          enum: ['list'],
          type: 'string',
        },
        items: {
          description: 'Details about each object.',
          items: {
            type: 'object',
            required: ['id', 'name'],
            properties: {
              object: {
                description:
                  "String representing the object's type. Objects of the same type share the same value.\n\n`project`",
                enum: ['project'],
                type: 'string',
              },
              id: {
                description: 'The id of the project',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 255,
                examples: ['proj1ab2c3d4'],
              },
              name: {
                description: 'The name of the project',
                type: ['string', 'null'],
                minLength: 1,
                maxLength: 256,
                examples: ['MagicWeather'],
              },
              created_at: {
                description: 'The date when the project was created in ms since epoch',
                type: ['integer', 'null'],
                examples: [1658399423658],
              },
            },
          },
          type: 'array',
        },
        next_page: {
          description:
            'URL to access the next page of the projects. If not present / null, there is no next page',
          type: ['string', 'null'],
          examples: ['/v2/projects?starting_after=projab21dac'],
        },
        url: {
          description: 'The URL where this list can be accessed.',
          maxLength: 5000,
          type: 'string',
          examples: ['/v2/projects'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateEntitlement = {
  body: {
    type: 'object',
    required: ['display_name'],
    properties: {
      display_name: {
        description: 'The display name of the entitlement',
        type: 'string',
        minLength: 1,
        maxLength: 1500,
        examples: ['Premium'],
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          entitlement_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['entla1b2c3d4e5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the entitlement',
          },
        },
        required: ['project_id', 'entitlement_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['project_id', 'id', 'lookup_key', 'display_name', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`entitlement`",
          enum: ['entitlement'],
          type: 'string',
        },
        project_id: {
          description: 'ID of the project to which the entitlement belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        id: {
          description: 'The id of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['entla1b2c3d4e5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['premium'],
        },
        display_name: {
          description: 'The display name of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Premium'],
        },
        created_at: {
          type: ['integer', 'null'],
          description: 'The date when the entitlement was created in ms since epoch',
          examples: [1658399423658],
        },
        products: {
          description: 'List of products attached to the entitlement',
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductsList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: [
                  'id',
                  'store_identifier',
                  'type',
                  'created_at',
                  'app_id',
                  'object',
                  'display_name',
                ],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                    enum: ['product'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['prod1a2b3c4d5e'],
                  },
                  store_identifier: {
                    description: 'The store product identifier',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['rc_1w_199'],
                  },
                  type: {
                    description: 'The product type\n\n`subscription` `one_time`',
                    type: ['string', 'null'],
                    enum: ['subscription', 'one_time'],
                  },
                  subscription: {
                    description: 'The subscription product object',
                    type: ['object', 'null'],
                    required: ['duration', 'grace_period_duration', 'trial_duration'],
                    properties: {
                      duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description: 'The duration of the subscription in ISO-8601 standard',
                        examples: ['P1M'],
                      },
                      grace_period_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subscription's grace period in ISO-8601 standard",
                        examples: ['P3D'],
                      },
                      trial_duration: {
                        type: ['string', 'null'],
                        pattern:
                          '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                        description:
                          "The duration of the subcription's trial period in ISO-8601 standard",
                        examples: ['P1W'],
                      },
                    },
                  },
                  created_at: {
                    description: 'The date when the product was created in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  app_id: {
                    description: 'The id of the app',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['app1a2b3c4'],
                  },
                  app: {
                    type: ['object', 'null'],
                    required: ['id', 'name', 'created_at', 'type', 'project_id'],
                    properties: {
                      id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      name: {
                        description: 'The name of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                      },
                      created_at: {
                        description: 'The date when the app was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      type: {
                        description:
                          'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                        type: ['string', 'null'],
                        enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                        examples: ['amazon'],
                      },
                      project_id: {
                        description: 'The id of the project',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['proj1a2b3c4'],
                      },
                    },
                    description: 'The app associated with the product',
                  },
                  display_name: {
                    description: 'The display name of the product',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Premium Monthly 2023'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Entitlement's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products?starting_after=prodeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/entitlements/entle1a2b3c4d5/products'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateOffering = {
  body: {
    type: 'object',
    properties: {
      display_name: {
        description: 'The display name of the offering',
        type: 'string',
        minLength: 1,
        maxLength: 1500,
        examples: ['premium access to features'],
      },
      is_current: {
        description: 'Indicates if the offering is the current offering',
        type: 'boolean',
        examples: [true],
      },
      metadata: {
        description: 'Custom metadata of the offering',
        type: ['object', 'null'],
        additionalProperties: { type: 'string' },
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          offering_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['ofrnge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the offering',
          },
        },
        required: ['project_id', 'offering_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'is_current', 'created_at', 'project_id'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`offering`",
          enum: ['offering'],
          type: 'string',
        },
        id: {
          description: 'The id of the offering',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['ofrnge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'A custom identifier of the entitlement',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['default'],
        },
        display_name: {
          description: 'The display name of the offering',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['The standard set of packages'],
        },
        is_current: {
          description: 'Indicates if the offering is the current offering',
          type: ['boolean', 'null'],
          examples: [true],
        },
        created_at: {
          description: 'The date the offering was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        project_id: {
          description: 'ID of the project to which the offering belongs',
          minLength: 1,
          maxLength: 20,
          type: ['string', 'null'],
          examples: ['proj1ab2c3d4'],
        },
        metadata: {
          description: 'Custom metadata of the offering',
          type: ['object', 'null'],
          additionalProperties: { type: 'string' },
        },
        packages: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'PackageList',
          type: ['object', 'null'],
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Details about each object.',
              items: {
                type: 'object',
                required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
                properties: {
                  object: {
                    description:
                      "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
                    enum: ['package'],
                    type: 'string',
                  },
                  id: {
                    description: 'The id of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 255,
                    examples: ['pkge1a2b3c4d5'],
                  },
                  lookup_key: {
                    description: 'The lookup_key of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 200,
                    examples: ['monthly'],
                  },
                  display_name: {
                    description: 'The display name of the package',
                    type: ['string', 'null'],
                    minLength: 1,
                    maxLength: 1500,
                    examples: ['Monthly discounted with 3-day trial'],
                  },
                  position: {
                    description: 'The position of the package within the offering',
                    type: ['integer', 'null'],
                    examples: [1],
                  },
                  created_at: {
                    description: 'The date the package was created at in ms since epoch',
                    type: ['integer', 'null'],
                    examples: [1658399423658],
                  },
                  products: {
                    required: ['items', 'next_page', 'object', 'url'],
                    title: 'ProductList',
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
                        enum: ['list'],
                        type: 'string',
                      },
                      items: {
                        description: 'Product association',
                        items: {
                          type: 'object',
                          required: ['product', 'eligibility_criteria'],
                          properties: {
                            product: {
                              type: ['object', 'null'],
                              required: [
                                'id',
                                'store_identifier',
                                'type',
                                'created_at',
                                'app_id',
                                'object',
                                'display_name',
                              ],
                              properties: {
                                object: {
                                  description:
                                    "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                                  enum: ['product'],
                                  type: 'string',
                                },
                                id: {
                                  description: 'The id of the product',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['prod1a2b3c4d5e'],
                                },
                                store_identifier: {
                                  description: 'The store product identifier',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['rc_1w_199'],
                                },
                                type: {
                                  description: 'The product type\n\n`subscription` `one_time`',
                                  type: ['string', 'null'],
                                  enum: ['subscription', 'one_time'],
                                },
                                subscription: {
                                  description: 'The subscription product object',
                                  type: ['object', 'null'],
                                  required: ['duration', 'grace_period_duration', 'trial_duration'],
                                  properties: {
                                    duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        'The duration of the subscription in ISO-8601 standard',
                                      examples: ['P1M'],
                                    },
                                    grace_period_duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        "The duration of the subscription's grace period in ISO-8601 standard",
                                      examples: ['P3D'],
                                    },
                                    trial_duration: {
                                      type: ['string', 'null'],
                                      pattern:
                                        '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                                      description:
                                        "The duration of the subcription's trial period in ISO-8601 standard",
                                      examples: ['P1W'],
                                    },
                                  },
                                },
                                created_at: {
                                  description:
                                    'The date when the product was created in ms since epoch',
                                  type: ['integer', 'null'],
                                  examples: [1658399423658],
                                },
                                app_id: {
                                  description: 'The id of the app',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 255,
                                  examples: ['app1a2b3c4'],
                                },
                                app: {
                                  type: ['object', 'null'],
                                  required: ['id', 'name', 'created_at', 'type', 'project_id'],
                                  properties: {
                                    id: {
                                      description: 'The id of the app',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 255,
                                      examples: ['app1a2b3c4'],
                                    },
                                    name: {
                                      description: 'The name of the app',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 1500,
                                    },
                                    created_at: {
                                      description:
                                        'The date when the app was created in ms since epoch',
                                      type: ['integer', 'null'],
                                      examples: [1658399423658],
                                    },
                                    type: {
                                      description:
                                        'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                                      type: ['string', 'null'],
                                      enum: [
                                        'amazon',
                                        'app_store',
                                        'mac_app_store',
                                        'play_store',
                                        'stripe',
                                      ],
                                      examples: ['amazon'],
                                    },
                                    project_id: {
                                      description: 'The id of the project',
                                      type: ['string', 'null'],
                                      minLength: 1,
                                      maxLength: 255,
                                      examples: ['proj1a2b3c4'],
                                    },
                                  },
                                  description: 'The app associated with the product',
                                },
                                display_name: {
                                  description: 'The display name of the product',
                                  type: ['string', 'null'],
                                  minLength: 1,
                                  maxLength: 1500,
                                  examples: ['Premium Monthly 2023'],
                                },
                              },
                            },
                            eligibility_criteria: {
                              type: ['string', 'null'],
                              enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                              description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                            },
                          },
                        },
                        type: 'array',
                      },
                      next_page: {
                        description:
                          "URL to access the next page of the project's products. If not present / null, there is no next page",
                        type: ['string', 'null'],
                        examples: [
                          '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
                        ],
                      },
                      url: {
                        description: 'The URL where this list can be accessed.',
                        maxLength: 5000,
                        type: 'string',
                        examples: [
                          '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
                        ],
                      },
                    },
                    type: ['object', 'null'],
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the Offering's packages. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages?starting_after=pkgeab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: ['/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages'],
            },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdatePackage = {
  body: {
    type: 'object',
    properties: {
      display_name: {
        description: 'The display name of the package',
        type: 'string',
        minLength: 1,
        maxLength: 1500,
        examples: ['monthly with one-week trial'],
      },
      position: {
        description: 'The position of the package within the offering',
        type: 'integer',
        minimum: 1,
        examples: [2],
      },
    },
    additionalProperties: false,
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          project_id: {
            type: 'string',
            maxLength: 255,
            examples: ['proj1ab2c3d4'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the project',
          },
          package_id: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
            examples: ['pkge1a2b3c4d5'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'ID of the package',
          },
        },
        required: ['project_id', 'package_id'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'lookup_key', 'display_name', 'position', 'created_at'],
      properties: {
        object: {
          description:
            "String representing the object's type. Objects of the same type share the same value.\n\n`package`",
          enum: ['package'],
          type: 'string',
        },
        id: {
          description: 'The id of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 255,
          examples: ['pkge1a2b3c4d5'],
        },
        lookup_key: {
          description: 'The lookup_key of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 200,
          examples: ['monthly'],
        },
        display_name: {
          description: 'The display name of the package',
          type: ['string', 'null'],
          minLength: 1,
          maxLength: 1500,
          examples: ['Monthly discounted with 3-day trial'],
        },
        position: {
          description: 'The position of the package within the offering',
          type: ['integer', 'null'],
          examples: [1],
        },
        created_at: {
          description: 'The date the package was created at in ms since epoch',
          type: ['integer', 'null'],
          examples: [1658399423658],
        },
        products: {
          required: ['items', 'next_page', 'object', 'url'],
          title: 'ProductList',
          properties: {
            object: {
              description:
                "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`list`",
              enum: ['list'],
              type: 'string',
            },
            items: {
              description: 'Product association',
              items: {
                type: 'object',
                required: ['product', 'eligibility_criteria'],
                properties: {
                  product: {
                    type: ['object', 'null'],
                    required: [
                      'id',
                      'store_identifier',
                      'type',
                      'created_at',
                      'app_id',
                      'object',
                      'display_name',
                    ],
                    properties: {
                      object: {
                        description:
                          "String representing the object's type. Objects of the same type share the same value. Always has the value `list`.\n\n`product`",
                        enum: ['product'],
                        type: 'string',
                      },
                      id: {
                        description: 'The id of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['prod1a2b3c4d5e'],
                      },
                      store_identifier: {
                        description: 'The store product identifier',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['rc_1w_199'],
                      },
                      type: {
                        description: 'The product type\n\n`subscription` `one_time`',
                        type: ['string', 'null'],
                        enum: ['subscription', 'one_time'],
                      },
                      subscription: {
                        description: 'The subscription product object',
                        type: ['object', 'null'],
                        required: ['duration', 'grace_period_duration', 'trial_duration'],
                        properties: {
                          duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description: 'The duration of the subscription in ISO-8601 standard',
                            examples: ['P1M'],
                          },
                          grace_period_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subscription's grace period in ISO-8601 standard",
                            examples: ['P3D'],
                          },
                          trial_duration: {
                            type: ['string', 'null'],
                            pattern:
                              '^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$',
                            description:
                              "The duration of the subcription's trial period in ISO-8601 standard",
                            examples: ['P1W'],
                          },
                        },
                      },
                      created_at: {
                        description: 'The date when the product was created in ms since epoch',
                        type: ['integer', 'null'],
                        examples: [1658399423658],
                      },
                      app_id: {
                        description: 'The id of the app',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 255,
                        examples: ['app1a2b3c4'],
                      },
                      app: {
                        type: ['object', 'null'],
                        required: ['id', 'name', 'created_at', 'type', 'project_id'],
                        properties: {
                          id: {
                            description: 'The id of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['app1a2b3c4'],
                          },
                          name: {
                            description: 'The name of the app',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 1500,
                          },
                          created_at: {
                            description: 'The date when the app was created in ms since epoch',
                            type: ['integer', 'null'],
                            examples: [1658399423658],
                          },
                          type: {
                            description:
                              'The platform of the app\n\n`amazon` `app_store` `mac_app_store` `play_store` `stripe`',
                            type: ['string', 'null'],
                            enum: ['amazon', 'app_store', 'mac_app_store', 'play_store', 'stripe'],
                            examples: ['amazon'],
                          },
                          project_id: {
                            description: 'The id of the project',
                            type: ['string', 'null'],
                            minLength: 1,
                            maxLength: 255,
                            examples: ['proj1a2b3c4'],
                          },
                        },
                        description: 'The app associated with the product',
                      },
                      display_name: {
                        description: 'The display name of the product',
                        type: ['string', 'null'],
                        minLength: 1,
                        maxLength: 1500,
                        examples: ['Premium Monthly 2023'],
                      },
                    },
                  },
                  eligibility_criteria: {
                    type: ['string', 'null'],
                    enum: ['all', 'google_sdk_lt_6', 'google_sdk_ge_6'],
                    description: '`all` `google_sdk_lt_6` `google_sdk_ge_6`',
                  },
                },
              },
              type: 'array',
            },
            next_page: {
              description:
                "URL to access the next page of the project's products. If not present / null, there is no next page",
              type: ['string', 'null'],
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products?starting_after=prodab21dac',
              ],
            },
            url: {
              description: 'The URL where this list can be accessed.',
              maxLength: 5000,
              type: 'string',
              examples: [
                '/v2/projects/proj1ab2c3d4/offerings/ofrnge1a2b3c4d5/packages/pkge1a2b3c4d5/products',
              ],
            },
          },
          type: ['object', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '422': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '423': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      required: ['type', 'message', 'retryable'],
      properties: {
        type: {
          description:
            'The error type\n\n`parameter_error` `resource_already_exists` `resource_missing` `idempotency_error` `rate_limit_error` `authentication_error` `authorization_error` `store_error` `server_error` `resource_locked_error` `unprocessable_entity_error` `invalid_request`',
          type: ['string', 'null'],
          enum: [
            'parameter_error',
            'resource_already_exists',
            'resource_missing',
            'idempotency_error',
            'rate_limit_error',
            'authentication_error',
            'authorization_error',
            'store_error',
            'server_error',
            'resource_locked_error',
            'unprocessable_entity_error',
            'invalid_request',
          ],
          examples: ['parameter_error'],
        },
        param: {
          description: 'If the error is parameter-specific, the parameter related to the error',
          type: ['string', 'null'],
          examples: ['customer_id'],
        },
        doc_url: {
          description: 'A URL to more information about the error reported',
          type: ['string', 'null'],
          examples: ['https://errors.rev.cat/parameter-error'],
        },
        message: {
          type: ['string', 'null'],
          description: 'A message describing the reason of the error',
          examples: ["id shouldn't be longer than 1,500 characters"],
        },
        retryable: {
          description: 'Indicates if the error is retryable or not',
          type: ['boolean', 'null'],
          examples: [false],
        },
        backoff_ms: {
          description:
            'The ms the client should wait before retrying the request. Only present for retryable errors.',
          type: ['integer', 'null'],
          examples: [1000],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
export {
  AttachProductsToEntitlement,
  AttachProductsToPackage,
  CreateEntitlement,
  CreateOffering,
  CreatePackages,
  CreateProduct,
  DeleteEntitlement,
  DeleteOffering,
  DeletePackageFromOffering,
  DeleteProduct,
  DetachProductsFromEntitlement,
  DetachProductsFromPackage,
  GetApp,
  GetEntitlement,
  GetOffering,
  GetPackage,
  GetProduct,
  GetProductsFromEntitlement,
  GetProductsFromPackage,
  ListApps,
  ListEntitlements,
  ListOfferings,
  ListPackages,
  ListProducts,
  ListProjects,
  UpdateEntitlement,
  UpdateOffering,
  UpdatePackage,
};
