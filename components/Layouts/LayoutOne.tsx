import React from 'react'
import Head from 'next/head'
import { Section } from '../../components'

interface Props {
    title?: string
}

export const LayoutOne: React.SFC<Props> = ({ children, title }) => (
    <div className="bg-grey-light">
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            {/* <meta name="viewport" content="width=device-width, initial-scale=0.7, minimal-ui" /> */}
            <link rel="stylesheet" href="/static/styles.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <Section />
    </div>
)