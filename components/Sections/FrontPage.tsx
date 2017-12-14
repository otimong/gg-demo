import React from 'react'
import { Ad, CategoryList, LatestListings } from '../../components'
import { FrontPage as Front } from '../FrontPageListings'

export const FrontPage = (props) => (
    <div className="relative">
        <div className="flex p-2">
            <div className="w-2/3">
                <CategoryList />
            </div>
            <div className="w-1/3">
                {props.showAllBanners && <Ad width="100%" height="260px" />}
                <LatestListings limit={3} />
            </div>
        </div>
        <Front />
    </div>
)

