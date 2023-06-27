import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AttachProductsToEntitlementBodyParam = FromSchema<
  typeof schemas.AttachProductsToEntitlement.body
>;
export type AttachProductsToEntitlementMetadataParam = FromSchema<
  typeof schemas.AttachProductsToEntitlement.metadata
>;
export type AttachProductsToEntitlementResponse200 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['200']
>;
export type AttachProductsToEntitlementResponse400 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['400']
>;
export type AttachProductsToEntitlementResponse401 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['401']
>;
export type AttachProductsToEntitlementResponse403 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['403']
>;
export type AttachProductsToEntitlementResponse404 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['404']
>;
export type AttachProductsToEntitlementResponse409 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['409']
>;
export type AttachProductsToEntitlementResponse422 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['422']
>;
export type AttachProductsToEntitlementResponse423 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['423']
>;
export type AttachProductsToEntitlementResponse429 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['429']
>;
export type AttachProductsToEntitlementResponse500 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['500']
>;
export type AttachProductsToEntitlementResponse503 = FromSchema<
  (typeof schemas.AttachProductsToEntitlement.response)['503']
>;
export type AttachProductsToPackageBodyParam = FromSchema<
  typeof schemas.AttachProductsToPackage.body
>;
export type AttachProductsToPackageMetadataParam = FromSchema<
  typeof schemas.AttachProductsToPackage.metadata
>;
export type AttachProductsToPackageResponse200 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['200']
>;
export type AttachProductsToPackageResponse400 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['400']
>;
export type AttachProductsToPackageResponse401 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['401']
>;
export type AttachProductsToPackageResponse403 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['403']
>;
export type AttachProductsToPackageResponse404 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['404']
>;
export type AttachProductsToPackageResponse409 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['409']
>;
export type AttachProductsToPackageResponse422 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['422']
>;
export type AttachProductsToPackageResponse423 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['423']
>;
export type AttachProductsToPackageResponse429 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['429']
>;
export type AttachProductsToPackageResponse500 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['500']
>;
export type AttachProductsToPackageResponse503 = FromSchema<
  (typeof schemas.AttachProductsToPackage.response)['503']
>;
export type CreateEntitlementBodyParam = FromSchema<typeof schemas.CreateEntitlement.body>;
export type CreateEntitlementMetadataParam = FromSchema<typeof schemas.CreateEntitlement.metadata>;
export type CreateEntitlementResponse201 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['201']
>;
export type CreateEntitlementResponse400 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['400']
>;
export type CreateEntitlementResponse401 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['401']
>;
export type CreateEntitlementResponse403 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['403']
>;
export type CreateEntitlementResponse404 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['404']
>;
export type CreateEntitlementResponse409 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['409']
>;
export type CreateEntitlementResponse422 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['422']
>;
export type CreateEntitlementResponse423 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['423']
>;
export type CreateEntitlementResponse429 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['429']
>;
export type CreateEntitlementResponse500 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['500']
>;
export type CreateEntitlementResponse503 = FromSchema<
  (typeof schemas.CreateEntitlement.response)['503']
>;
export type CreateOfferingBodyParam = FromSchema<typeof schemas.CreateOffering.body>;
export type CreateOfferingMetadataParam = FromSchema<typeof schemas.CreateOffering.metadata>;
export type CreateOfferingResponse201 = FromSchema<(typeof schemas.CreateOffering.response)['201']>;
export type CreateOfferingResponse400 = FromSchema<(typeof schemas.CreateOffering.response)['400']>;
export type CreateOfferingResponse401 = FromSchema<(typeof schemas.CreateOffering.response)['401']>;
export type CreateOfferingResponse403 = FromSchema<(typeof schemas.CreateOffering.response)['403']>;
export type CreateOfferingResponse404 = FromSchema<(typeof schemas.CreateOffering.response)['404']>;
export type CreateOfferingResponse409 = FromSchema<(typeof schemas.CreateOffering.response)['409']>;
export type CreateOfferingResponse422 = FromSchema<(typeof schemas.CreateOffering.response)['422']>;
export type CreateOfferingResponse423 = FromSchema<(typeof schemas.CreateOffering.response)['423']>;
export type CreateOfferingResponse429 = FromSchema<(typeof schemas.CreateOffering.response)['429']>;
export type CreateOfferingResponse500 = FromSchema<(typeof schemas.CreateOffering.response)['500']>;
export type CreateOfferingResponse503 = FromSchema<(typeof schemas.CreateOffering.response)['503']>;
export type CreatePackagesBodyParam = FromSchema<typeof schemas.CreatePackages.body>;
export type CreatePackagesMetadataParam = FromSchema<typeof schemas.CreatePackages.metadata>;
export type CreatePackagesResponse201 = FromSchema<(typeof schemas.CreatePackages.response)['201']>;
export type CreatePackagesResponse400 = FromSchema<(typeof schemas.CreatePackages.response)['400']>;
export type CreatePackagesResponse401 = FromSchema<(typeof schemas.CreatePackages.response)['401']>;
export type CreatePackagesResponse403 = FromSchema<(typeof schemas.CreatePackages.response)['403']>;
export type CreatePackagesResponse404 = FromSchema<(typeof schemas.CreatePackages.response)['404']>;
export type CreatePackagesResponse409 = FromSchema<(typeof schemas.CreatePackages.response)['409']>;
export type CreatePackagesResponse422 = FromSchema<(typeof schemas.CreatePackages.response)['422']>;
export type CreatePackagesResponse423 = FromSchema<(typeof schemas.CreatePackages.response)['423']>;
export type CreatePackagesResponse429 = FromSchema<(typeof schemas.CreatePackages.response)['429']>;
export type CreatePackagesResponse500 = FromSchema<(typeof schemas.CreatePackages.response)['500']>;
export type CreatePackagesResponse503 = FromSchema<(typeof schemas.CreatePackages.response)['503']>;
export type CreateProductBodyParam = FromSchema<typeof schemas.CreateProduct.body>;
export type CreateProductMetadataParam = FromSchema<typeof schemas.CreateProduct.metadata>;
export type CreateProductResponse201 = FromSchema<(typeof schemas.CreateProduct.response)['201']>;
export type CreateProductResponse400 = FromSchema<(typeof schemas.CreateProduct.response)['400']>;
export type CreateProductResponse401 = FromSchema<(typeof schemas.CreateProduct.response)['401']>;
export type CreateProductResponse403 = FromSchema<(typeof schemas.CreateProduct.response)['403']>;
export type CreateProductResponse404 = FromSchema<(typeof schemas.CreateProduct.response)['404']>;
export type CreateProductResponse409 = FromSchema<(typeof schemas.CreateProduct.response)['409']>;
export type CreateProductResponse422 = FromSchema<(typeof schemas.CreateProduct.response)['422']>;
export type CreateProductResponse423 = FromSchema<(typeof schemas.CreateProduct.response)['423']>;
export type CreateProductResponse429 = FromSchema<(typeof schemas.CreateProduct.response)['429']>;
export type CreateProductResponse500 = FromSchema<(typeof schemas.CreateProduct.response)['500']>;
export type CreateProductResponse503 = FromSchema<(typeof schemas.CreateProduct.response)['503']>;
export type DeleteEntitlementMetadataParam = FromSchema<typeof schemas.DeleteEntitlement.metadata>;
export type DeleteEntitlementResponse200 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['200']
>;
export type DeleteEntitlementResponse400 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['400']
>;
export type DeleteEntitlementResponse401 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['401']
>;
export type DeleteEntitlementResponse403 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['403']
>;
export type DeleteEntitlementResponse404 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['404']
>;
export type DeleteEntitlementResponse409 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['409']
>;
export type DeleteEntitlementResponse422 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['422']
>;
export type DeleteEntitlementResponse423 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['423']
>;
export type DeleteEntitlementResponse429 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['429']
>;
export type DeleteEntitlementResponse500 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['500']
>;
export type DeleteEntitlementResponse503 = FromSchema<
  (typeof schemas.DeleteEntitlement.response)['503']
>;
export type DeleteOfferingMetadataParam = FromSchema<typeof schemas.DeleteOffering.metadata>;
export type DeleteOfferingResponse200 = FromSchema<(typeof schemas.DeleteOffering.response)['200']>;
export type DeleteOfferingResponse400 = FromSchema<(typeof schemas.DeleteOffering.response)['400']>;
export type DeleteOfferingResponse401 = FromSchema<(typeof schemas.DeleteOffering.response)['401']>;
export type DeleteOfferingResponse403 = FromSchema<(typeof schemas.DeleteOffering.response)['403']>;
export type DeleteOfferingResponse404 = FromSchema<(typeof schemas.DeleteOffering.response)['404']>;
export type DeleteOfferingResponse409 = FromSchema<(typeof schemas.DeleteOffering.response)['409']>;
export type DeleteOfferingResponse422 = FromSchema<(typeof schemas.DeleteOffering.response)['422']>;
export type DeleteOfferingResponse423 = FromSchema<(typeof schemas.DeleteOffering.response)['423']>;
export type DeleteOfferingResponse429 = FromSchema<(typeof schemas.DeleteOffering.response)['429']>;
export type DeleteOfferingResponse500 = FromSchema<(typeof schemas.DeleteOffering.response)['500']>;
export type DeleteOfferingResponse503 = FromSchema<(typeof schemas.DeleteOffering.response)['503']>;
export type DeletePackageFromOfferingMetadataParam = FromSchema<
  typeof schemas.DeletePackageFromOffering.metadata
>;
export type DeletePackageFromOfferingResponse200 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['200']
>;
export type DeletePackageFromOfferingResponse400 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['400']
>;
export type DeletePackageFromOfferingResponse401 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['401']
>;
export type DeletePackageFromOfferingResponse403 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['403']
>;
export type DeletePackageFromOfferingResponse404 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['404']
>;
export type DeletePackageFromOfferingResponse409 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['409']
>;
export type DeletePackageFromOfferingResponse422 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['422']
>;
export type DeletePackageFromOfferingResponse423 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['423']
>;
export type DeletePackageFromOfferingResponse429 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['429']
>;
export type DeletePackageFromOfferingResponse500 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['500']
>;
export type DeletePackageFromOfferingResponse503 = FromSchema<
  (typeof schemas.DeletePackageFromOffering.response)['503']
>;
export type DeleteProductMetadataParam = FromSchema<typeof schemas.DeleteProduct.metadata>;
export type DeleteProductResponse200 = FromSchema<(typeof schemas.DeleteProduct.response)['200']>;
export type DeleteProductResponse400 = FromSchema<(typeof schemas.DeleteProduct.response)['400']>;
export type DeleteProductResponse401 = FromSchema<(typeof schemas.DeleteProduct.response)['401']>;
export type DeleteProductResponse403 = FromSchema<(typeof schemas.DeleteProduct.response)['403']>;
export type DeleteProductResponse404 = FromSchema<(typeof schemas.DeleteProduct.response)['404']>;
export type DeleteProductResponse409 = FromSchema<(typeof schemas.DeleteProduct.response)['409']>;
export type DeleteProductResponse422 = FromSchema<(typeof schemas.DeleteProduct.response)['422']>;
export type DeleteProductResponse423 = FromSchema<(typeof schemas.DeleteProduct.response)['423']>;
export type DeleteProductResponse429 = FromSchema<(typeof schemas.DeleteProduct.response)['429']>;
export type DeleteProductResponse500 = FromSchema<(typeof schemas.DeleteProduct.response)['500']>;
export type DeleteProductResponse503 = FromSchema<(typeof schemas.DeleteProduct.response)['503']>;
export type DetachProductsFromEntitlementBodyParam = FromSchema<
  typeof schemas.DetachProductsFromEntitlement.body
>;
export type DetachProductsFromEntitlementMetadataParam = FromSchema<
  typeof schemas.DetachProductsFromEntitlement.metadata
>;
export type DetachProductsFromEntitlementResponse200 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['200']
>;
export type DetachProductsFromEntitlementResponse400 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['400']
>;
export type DetachProductsFromEntitlementResponse401 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['401']
>;
export type DetachProductsFromEntitlementResponse403 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['403']
>;
export type DetachProductsFromEntitlementResponse404 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['404']
>;
export type DetachProductsFromEntitlementResponse409 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['409']
>;
export type DetachProductsFromEntitlementResponse422 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['422']
>;
export type DetachProductsFromEntitlementResponse423 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['423']
>;
export type DetachProductsFromEntitlementResponse429 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['429']
>;
export type DetachProductsFromEntitlementResponse500 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['500']
>;
export type DetachProductsFromEntitlementResponse503 = FromSchema<
  (typeof schemas.DetachProductsFromEntitlement.response)['503']
>;
export type DetachProductsFromPackageBodyParam = FromSchema<
  typeof schemas.DetachProductsFromPackage.body
>;
export type DetachProductsFromPackageMetadataParam = FromSchema<
  typeof schemas.DetachProductsFromPackage.metadata
>;
export type DetachProductsFromPackageResponse200 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['200']
>;
export type DetachProductsFromPackageResponse400 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['400']
>;
export type DetachProductsFromPackageResponse401 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['401']
>;
export type DetachProductsFromPackageResponse403 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['403']
>;
export type DetachProductsFromPackageResponse404 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['404']
>;
export type DetachProductsFromPackageResponse409 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['409']
>;
export type DetachProductsFromPackageResponse422 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['422']
>;
export type DetachProductsFromPackageResponse423 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['423']
>;
export type DetachProductsFromPackageResponse429 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['429']
>;
export type DetachProductsFromPackageResponse500 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['500']
>;
export type DetachProductsFromPackageResponse503 = FromSchema<
  (typeof schemas.DetachProductsFromPackage.response)['503']
>;
export type GetAppMetadataParam = FromSchema<typeof schemas.GetApp.metadata>;
export type GetAppResponse200 = FromSchema<(typeof schemas.GetApp.response)['200']>;
export type GetAppResponse400 = FromSchema<(typeof schemas.GetApp.response)['400']>;
export type GetAppResponse401 = FromSchema<(typeof schemas.GetApp.response)['401']>;
export type GetAppResponse403 = FromSchema<(typeof schemas.GetApp.response)['403']>;
export type GetAppResponse404 = FromSchema<(typeof schemas.GetApp.response)['404']>;
export type GetAppResponse429 = FromSchema<(typeof schemas.GetApp.response)['429']>;
export type GetAppResponse500 = FromSchema<(typeof schemas.GetApp.response)['500']>;
export type GetAppResponse503 = FromSchema<(typeof schemas.GetApp.response)['503']>;
export type GetEntitlementMetadataParam = FromSchema<typeof schemas.GetEntitlement.metadata>;
export type GetEntitlementResponse200 = FromSchema<(typeof schemas.GetEntitlement.response)['200']>;
export type GetEntitlementResponse400 = FromSchema<(typeof schemas.GetEntitlement.response)['400']>;
export type GetEntitlementResponse401 = FromSchema<(typeof schemas.GetEntitlement.response)['401']>;
export type GetEntitlementResponse403 = FromSchema<(typeof schemas.GetEntitlement.response)['403']>;
export type GetEntitlementResponse404 = FromSchema<(typeof schemas.GetEntitlement.response)['404']>;
export type GetEntitlementResponse429 = FromSchema<(typeof schemas.GetEntitlement.response)['429']>;
export type GetEntitlementResponse500 = FromSchema<(typeof schemas.GetEntitlement.response)['500']>;
export type GetEntitlementResponse503 = FromSchema<(typeof schemas.GetEntitlement.response)['503']>;
export type GetOfferingMetadataParam = FromSchema<typeof schemas.GetOffering.metadata>;
export type GetOfferingResponse200 = FromSchema<(typeof schemas.GetOffering.response)['200']>;
export type GetOfferingResponse400 = FromSchema<(typeof schemas.GetOffering.response)['400']>;
export type GetOfferingResponse401 = FromSchema<(typeof schemas.GetOffering.response)['401']>;
export type GetOfferingResponse403 = FromSchema<(typeof schemas.GetOffering.response)['403']>;
export type GetOfferingResponse404 = FromSchema<(typeof schemas.GetOffering.response)['404']>;
export type GetOfferingResponse429 = FromSchema<(typeof schemas.GetOffering.response)['429']>;
export type GetOfferingResponse500 = FromSchema<(typeof schemas.GetOffering.response)['500']>;
export type GetOfferingResponse503 = FromSchema<(typeof schemas.GetOffering.response)['503']>;
export type GetPackageMetadataParam = FromSchema<typeof schemas.GetPackage.metadata>;
export type GetPackageResponse200 = FromSchema<(typeof schemas.GetPackage.response)['200']>;
export type GetPackageResponse400 = FromSchema<(typeof schemas.GetPackage.response)['400']>;
export type GetPackageResponse401 = FromSchema<(typeof schemas.GetPackage.response)['401']>;
export type GetPackageResponse403 = FromSchema<(typeof schemas.GetPackage.response)['403']>;
export type GetPackageResponse404 = FromSchema<(typeof schemas.GetPackage.response)['404']>;
export type GetPackageResponse429 = FromSchema<(typeof schemas.GetPackage.response)['429']>;
export type GetPackageResponse500 = FromSchema<(typeof schemas.GetPackage.response)['500']>;
export type GetPackageResponse503 = FromSchema<(typeof schemas.GetPackage.response)['503']>;
export type GetProductMetadataParam = FromSchema<typeof schemas.GetProduct.metadata>;
export type GetProductResponse200 = FromSchema<(typeof schemas.GetProduct.response)['200']>;
export type GetProductResponse400 = FromSchema<(typeof schemas.GetProduct.response)['400']>;
export type GetProductResponse401 = FromSchema<(typeof schemas.GetProduct.response)['401']>;
export type GetProductResponse403 = FromSchema<(typeof schemas.GetProduct.response)['403']>;
export type GetProductResponse404 = FromSchema<(typeof schemas.GetProduct.response)['404']>;
export type GetProductResponse429 = FromSchema<(typeof schemas.GetProduct.response)['429']>;
export type GetProductResponse500 = FromSchema<(typeof schemas.GetProduct.response)['500']>;
export type GetProductResponse503 = FromSchema<(typeof schemas.GetProduct.response)['503']>;
export type GetProductsFromEntitlementMetadataParam = FromSchema<
  typeof schemas.GetProductsFromEntitlement.metadata
>;
export type GetProductsFromEntitlementResponse200 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['200']
>;
export type GetProductsFromEntitlementResponse400 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['400']
>;
export type GetProductsFromEntitlementResponse401 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['401']
>;
export type GetProductsFromEntitlementResponse403 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['403']
>;
export type GetProductsFromEntitlementResponse404 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['404']
>;
export type GetProductsFromEntitlementResponse429 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['429']
>;
export type GetProductsFromEntitlementResponse500 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['500']
>;
export type GetProductsFromEntitlementResponse503 = FromSchema<
  (typeof schemas.GetProductsFromEntitlement.response)['503']
>;
export type GetProductsFromPackageMetadataParam = FromSchema<
  typeof schemas.GetProductsFromPackage.metadata
>;
export type GetProductsFromPackageResponse200 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['200']
>;
export type GetProductsFromPackageResponse400 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['400']
>;
export type GetProductsFromPackageResponse401 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['401']
>;
export type GetProductsFromPackageResponse403 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['403']
>;
export type GetProductsFromPackageResponse404 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['404']
>;
export type GetProductsFromPackageResponse429 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['429']
>;
export type GetProductsFromPackageResponse500 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['500']
>;
export type GetProductsFromPackageResponse503 = FromSchema<
  (typeof schemas.GetProductsFromPackage.response)['503']
>;
export type ListAppsMetadataParam = FromSchema<typeof schemas.ListApps.metadata>;
export type ListAppsResponse200 = FromSchema<(typeof schemas.ListApps.response)['200']>;
export type ListAppsResponse400 = FromSchema<(typeof schemas.ListApps.response)['400']>;
export type ListAppsResponse401 = FromSchema<(typeof schemas.ListApps.response)['401']>;
export type ListAppsResponse403 = FromSchema<(typeof schemas.ListApps.response)['403']>;
export type ListAppsResponse404 = FromSchema<(typeof schemas.ListApps.response)['404']>;
export type ListAppsResponse429 = FromSchema<(typeof schemas.ListApps.response)['429']>;
export type ListAppsResponse500 = FromSchema<(typeof schemas.ListApps.response)['500']>;
export type ListAppsResponse503 = FromSchema<(typeof schemas.ListApps.response)['503']>;
export type ListEntitlementsMetadataParam = FromSchema<typeof schemas.ListEntitlements.metadata>;
export type ListEntitlementsResponse200 = FromSchema<
  (typeof schemas.ListEntitlements.response)['200']
>;
export type ListEntitlementsResponse400 = FromSchema<
  (typeof schemas.ListEntitlements.response)['400']
>;
export type ListEntitlementsResponse401 = FromSchema<
  (typeof schemas.ListEntitlements.response)['401']
>;
export type ListEntitlementsResponse403 = FromSchema<
  (typeof schemas.ListEntitlements.response)['403']
>;
export type ListEntitlementsResponse404 = FromSchema<
  (typeof schemas.ListEntitlements.response)['404']
>;
export type ListEntitlementsResponse429 = FromSchema<
  (typeof schemas.ListEntitlements.response)['429']
>;
export type ListEntitlementsResponse500 = FromSchema<
  (typeof schemas.ListEntitlements.response)['500']
>;
export type ListEntitlementsResponse503 = FromSchema<
  (typeof schemas.ListEntitlements.response)['503']
>;
export type ListOfferingsMetadataParam = FromSchema<typeof schemas.ListOfferings.metadata>;
export type ListOfferingsResponse200 = FromSchema<(typeof schemas.ListOfferings.response)['200']>;
export type ListOfferingsResponse400 = FromSchema<(typeof schemas.ListOfferings.response)['400']>;
export type ListOfferingsResponse401 = FromSchema<(typeof schemas.ListOfferings.response)['401']>;
export type ListOfferingsResponse403 = FromSchema<(typeof schemas.ListOfferings.response)['403']>;
export type ListOfferingsResponse404 = FromSchema<(typeof schemas.ListOfferings.response)['404']>;
export type ListOfferingsResponse429 = FromSchema<(typeof schemas.ListOfferings.response)['429']>;
export type ListOfferingsResponse500 = FromSchema<(typeof schemas.ListOfferings.response)['500']>;
export type ListOfferingsResponse503 = FromSchema<(typeof schemas.ListOfferings.response)['503']>;
export type ListPackagesMetadataParam = FromSchema<typeof schemas.ListPackages.metadata>;
export type ListPackagesResponse200 = FromSchema<(typeof schemas.ListPackages.response)['200']>;
export type ListPackagesResponse400 = FromSchema<(typeof schemas.ListPackages.response)['400']>;
export type ListPackagesResponse401 = FromSchema<(typeof schemas.ListPackages.response)['401']>;
export type ListPackagesResponse403 = FromSchema<(typeof schemas.ListPackages.response)['403']>;
export type ListPackagesResponse404 = FromSchema<(typeof schemas.ListPackages.response)['404']>;
export type ListPackagesResponse429 = FromSchema<(typeof schemas.ListPackages.response)['429']>;
export type ListPackagesResponse500 = FromSchema<(typeof schemas.ListPackages.response)['500']>;
export type ListPackagesResponse503 = FromSchema<(typeof schemas.ListPackages.response)['503']>;
export type ListProductsMetadataParam = FromSchema<typeof schemas.ListProducts.metadata>;
export type ListProductsResponse200 = FromSchema<(typeof schemas.ListProducts.response)['200']>;
export type ListProductsResponse400 = FromSchema<(typeof schemas.ListProducts.response)['400']>;
export type ListProductsResponse401 = FromSchema<(typeof schemas.ListProducts.response)['401']>;
export type ListProductsResponse403 = FromSchema<(typeof schemas.ListProducts.response)['403']>;
export type ListProductsResponse404 = FromSchema<(typeof schemas.ListProducts.response)['404']>;
export type ListProductsResponse429 = FromSchema<(typeof schemas.ListProducts.response)['429']>;
export type ListProductsResponse500 = FromSchema<(typeof schemas.ListProducts.response)['500']>;
export type ListProductsResponse503 = FromSchema<(typeof schemas.ListProducts.response)['503']>;
export type ListProjectsMetadataParam = FromSchema<typeof schemas.ListProjects.metadata>;
export type ListProjectsResponse200 = FromSchema<(typeof schemas.ListProjects.response)['200']>;
export type ListProjectsResponse400 = FromSchema<(typeof schemas.ListProjects.response)['400']>;
export type ListProjectsResponse401 = FromSchema<(typeof schemas.ListProjects.response)['401']>;
export type ListProjectsResponse403 = FromSchema<(typeof schemas.ListProjects.response)['403']>;
export type ListProjectsResponse404 = FromSchema<(typeof schemas.ListProjects.response)['404']>;
export type ListProjectsResponse429 = FromSchema<(typeof schemas.ListProjects.response)['429']>;
export type ListProjectsResponse500 = FromSchema<(typeof schemas.ListProjects.response)['500']>;
export type ListProjectsResponse503 = FromSchema<(typeof schemas.ListProjects.response)['503']>;
export type UpdateEntitlementBodyParam = FromSchema<typeof schemas.UpdateEntitlement.body>;
export type UpdateEntitlementMetadataParam = FromSchema<typeof schemas.UpdateEntitlement.metadata>;
export type UpdateEntitlementResponse200 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['200']
>;
export type UpdateEntitlementResponse400 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['400']
>;
export type UpdateEntitlementResponse401 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['401']
>;
export type UpdateEntitlementResponse403 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['403']
>;
export type UpdateEntitlementResponse404 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['404']
>;
export type UpdateEntitlementResponse409 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['409']
>;
export type UpdateEntitlementResponse422 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['422']
>;
export type UpdateEntitlementResponse423 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['423']
>;
export type UpdateEntitlementResponse429 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['429']
>;
export type UpdateEntitlementResponse500 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['500']
>;
export type UpdateEntitlementResponse503 = FromSchema<
  (typeof schemas.UpdateEntitlement.response)['503']
>;
export type UpdateOfferingBodyParam = FromSchema<typeof schemas.UpdateOffering.body>;
export type UpdateOfferingMetadataParam = FromSchema<typeof schemas.UpdateOffering.metadata>;
export type UpdateOfferingResponse200 = FromSchema<(typeof schemas.UpdateOffering.response)['200']>;
export type UpdateOfferingResponse400 = FromSchema<(typeof schemas.UpdateOffering.response)['400']>;
export type UpdateOfferingResponse401 = FromSchema<(typeof schemas.UpdateOffering.response)['401']>;
export type UpdateOfferingResponse403 = FromSchema<(typeof schemas.UpdateOffering.response)['403']>;
export type UpdateOfferingResponse404 = FromSchema<(typeof schemas.UpdateOffering.response)['404']>;
export type UpdateOfferingResponse409 = FromSchema<(typeof schemas.UpdateOffering.response)['409']>;
export type UpdateOfferingResponse422 = FromSchema<(typeof schemas.UpdateOffering.response)['422']>;
export type UpdateOfferingResponse423 = FromSchema<(typeof schemas.UpdateOffering.response)['423']>;
export type UpdateOfferingResponse429 = FromSchema<(typeof schemas.UpdateOffering.response)['429']>;
export type UpdateOfferingResponse500 = FromSchema<(typeof schemas.UpdateOffering.response)['500']>;
export type UpdateOfferingResponse503 = FromSchema<(typeof schemas.UpdateOffering.response)['503']>;
export type UpdatePackageBodyParam = FromSchema<typeof schemas.UpdatePackage.body>;
export type UpdatePackageMetadataParam = FromSchema<typeof schemas.UpdatePackage.metadata>;
export type UpdatePackageResponse200 = FromSchema<(typeof schemas.UpdatePackage.response)['200']>;
export type UpdatePackageResponse400 = FromSchema<(typeof schemas.UpdatePackage.response)['400']>;
export type UpdatePackageResponse401 = FromSchema<(typeof schemas.UpdatePackage.response)['401']>;
export type UpdatePackageResponse403 = FromSchema<(typeof schemas.UpdatePackage.response)['403']>;
export type UpdatePackageResponse404 = FromSchema<(typeof schemas.UpdatePackage.response)['404']>;
export type UpdatePackageResponse409 = FromSchema<(typeof schemas.UpdatePackage.response)['409']>;
export type UpdatePackageResponse422 = FromSchema<(typeof schemas.UpdatePackage.response)['422']>;
export type UpdatePackageResponse423 = FromSchema<(typeof schemas.UpdatePackage.response)['423']>;
export type UpdatePackageResponse429 = FromSchema<(typeof schemas.UpdatePackage.response)['429']>;
export type UpdatePackageResponse500 = FromSchema<(typeof schemas.UpdatePackage.response)['500']>;
export type UpdatePackageResponse503 = FromSchema<(typeof schemas.UpdatePackage.response)['503']>;
