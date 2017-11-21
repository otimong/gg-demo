import React from "react"
import Head from 'next/head'
import { Ad } from 'guloggratis-ui'

import { Layout } from '../components/Layout'
import { Header } from "../components/Header/index"
import { Footer } from "../components/Footer/index"
import { BreadCrumb } from "../components/BreadCrumb"
import { CategoryList } from "../components/CategoryList"
import { LatestListings } from "../components/Listings/LatestListings"
import { FrontPageListings } from "../components/Listings/FrontPageListings"

export default () => (
    <div>
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
                <FrontPageListings limit={40} />
            </div>
        </Layout>
    </div>
)
