import * as React from 'react'
import widthData from '../lib/widthData'
import { ImageSizeType } from '../queries/query-types'

import { Listing } from '../components/ListingPage/Listing'

export default widthData((props) =>
    <div>
        <Listing id={props.url.query.id} image_size={ImageSizeType.BIG} />
    </div>
)