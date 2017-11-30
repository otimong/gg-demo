import gql from 'graphql-tag';

export const frontPageListingsQuery = gql`
query FrontPageListings($limit:Int)
{
    listing_front(limit:$limit){
      results {
        id
        title
        price
        category{
          title
          slug
          title_slug
        }
        image{
          id
          url
          size
          width
          height
        }
      }
    }
  }
`
