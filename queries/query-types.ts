/* tslint:disable */
//  This file was automatically generated and should not be edited.

export enum ImageSizeType {
  ORIGINAL = "ORIGINAL",
  HUGE = "HUGE",
  BIG = "BIG",
  NORMAL = "NORMAL",
  SMALL = "SMALL",
}


export enum TransactionType {
  SELL = "SELL",
  BUY = "BUY",
  GIVEAWAY = "GIVEAWAY",
  OTHER = "OTHER",
  RENT_OUT = "RENT_OUT",
  TO_RENT = "TO_RENT",
  UNKNOWN = "UNKNOWN",
}


export type FrontPageListingsQueryVariables = {
  limit?: number | null,
};

export type FrontPageListingsQuery = {
  // list the listings for the frontpage
  listing_front:  {
    // a list of results (Listings)
    results:  Array< {
      id: number,
      title: string,
      price: number,
      category:  {
        title: string,
        slug: string,
        title_slug: string,
      },
      images:  Array< {
        url: string,
        width: number,
        height: number,
      } > | null,
    } > | null,
  } | null,
};

export type ListingPageQueryVariables = {
  id: number,
  image_size?: ImageSizeType | null,
};

export type ListingPageQuery = {
  // lookup one listing
  listing:  {
    title: string,
    description: string,
    price: number,
    transaction_type: TransactionType,
    category:  {
      slug: string,
      title_slug: string,
    },
    image:  {
      url: string,
      width: number,
      height: number,
    } | null,
    images:  Array< {
      url: string,
      width: number,
      height: number,
    } > | null,
    thumbnails:  Array< {
      url: string,
      width: number,
      height: number,
    } > | null,
    user:  {
      username: string,
      phone: string,
      has_nemid: boolean | null,
      avatar:  {
        url: string,
        width: number,
        height: number,
      } | null,
    },
  } | null,
};
