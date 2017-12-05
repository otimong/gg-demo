import gql from 'graphql-tag';

export const LatestListingsQuery = gql`
query LatestListings($limit:Int, $image_size:ImageSizeType)
{  
    listing_latest(limit:$limit){
      results{
        id
        title
        price
        image(size:$image_size){
          url
          size
          width
          height        
        }
      }
    }
}
`