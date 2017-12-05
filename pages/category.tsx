import * as React from 'react'
import widthData from '../lib/widthData'
import { ImageSizeType } from '../queries/query-types'

import { Listing } from '../components/ListingPage/Listing'

export default widthData((props) =>
    <div>
        <pre>
            {JSON.stringify(props,null,2)}
        </pre>
    </div>,
)