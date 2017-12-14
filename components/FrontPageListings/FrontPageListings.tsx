import React from 'react'
import { ListingCard } from '../Listings/ListingCard'
import { graphql, QueryProps } from 'react-apollo'
import { frontPageListingsQuery } from '../../queries/FrontPageListings'
import { FrontPageListingsQuery, FrontPageListingsQueryVariables } from '../../queries/query-types'
import { latestFrontListings } from '../../static/data'

type ShapedProps = FrontPageListingsQuery & QueryProps;

const withFrontPageListings = graphql<FrontPageListingsQuery,
    FrontPageListingsQueryVariables,
    ShapedProps>(frontPageListingsQuery, {
        options: ({ limit }) => ({
            variables: { limit },
        }),
        props: ({ data }) => ({ ...data }),
    })

export const FrontPageListings = withFrontPageListings(({ loading, listing_front, error, variables }: ShapedProps) => {
    let limit = variables.limit
    let dummyListings = []
    let data;

    if (listing_front) data = listing_front
    if (loading || error) {
        data = latestFrontListings
    }

    return (
        <div>
            <ul className="list-reset latest-frontpage content-around">
                {
                    data && data.results.map(listing =>
                        <ListingCard listing={listing} key={listing.id} />,
                    )
                }
            </ul>
        </div>)
})

export const FrontPage = () =>
    <div className="center pt6 mw-site">
        <FrontPageListings limit={12} />
    </div>