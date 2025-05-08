export interface IN_Response {
  status: string;
  code: number;
  message: string;
  data: IN_ProductData;
  header: null;
  setting: null;
  meta: null;
  links: null;
  extraObject: null;
  seoContent: IN_SeoContent[];
  _redirectUrl: IN_RedirectUrl;
  errorMessage: null;
}

export interface IN_ProductData {
  title: string;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
  slug: string;
  brandId: number;
  brandName: string;
  length: number;
  depth: number;
  width: number;
  code: string;
  score: number;
  wish: boolean;
  seo: null;
  bundlePrice: number;
  bundleDiscount: number;
  bundleQty: number;
  bundleStock: number;
  isBought: boolean;
  timedBundle: boolean;
  bundleFromDate: null | string;
  bundleToDate: null | string;
  hasFacility: boolean;
  isFake: boolean;
  description: string;
  shortDescription: null | string;
  productImages: IN_ProductImage[];
  properties: IN_Property[];
  publicAttribute: IN_PublicAttribute[];
  attributes: IN_Attribute[];
  upCell: IN_UpCell[];
  crossCell: any[];
  bundles: any[];
  insurances: IN_Insurance[];
  productCrossForcedSells: any[];
  brandSlug: string;
}

export interface IN_ProductImage {
  id: number;
  image: number;
  imageUrl: string;
}

export interface IN_Property {
  id: number;
  title: string;
  type: number;
  value: string;
  imageUrl: string;
  priceProperties: IN_PriceProperty[];
}

export interface IN_PriceProperty {
  id: number;
  title: string;
  type: number;
  value: string;
  code: string;
  price: number;
  insuranceBasePrice: number;
  insurancePrice: number;
  minBuy: number;
  maxBuy: number;
  discount: number;
  image: number;
  alt: null | string;
  imageUrl: string;
  active: boolean;
  stock: number;
  promotion: boolean;
  promotionFrom: null | string;
  promotionTo: null | string;
  promotionPrice: number;
  timedBundle: boolean;
  bundleFromDate: null | string;
  bundleToDate: null | string;
  description: null | string;
  hasSaleAbility: boolean;
}

export interface IN_PublicAttribute {
  id: number;
  name: string;
  value: string;
}

export interface IN_Attribute {
  id: null | number;
  group: string;
  groupAvatar: null | string;
  attributes: IN_AttributeDetail[];
}

export interface IN_AttributeDetail {
  id: number;
  title: string;
  name: string;
  preview: boolean;
  type: number;
  image: number | null;
  alt: null | string;
  imageUrl: string;
  values: IN_AttributeValue[];
}

export interface IN_AttributeValue {
  id: number;
  title: string;
  value: string;
  galleryId: null | number;
  imageUrl: string;
}

export interface IN_UpCell {
  id: number;
  title: string;
  categorySlug: string;
  slug: string;
  minPrice: number;
  maxPrice: number;
  hasRange: number;
  topDiscount: number;
  minPriceBeforeDiscount: number;
  available: boolean;
  discount: number;
  image: number;
  isBundle: boolean;
  alt: null | string;
  imageUrl: string;
  colors: IN_UpCellColor[];
  promotion: boolean;
  promotionFrom: null | string;
  promotionTo: null | string;
  promotionPrice: null | number;
  timedBundle: boolean;
  bundleFromDate: null | string;
  bundleToDate: null | string;
  shortDescription: null | string;
}

export interface IN_UpCellColor {
  title: string;
  value: string;
  imageUrl: string;
}

export interface IN_Insurance {
  id: number;
  title: string;
  avatar: string;
  imageUrl: string;
  description: string;
  Code: string;
  price: string;
}

export interface IN_SeoContent {
  value: string;
  seoTagName: string;
  seoTagType: number;
}

export interface IN_RedirectUrl {
  ToUrl: null | string;
  RedirectType: null | number;
}

export interface IN_CustomImageProps {
  src: string;
  alt: string;
  parentClasses?: string;
  imageClasses?: string;
}
