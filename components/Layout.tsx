import React from 'react'
import Head from 'next/head'

import { Header } from "../components/Header/index"
import { Footer } from "../components/Footer/index"
import { BreadCrumb } from "../components/BreadCrumb"

interface Props {
    title: string
}

export const Layout: React.SFC<Props> = (props) => (
    <div className="w-100">
        <Head>
            <title>{props.title}</title>
            <meta charSet='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />
            {/* <meta name="viewport" content="width=device-width" /> */}
            
            <link rel="stylesheet" href="/static/normalize.css" />
            <link rel="stylesheet" href="/static/styles.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <Header />
        <div className="middle-section mx-auto max-w-lg shadow-lg">
            <BreadCrumb />
            <div className="container px-2">
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
)