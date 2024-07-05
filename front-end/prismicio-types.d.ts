// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type Section1DocumentDataSlicesSlice = never;

/**
 * Content for section1 documents
 */
interface Section1DocumentData {
  /**
   * campo1 field in *section1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.campo1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  campo1: prismic.KeyTextField;

  /**
   * campo2 field in *section1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.campo2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  campo2: prismic.KeyTextField;

  /**
   * background field in *section1*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.background
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background: prismic.ImageField<never>;

  /**
   * Slice Zone field in *section1*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Section1DocumentDataSlicesSlice>;
}

/**
 * section1 document from Prismic
 *
 * - **API ID**: `section1`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Section1Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Section1DocumentData>,
    "section1",
    Lang
  >;

type TagheaderDocumentDataSlicesSlice = never;

/**
 * Content for tagHeader documents
 */
interface TagheaderDocumentData {
  /**
   * logo field in *tagHeader*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tagheader.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logo: prismic.KeyTextField;

  /**
   * acount field in *tagHeader*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tagheader.acount
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  acount: prismic.KeyTextField;

  /**
   * cart field in *tagHeader*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tagheader.cart
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cart: prismic.ImageField<never>;

  /**
   * Slice Zone field in *tagHeader*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: tagheader.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TagheaderDocumentDataSlicesSlice>;
}

/**
 * tagHeader document from Prismic
 *
 * - **API ID**: `tagheader`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TagheaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TagheaderDocumentData>,
    "tagheader",
    Lang
  >;

export type AllDocumentTypes = Section1Document | TagheaderDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      Section1Document,
      Section1DocumentData,
      Section1DocumentDataSlicesSlice,
      TagheaderDocument,
      TagheaderDocumentData,
      TagheaderDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
