import gql from 'graphql-tag';

export const ListingPageQuery = gql`
query ListingPage($id:Int!, $image_size:ImageSizeType)
{
    listing(id:$id) {
        title
        description
        price
        transaction_type
        category{
            slug
            title_slug      
        }
        image(size:$image_size) {
            url
            width
            height
        }
        images(size:$image_size) {
            url
            width
            height
        }
        thumbnails:images(size:SMALL) {
            url
            width
            height
        }
        user {
            username
            phone
            has_nemid
            avatar(size:SMALL){
                url
                width
                height
            }
        }
    }
  }  
`