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
    this.core = new APICore(this.spec, 'revenuecat/2.0.0 (api/6.0.0)');
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
   * This endpoint requires the following permission(s):
   * `project_configuration:projects:read`.
   *
   * @summary Get a list of projects
   */
  listProjects(
    metadata?: types.ListProjectsMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListProjectsResponse200>
    | FetchResponse<400, types.ListProjectsResponse400>
    | FetchResponse<401, types.ListProjectsResponse401>
    | FetchResponse<403, types.ListProjectsResponse403>
    | FetchResponse<404, types.ListProjectsResponse404>
    | FetchResponse<429, types.ListProjectsResponse429>
    | FetchResponse<500, types.ListProjectsResponse500>
    | FetchResponse<503, types.ListProjectsResponse503>
  > {
    return this.core.fetch('/projects', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s): `project_configuration:apps:read`.
   *
   * @summary Get a list of apps
   */
  listApps(
    metadata: types.ListAppsMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListAppsResponse200>
    | FetchResponse<400, types.ListAppsResponse400>
    | FetchResponse<401, types.ListAppsResponse401>
    | FetchResponse<403, types.ListAppsResponse403>
    | FetchResponse<404, types.ListAppsResponse404>
    | FetchResponse<429, types.ListAppsResponse429>
    | FetchResponse<500, types.ListAppsResponse500>
    | FetchResponse<503, types.ListAppsResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/apps', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s): `project_configuration:apps:read`.
   *
   * @summary Get an app
   */
  getApp(
    metadata: types.GetAppMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetAppResponse200>
    | FetchResponse<400, types.GetAppResponse400>
    | FetchResponse<401, types.GetAppResponse401>
    | FetchResponse<403, types.GetAppResponse403>
    | FetchResponse<404, types.GetAppResponse404>
    | FetchResponse<429, types.GetAppResponse429>
    | FetchResponse<500, types.GetAppResponse500>
    | FetchResponse<503, types.GetAppResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/apps/{app_id}', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:products:read`.
   *
   * @summary Get a product
   */
  getProduct(
    metadata: types.GetProductMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetProductResponse200>
    | FetchResponse<400, types.GetProductResponse400>
    | FetchResponse<401, types.GetProductResponse401>
    | FetchResponse<403, types.GetProductResponse403>
    | FetchResponse<404, types.GetProductResponse404>
    | FetchResponse<429, types.GetProductResponse429>
    | FetchResponse<500, types.GetProductResponse500>
    | FetchResponse<503, types.GetProductResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/products/{product_id}', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:products:read_write`.
   *
   * @summary Delete a product
   */
  deleteProduct(
    metadata: types.DeleteProductMetadataParam
  ): Promise<
    | FetchResponse<200, types.DeleteProductResponse200>
    | FetchResponse<400, types.DeleteProductResponse400>
    | FetchResponse<401, types.DeleteProductResponse401>
    | FetchResponse<403, types.DeleteProductResponse403>
    | FetchResponse<404, types.DeleteProductResponse404>
    | FetchResponse<409, types.DeleteProductResponse409>
    | FetchResponse<422, types.DeleteProductResponse422>
    | FetchResponse<423, types.DeleteProductResponse423>
    | FetchResponse<429, types.DeleteProductResponse429>
    | FetchResponse<500, types.DeleteProductResponse500>
    | FetchResponse<503, types.DeleteProductResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/products/{product_id}', 'delete', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:products:read`.
   *
   * @summary Get a list of products
   */
  listProducts(
    metadata: types.ListProductsMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListProductsResponse200>
    | FetchResponse<400, types.ListProductsResponse400>
    | FetchResponse<401, types.ListProductsResponse401>
    | FetchResponse<403, types.ListProductsResponse403>
    | FetchResponse<404, types.ListProductsResponse404>
    | FetchResponse<429, types.ListProductsResponse429>
    | FetchResponse<500, types.ListProductsResponse500>
    | FetchResponse<503, types.ListProductsResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/products', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:products:read_write`.
   *
   * @summary Create a product
   */
  createProduct(
    body: types.CreateProductBodyParam,
    metadata: types.CreateProductMetadataParam
  ): Promise<
    | FetchResponse<201, types.CreateProductResponse201>
    | FetchResponse<400, types.CreateProductResponse400>
    | FetchResponse<401, types.CreateProductResponse401>
    | FetchResponse<403, types.CreateProductResponse403>
    | FetchResponse<404, types.CreateProductResponse404>
    | FetchResponse<409, types.CreateProductResponse409>
    | FetchResponse<422, types.CreateProductResponse422>
    | FetchResponse<423, types.CreateProductResponse423>
    | FetchResponse<429, types.CreateProductResponse429>
    | FetchResponse<500, types.CreateProductResponse500>
    | FetchResponse<503, types.CreateProductResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/products', 'post', body, metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read`.
   *
   * @summary Get an entitlement
   */
  getEntitlement(
    metadata: types.GetEntitlementMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetEntitlementResponse200>
    | FetchResponse<400, types.GetEntitlementResponse400>
    | FetchResponse<401, types.GetEntitlementResponse401>
    | FetchResponse<403, types.GetEntitlementResponse403>
    | FetchResponse<404, types.GetEntitlementResponse404>
    | FetchResponse<429, types.GetEntitlementResponse429>
    | FetchResponse<500, types.GetEntitlementResponse500>
    | FetchResponse<503, types.GetEntitlementResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/entitlements/{entitlement_id}', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read_write`.
   *
   * @summary Update an entitlement
   */
  updateEntitlement(
    body: types.UpdateEntitlementBodyParam,
    metadata: types.UpdateEntitlementMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateEntitlementResponse200>
    | FetchResponse<400, types.UpdateEntitlementResponse400>
    | FetchResponse<401, types.UpdateEntitlementResponse401>
    | FetchResponse<403, types.UpdateEntitlementResponse403>
    | FetchResponse<404, types.UpdateEntitlementResponse404>
    | FetchResponse<409, types.UpdateEntitlementResponse409>
    | FetchResponse<422, types.UpdateEntitlementResponse422>
    | FetchResponse<423, types.UpdateEntitlementResponse423>
    | FetchResponse<429, types.UpdateEntitlementResponse429>
    | FetchResponse<500, types.UpdateEntitlementResponse500>
    | FetchResponse<503, types.UpdateEntitlementResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/entitlements/{entitlement_id}',
      'post',
      body,
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read_write`.
   *
   * @summary Delete an entitlement
   */
  deleteEntitlement(
    metadata: types.DeleteEntitlementMetadataParam
  ): Promise<
    | FetchResponse<200, types.DeleteEntitlementResponse200>
    | FetchResponse<400, types.DeleteEntitlementResponse400>
    | FetchResponse<401, types.DeleteEntitlementResponse401>
    | FetchResponse<403, types.DeleteEntitlementResponse403>
    | FetchResponse<404, types.DeleteEntitlementResponse404>
    | FetchResponse<409, types.DeleteEntitlementResponse409>
    | FetchResponse<422, types.DeleteEntitlementResponse422>
    | FetchResponse<423, types.DeleteEntitlementResponse423>
    | FetchResponse<429, types.DeleteEntitlementResponse429>
    | FetchResponse<500, types.DeleteEntitlementResponse500>
    | FetchResponse<503, types.DeleteEntitlementResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/entitlements/{entitlement_id}',
      'delete',
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read`.
   *
   * @summary Get a list of entitlements
   */
  listEntitlements(
    metadata: types.ListEntitlementsMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListEntitlementsResponse200>
    | FetchResponse<400, types.ListEntitlementsResponse400>
    | FetchResponse<401, types.ListEntitlementsResponse401>
    | FetchResponse<403, types.ListEntitlementsResponse403>
    | FetchResponse<404, types.ListEntitlementsResponse404>
    | FetchResponse<429, types.ListEntitlementsResponse429>
    | FetchResponse<500, types.ListEntitlementsResponse500>
    | FetchResponse<503, types.ListEntitlementsResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/entitlements', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read_write`.
   *
   * @summary Create an entitlement
   */
  createEntitlement(
    body: types.CreateEntitlementBodyParam,
    metadata: types.CreateEntitlementMetadataParam
  ): Promise<
    | FetchResponse<201, types.CreateEntitlementResponse201>
    | FetchResponse<400, types.CreateEntitlementResponse400>
    | FetchResponse<401, types.CreateEntitlementResponse401>
    | FetchResponse<403, types.CreateEntitlementResponse403>
    | FetchResponse<404, types.CreateEntitlementResponse404>
    | FetchResponse<409, types.CreateEntitlementResponse409>
    | FetchResponse<422, types.CreateEntitlementResponse422>
    | FetchResponse<423, types.CreateEntitlementResponse423>
    | FetchResponse<429, types.CreateEntitlementResponse429>
    | FetchResponse<500, types.CreateEntitlementResponse500>
    | FetchResponse<503, types.CreateEntitlementResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/entitlements', 'post', body, metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read`.
   *
   * @summary Get a list of products attached to a given entitlement
   */
  getProductsFromEntitlement(
    metadata: types.GetProductsFromEntitlementMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetProductsFromEntitlementResponse200>
    | FetchResponse<400, types.GetProductsFromEntitlementResponse400>
    | FetchResponse<401, types.GetProductsFromEntitlementResponse401>
    | FetchResponse<403, types.GetProductsFromEntitlementResponse403>
    | FetchResponse<404, types.GetProductsFromEntitlementResponse404>
    | FetchResponse<429, types.GetProductsFromEntitlementResponse429>
    | FetchResponse<500, types.GetProductsFromEntitlementResponse500>
    | FetchResponse<503, types.GetProductsFromEntitlementResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/entitlements/{entitlement_id}/products',
      'get',
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read_write`.
   *
   * @summary Attach a set of products to an entitlement
   */
  attachProductsToEntitlement(
    body: types.AttachProductsToEntitlementBodyParam,
    metadata: types.AttachProductsToEntitlementMetadataParam
  ): Promise<
    | FetchResponse<200, types.AttachProductsToEntitlementResponse200>
    | FetchResponse<400, types.AttachProductsToEntitlementResponse400>
    | FetchResponse<401, types.AttachProductsToEntitlementResponse401>
    | FetchResponse<403, types.AttachProductsToEntitlementResponse403>
    | FetchResponse<404, types.AttachProductsToEntitlementResponse404>
    | FetchResponse<409, types.AttachProductsToEntitlementResponse409>
    | FetchResponse<422, types.AttachProductsToEntitlementResponse422>
    | FetchResponse<423, types.AttachProductsToEntitlementResponse423>
    | FetchResponse<429, types.AttachProductsToEntitlementResponse429>
    | FetchResponse<500, types.AttachProductsToEntitlementResponse500>
    | FetchResponse<503, types.AttachProductsToEntitlementResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/entitlements/{entitlement_id}/actions/attach_products',
      'post',
      body,
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:entitlements:read_write`.
   *
   * @summary Detach a set of product from an entitlement
   */
  detachProductsFromEntitlement(
    body: types.DetachProductsFromEntitlementBodyParam,
    metadata: types.DetachProductsFromEntitlementMetadataParam
  ): Promise<
    | FetchResponse<200, types.DetachProductsFromEntitlementResponse200>
    | FetchResponse<400, types.DetachProductsFromEntitlementResponse400>
    | FetchResponse<401, types.DetachProductsFromEntitlementResponse401>
    | FetchResponse<403, types.DetachProductsFromEntitlementResponse403>
    | FetchResponse<404, types.DetachProductsFromEntitlementResponse404>
    | FetchResponse<409, types.DetachProductsFromEntitlementResponse409>
    | FetchResponse<422, types.DetachProductsFromEntitlementResponse422>
    | FetchResponse<423, types.DetachProductsFromEntitlementResponse423>
    | FetchResponse<429, types.DetachProductsFromEntitlementResponse429>
    | FetchResponse<500, types.DetachProductsFromEntitlementResponse500>
    | FetchResponse<503, types.DetachProductsFromEntitlementResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/entitlements/{entitlement_id}/actions/detach_products',
      'post',
      body,
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:offerings:read`.
   *
   * @summary Get an offering
   */
  getOffering(
    metadata: types.GetOfferingMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetOfferingResponse200>
    | FetchResponse<400, types.GetOfferingResponse400>
    | FetchResponse<401, types.GetOfferingResponse401>
    | FetchResponse<403, types.GetOfferingResponse403>
    | FetchResponse<404, types.GetOfferingResponse404>
    | FetchResponse<429, types.GetOfferingResponse429>
    | FetchResponse<500, types.GetOfferingResponse500>
    | FetchResponse<503, types.GetOfferingResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/offerings/{offering_id}', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:offerings:read_write`.
   *
   * @summary Update an offering
   */
  updateOffering(
    body: types.UpdateOfferingBodyParam,
    metadata: types.UpdateOfferingMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateOfferingResponse200>
    | FetchResponse<400, types.UpdateOfferingResponse400>
    | FetchResponse<401, types.UpdateOfferingResponse401>
    | FetchResponse<403, types.UpdateOfferingResponse403>
    | FetchResponse<404, types.UpdateOfferingResponse404>
    | FetchResponse<409, types.UpdateOfferingResponse409>
    | FetchResponse<422, types.UpdateOfferingResponse422>
    | FetchResponse<423, types.UpdateOfferingResponse423>
    | FetchResponse<429, types.UpdateOfferingResponse429>
    | FetchResponse<500, types.UpdateOfferingResponse500>
    | FetchResponse<503, types.UpdateOfferingResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/offerings/{offering_id}',
      'post',
      body,
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:offerings:read_write`.
   *
   * @summary Delete an offering and its attached packages
   */
  deleteOffering(
    metadata: types.DeleteOfferingMetadataParam
  ): Promise<
    | FetchResponse<200, types.DeleteOfferingResponse200>
    | FetchResponse<400, types.DeleteOfferingResponse400>
    | FetchResponse<401, types.DeleteOfferingResponse401>
    | FetchResponse<403, types.DeleteOfferingResponse403>
    | FetchResponse<404, types.DeleteOfferingResponse404>
    | FetchResponse<409, types.DeleteOfferingResponse409>
    | FetchResponse<422, types.DeleteOfferingResponse422>
    | FetchResponse<423, types.DeleteOfferingResponse423>
    | FetchResponse<429, types.DeleteOfferingResponse429>
    | FetchResponse<500, types.DeleteOfferingResponse500>
    | FetchResponse<503, types.DeleteOfferingResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/offerings/{offering_id}', 'delete', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:offerings:read`.
   *
   * @summary Get a list of offerings
   */
  listOfferings(
    metadata: types.ListOfferingsMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListOfferingsResponse200>
    | FetchResponse<400, types.ListOfferingsResponse400>
    | FetchResponse<401, types.ListOfferingsResponse401>
    | FetchResponse<403, types.ListOfferingsResponse403>
    | FetchResponse<404, types.ListOfferingsResponse404>
    | FetchResponse<429, types.ListOfferingsResponse429>
    | FetchResponse<500, types.ListOfferingsResponse500>
    | FetchResponse<503, types.ListOfferingsResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/offerings', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:offerings:read_write`.
   *
   * @summary Create an offering
   */
  createOffering(
    body: types.CreateOfferingBodyParam,
    metadata: types.CreateOfferingMetadataParam
  ): Promise<
    | FetchResponse<201, types.CreateOfferingResponse201>
    | FetchResponse<400, types.CreateOfferingResponse400>
    | FetchResponse<401, types.CreateOfferingResponse401>
    | FetchResponse<403, types.CreateOfferingResponse403>
    | FetchResponse<404, types.CreateOfferingResponse404>
    | FetchResponse<409, types.CreateOfferingResponse409>
    | FetchResponse<422, types.CreateOfferingResponse422>
    | FetchResponse<423, types.CreateOfferingResponse423>
    | FetchResponse<429, types.CreateOfferingResponse429>
    | FetchResponse<500, types.CreateOfferingResponse500>
    | FetchResponse<503, types.CreateOfferingResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/offerings', 'post', body, metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read`.
   *
   * @summary Get a list of packages in an offering
   */
  listPackages(
    metadata: types.ListPackagesMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListPackagesResponse200>
    | FetchResponse<400, types.ListPackagesResponse400>
    | FetchResponse<401, types.ListPackagesResponse401>
    | FetchResponse<403, types.ListPackagesResponse403>
    | FetchResponse<404, types.ListPackagesResponse404>
    | FetchResponse<429, types.ListPackagesResponse429>
    | FetchResponse<500, types.ListPackagesResponse500>
    | FetchResponse<503, types.ListPackagesResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/offerings/{offering_id}/packages',
      'get',
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read_write`.
   *
   * @summary Create a package
   */
  createPackages(
    body: types.CreatePackagesBodyParam,
    metadata: types.CreatePackagesMetadataParam
  ): Promise<
    | FetchResponse<201, types.CreatePackagesResponse201>
    | FetchResponse<400, types.CreatePackagesResponse400>
    | FetchResponse<401, types.CreatePackagesResponse401>
    | FetchResponse<403, types.CreatePackagesResponse403>
    | FetchResponse<404, types.CreatePackagesResponse404>
    | FetchResponse<409, types.CreatePackagesResponse409>
    | FetchResponse<422, types.CreatePackagesResponse422>
    | FetchResponse<423, types.CreatePackagesResponse423>
    | FetchResponse<429, types.CreatePackagesResponse429>
    | FetchResponse<500, types.CreatePackagesResponse500>
    | FetchResponse<503, types.CreatePackagesResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/offerings/{offering_id}/packages',
      'post',
      body,
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read`.
   *
   * @summary Get a package
   */
  getPackage(
    metadata: types.GetPackageMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetPackageResponse200>
    | FetchResponse<400, types.GetPackageResponse400>
    | FetchResponse<401, types.GetPackageResponse401>
    | FetchResponse<403, types.GetPackageResponse403>
    | FetchResponse<404, types.GetPackageResponse404>
    | FetchResponse<429, types.GetPackageResponse429>
    | FetchResponse<500, types.GetPackageResponse500>
    | FetchResponse<503, types.GetPackageResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/packages/{package_id}', 'get', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read_write`.
   *
   * @summary Update a package
   */
  updatePackage(
    body: types.UpdatePackageBodyParam,
    metadata: types.UpdatePackageMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdatePackageResponse200>
    | FetchResponse<400, types.UpdatePackageResponse400>
    | FetchResponse<401, types.UpdatePackageResponse401>
    | FetchResponse<403, types.UpdatePackageResponse403>
    | FetchResponse<404, types.UpdatePackageResponse404>
    | FetchResponse<409, types.UpdatePackageResponse409>
    | FetchResponse<422, types.UpdatePackageResponse422>
    | FetchResponse<423, types.UpdatePackageResponse423>
    | FetchResponse<429, types.UpdatePackageResponse429>
    | FetchResponse<500, types.UpdatePackageResponse500>
    | FetchResponse<503, types.UpdatePackageResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/packages/{package_id}', 'post', body, metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read_write`.
   *
   * @summary Delete a package
   */
  deletePackageFromOffering(
    metadata: types.DeletePackageFromOfferingMetadataParam
  ): Promise<
    | FetchResponse<200, types.DeletePackageFromOfferingResponse200>
    | FetchResponse<400, types.DeletePackageFromOfferingResponse400>
    | FetchResponse<401, types.DeletePackageFromOfferingResponse401>
    | FetchResponse<403, types.DeletePackageFromOfferingResponse403>
    | FetchResponse<404, types.DeletePackageFromOfferingResponse404>
    | FetchResponse<409, types.DeletePackageFromOfferingResponse409>
    | FetchResponse<422, types.DeletePackageFromOfferingResponse422>
    | FetchResponse<423, types.DeletePackageFromOfferingResponse423>
    | FetchResponse<429, types.DeletePackageFromOfferingResponse429>
    | FetchResponse<500, types.DeletePackageFromOfferingResponse500>
    | FetchResponse<503, types.DeletePackageFromOfferingResponse503>
  > {
    return this.core.fetch('/projects/{project_id}/packages/{package_id}', 'delete', metadata);
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read`.
   *
   * @summary Get a list of products attached to a given package of an offering
   */
  getProductsFromPackage(
    metadata: types.GetProductsFromPackageMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetProductsFromPackageResponse200>
    | FetchResponse<400, types.GetProductsFromPackageResponse400>
    | FetchResponse<401, types.GetProductsFromPackageResponse401>
    | FetchResponse<403, types.GetProductsFromPackageResponse403>
    | FetchResponse<404, types.GetProductsFromPackageResponse404>
    | FetchResponse<429, types.GetProductsFromPackageResponse429>
    | FetchResponse<500, types.GetProductsFromPackageResponse500>
    | FetchResponse<503, types.GetProductsFromPackageResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/packages/{package_id}/products',
      'get',
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read_write`.
   *
   * @summary Attach a set of products to a package
   */
  attachProductsToPackage(
    body: types.AttachProductsToPackageBodyParam,
    metadata: types.AttachProductsToPackageMetadataParam
  ): Promise<
    | FetchResponse<200, types.AttachProductsToPackageResponse200>
    | FetchResponse<400, types.AttachProductsToPackageResponse400>
    | FetchResponse<401, types.AttachProductsToPackageResponse401>
    | FetchResponse<403, types.AttachProductsToPackageResponse403>
    | FetchResponse<404, types.AttachProductsToPackageResponse404>
    | FetchResponse<409, types.AttachProductsToPackageResponse409>
    | FetchResponse<422, types.AttachProductsToPackageResponse422>
    | FetchResponse<423, types.AttachProductsToPackageResponse423>
    | FetchResponse<429, types.AttachProductsToPackageResponse429>
    | FetchResponse<500, types.AttachProductsToPackageResponse500>
    | FetchResponse<503, types.AttachProductsToPackageResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/packages/{package_id}/actions/attach_products',
      'post',
      body,
      metadata
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * `project_configuration:packages:read_write`.
   *
   * @summary Detach a set of products from a package
   */
  detachProductsFromPackage(
    body: types.DetachProductsFromPackageBodyParam,
    metadata: types.DetachProductsFromPackageMetadataParam
  ): Promise<
    | FetchResponse<200, types.DetachProductsFromPackageResponse200>
    | FetchResponse<400, types.DetachProductsFromPackageResponse400>
    | FetchResponse<401, types.DetachProductsFromPackageResponse401>
    | FetchResponse<403, types.DetachProductsFromPackageResponse403>
    | FetchResponse<404, types.DetachProductsFromPackageResponse404>
    | FetchResponse<409, types.DetachProductsFromPackageResponse409>
    | FetchResponse<422, types.DetachProductsFromPackageResponse422>
    | FetchResponse<423, types.DetachProductsFromPackageResponse423>
    | FetchResponse<429, types.DetachProductsFromPackageResponse429>
    | FetchResponse<500, types.DetachProductsFromPackageResponse500>
    | FetchResponse<503, types.DetachProductsFromPackageResponse503>
  > {
    return this.core.fetch(
      '/projects/{project_id}/packages/{package_id}/actions/detach_products',
      'post',
      body,
      metadata
    );
  }
}

const createSDK = (() => {
  return new SDK();
})();
export default createSDK;

export type {
  AttachProductsToEntitlementBodyParam,
  AttachProductsToEntitlementMetadataParam,
  AttachProductsToEntitlementResponse200,
  AttachProductsToEntitlementResponse400,
  AttachProductsToEntitlementResponse401,
  AttachProductsToEntitlementResponse403,
  AttachProductsToEntitlementResponse404,
  AttachProductsToEntitlementResponse409,
  AttachProductsToEntitlementResponse422,
  AttachProductsToEntitlementResponse423,
  AttachProductsToEntitlementResponse429,
  AttachProductsToEntitlementResponse500,
  AttachProductsToEntitlementResponse503,
  AttachProductsToPackageBodyParam,
  AttachProductsToPackageMetadataParam,
  AttachProductsToPackageResponse200,
  AttachProductsToPackageResponse400,
  AttachProductsToPackageResponse401,
  AttachProductsToPackageResponse403,
  AttachProductsToPackageResponse404,
  AttachProductsToPackageResponse409,
  AttachProductsToPackageResponse422,
  AttachProductsToPackageResponse423,
  AttachProductsToPackageResponse429,
  AttachProductsToPackageResponse500,
  AttachProductsToPackageResponse503,
  CreateEntitlementBodyParam,
  CreateEntitlementMetadataParam,
  CreateEntitlementResponse201,
  CreateEntitlementResponse400,
  CreateEntitlementResponse401,
  CreateEntitlementResponse403,
  CreateEntitlementResponse404,
  CreateEntitlementResponse409,
  CreateEntitlementResponse422,
  CreateEntitlementResponse423,
  CreateEntitlementResponse429,
  CreateEntitlementResponse500,
  CreateEntitlementResponse503,
  CreateOfferingBodyParam,
  CreateOfferingMetadataParam,
  CreateOfferingResponse201,
  CreateOfferingResponse400,
  CreateOfferingResponse401,
  CreateOfferingResponse403,
  CreateOfferingResponse404,
  CreateOfferingResponse409,
  CreateOfferingResponse422,
  CreateOfferingResponse423,
  CreateOfferingResponse429,
  CreateOfferingResponse500,
  CreateOfferingResponse503,
  CreatePackagesBodyParam,
  CreatePackagesMetadataParam,
  CreatePackagesResponse201,
  CreatePackagesResponse400,
  CreatePackagesResponse401,
  CreatePackagesResponse403,
  CreatePackagesResponse404,
  CreatePackagesResponse409,
  CreatePackagesResponse422,
  CreatePackagesResponse423,
  CreatePackagesResponse429,
  CreatePackagesResponse500,
  CreatePackagesResponse503,
  CreateProductBodyParam,
  CreateProductMetadataParam,
  CreateProductResponse201,
  CreateProductResponse400,
  CreateProductResponse401,
  CreateProductResponse403,
  CreateProductResponse404,
  CreateProductResponse409,
  CreateProductResponse422,
  CreateProductResponse423,
  CreateProductResponse429,
  CreateProductResponse500,
  CreateProductResponse503,
  DeleteEntitlementMetadataParam,
  DeleteEntitlementResponse200,
  DeleteEntitlementResponse400,
  DeleteEntitlementResponse401,
  DeleteEntitlementResponse403,
  DeleteEntitlementResponse404,
  DeleteEntitlementResponse409,
  DeleteEntitlementResponse422,
  DeleteEntitlementResponse423,
  DeleteEntitlementResponse429,
  DeleteEntitlementResponse500,
  DeleteEntitlementResponse503,
  DeleteOfferingMetadataParam,
  DeleteOfferingResponse200,
  DeleteOfferingResponse400,
  DeleteOfferingResponse401,
  DeleteOfferingResponse403,
  DeleteOfferingResponse404,
  DeleteOfferingResponse409,
  DeleteOfferingResponse422,
  DeleteOfferingResponse423,
  DeleteOfferingResponse429,
  DeleteOfferingResponse500,
  DeleteOfferingResponse503,
  DeletePackageFromOfferingMetadataParam,
  DeletePackageFromOfferingResponse200,
  DeletePackageFromOfferingResponse400,
  DeletePackageFromOfferingResponse401,
  DeletePackageFromOfferingResponse403,
  DeletePackageFromOfferingResponse404,
  DeletePackageFromOfferingResponse409,
  DeletePackageFromOfferingResponse422,
  DeletePackageFromOfferingResponse423,
  DeletePackageFromOfferingResponse429,
  DeletePackageFromOfferingResponse500,
  DeletePackageFromOfferingResponse503,
  DeleteProductMetadataParam,
  DeleteProductResponse200,
  DeleteProductResponse400,
  DeleteProductResponse401,
  DeleteProductResponse403,
  DeleteProductResponse404,
  DeleteProductResponse409,
  DeleteProductResponse422,
  DeleteProductResponse423,
  DeleteProductResponse429,
  DeleteProductResponse500,
  DeleteProductResponse503,
  DetachProductsFromEntitlementBodyParam,
  DetachProductsFromEntitlementMetadataParam,
  DetachProductsFromEntitlementResponse200,
  DetachProductsFromEntitlementResponse400,
  DetachProductsFromEntitlementResponse401,
  DetachProductsFromEntitlementResponse403,
  DetachProductsFromEntitlementResponse404,
  DetachProductsFromEntitlementResponse409,
  DetachProductsFromEntitlementResponse422,
  DetachProductsFromEntitlementResponse423,
  DetachProductsFromEntitlementResponse429,
  DetachProductsFromEntitlementResponse500,
  DetachProductsFromEntitlementResponse503,
  DetachProductsFromPackageBodyParam,
  DetachProductsFromPackageMetadataParam,
  DetachProductsFromPackageResponse200,
  DetachProductsFromPackageResponse400,
  DetachProductsFromPackageResponse401,
  DetachProductsFromPackageResponse403,
  DetachProductsFromPackageResponse404,
  DetachProductsFromPackageResponse409,
  DetachProductsFromPackageResponse422,
  DetachProductsFromPackageResponse423,
  DetachProductsFromPackageResponse429,
  DetachProductsFromPackageResponse500,
  DetachProductsFromPackageResponse503,
  GetAppMetadataParam,
  GetAppResponse200,
  GetAppResponse400,
  GetAppResponse401,
  GetAppResponse403,
  GetAppResponse404,
  GetAppResponse429,
  GetAppResponse500,
  GetAppResponse503,
  GetEntitlementMetadataParam,
  GetEntitlementResponse200,
  GetEntitlementResponse400,
  GetEntitlementResponse401,
  GetEntitlementResponse403,
  GetEntitlementResponse404,
  GetEntitlementResponse429,
  GetEntitlementResponse500,
  GetEntitlementResponse503,
  GetOfferingMetadataParam,
  GetOfferingResponse200,
  GetOfferingResponse400,
  GetOfferingResponse401,
  GetOfferingResponse403,
  GetOfferingResponse404,
  GetOfferingResponse429,
  GetOfferingResponse500,
  GetOfferingResponse503,
  GetPackageMetadataParam,
  GetPackageResponse200,
  GetPackageResponse400,
  GetPackageResponse401,
  GetPackageResponse403,
  GetPackageResponse404,
  GetPackageResponse429,
  GetPackageResponse500,
  GetPackageResponse503,
  GetProductMetadataParam,
  GetProductResponse200,
  GetProductResponse400,
  GetProductResponse401,
  GetProductResponse403,
  GetProductResponse404,
  GetProductResponse429,
  GetProductResponse500,
  GetProductResponse503,
  GetProductsFromEntitlementMetadataParam,
  GetProductsFromEntitlementResponse200,
  GetProductsFromEntitlementResponse400,
  GetProductsFromEntitlementResponse401,
  GetProductsFromEntitlementResponse403,
  GetProductsFromEntitlementResponse404,
  GetProductsFromEntitlementResponse429,
  GetProductsFromEntitlementResponse500,
  GetProductsFromEntitlementResponse503,
  GetProductsFromPackageMetadataParam,
  GetProductsFromPackageResponse200,
  GetProductsFromPackageResponse400,
  GetProductsFromPackageResponse401,
  GetProductsFromPackageResponse403,
  GetProductsFromPackageResponse404,
  GetProductsFromPackageResponse429,
  GetProductsFromPackageResponse500,
  GetProductsFromPackageResponse503,
  ListAppsMetadataParam,
  ListAppsResponse200,
  ListAppsResponse400,
  ListAppsResponse401,
  ListAppsResponse403,
  ListAppsResponse404,
  ListAppsResponse429,
  ListAppsResponse500,
  ListAppsResponse503,
  ListEntitlementsMetadataParam,
  ListEntitlementsResponse200,
  ListEntitlementsResponse400,
  ListEntitlementsResponse401,
  ListEntitlementsResponse403,
  ListEntitlementsResponse404,
  ListEntitlementsResponse429,
  ListEntitlementsResponse500,
  ListEntitlementsResponse503,
  ListOfferingsMetadataParam,
  ListOfferingsResponse200,
  ListOfferingsResponse400,
  ListOfferingsResponse401,
  ListOfferingsResponse403,
  ListOfferingsResponse404,
  ListOfferingsResponse429,
  ListOfferingsResponse500,
  ListOfferingsResponse503,
  ListPackagesMetadataParam,
  ListPackagesResponse200,
  ListPackagesResponse400,
  ListPackagesResponse401,
  ListPackagesResponse403,
  ListPackagesResponse404,
  ListPackagesResponse429,
  ListPackagesResponse500,
  ListPackagesResponse503,
  ListProductsMetadataParam,
  ListProductsResponse200,
  ListProductsResponse400,
  ListProductsResponse401,
  ListProductsResponse403,
  ListProductsResponse404,
  ListProductsResponse429,
  ListProductsResponse500,
  ListProductsResponse503,
  ListProjectsMetadataParam,
  ListProjectsResponse200,
  ListProjectsResponse400,
  ListProjectsResponse401,
  ListProjectsResponse403,
  ListProjectsResponse404,
  ListProjectsResponse429,
  ListProjectsResponse500,
  ListProjectsResponse503,
  UpdateEntitlementBodyParam,
  UpdateEntitlementMetadataParam,
  UpdateEntitlementResponse200,
  UpdateEntitlementResponse400,
  UpdateEntitlementResponse401,
  UpdateEntitlementResponse403,
  UpdateEntitlementResponse404,
  UpdateEntitlementResponse409,
  UpdateEntitlementResponse422,
  UpdateEntitlementResponse423,
  UpdateEntitlementResponse429,
  UpdateEntitlementResponse500,
  UpdateEntitlementResponse503,
  UpdateOfferingBodyParam,
  UpdateOfferingMetadataParam,
  UpdateOfferingResponse200,
  UpdateOfferingResponse400,
  UpdateOfferingResponse401,
  UpdateOfferingResponse403,
  UpdateOfferingResponse404,
  UpdateOfferingResponse409,
  UpdateOfferingResponse422,
  UpdateOfferingResponse423,
  UpdateOfferingResponse429,
  UpdateOfferingResponse500,
  UpdateOfferingResponse503,
  UpdatePackageBodyParam,
  UpdatePackageMetadataParam,
  UpdatePackageResponse200,
  UpdatePackageResponse400,
  UpdatePackageResponse401,
  UpdatePackageResponse403,
  UpdatePackageResponse404,
  UpdatePackageResponse409,
  UpdatePackageResponse422,
  UpdatePackageResponse423,
  UpdatePackageResponse429,
  UpdatePackageResponse500,
  UpdatePackageResponse503,
} from './types';
