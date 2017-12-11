import React from 'react'
import { Ad } from '../components/Ad'

import { Layout } from '../components'
import { CategoryList } from '../components/CategoryList'
import { LatestListings } from '../components/Listings/LatestListings'
import { FrontPage } from '../components/FrontPageListings/'

import widthData from '../lib/widthData'

export default widthData((props) => (
    <Layout title="Guloggratis 2.0">
        <div className="sm:flex lg:flex py-2">
            <div className="xs:w-100 lg:w-2/3">
                <CategoryList />
                <Ad width="100%" height={126} />
            </div>
            <div className="xs:w-100 lg:w-1/3">
                <Ad width="100%" height={250} />
                <LatestListings limit={3} />
            </div>
        </div>
        <div>
            <FrontPage />
        </div>
    </Layout>
))
