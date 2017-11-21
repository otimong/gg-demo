import React from 'react'
import { ListingCard, ListingsLoading } from 'guloggratis-ui'
import { graphql, QueryProps } from 'react-apollo';
import { frontPageListingsQuery } from '../../queries/FrontPageListings'
import { FrontPageListingsQuery, FrontPageListingsQueryVariables } from '../../queries/query-types'

type ShapedProps = FrontPageListingsQuery & QueryProps;

const withFrontPageListings = graphql<
    FrontPageListingsQuery,
    FrontPageListingsQueryVariables,
    ShapedProps
    >(frontPageListingsQuery, {
        options: ({ limit }) => ({
            variables: { limit },
        }),
        props: ({ data }) => ({ ...data })
    });

const FrontPageListings = withFrontPageListings(({ loading, listing_front, error, variables }: ShapedProps) => {
    let limit = variables.limit
    let dummyListings = []

    for (var i = 0; i < limit; i++) {
        dummyListings.push(<ListingsLoading key={i} />)
    }

    if (loading) {
        return (
            <div className="flex flex-wrap">
                {
                    dummyListings.map(listing => listing)
                }
            </div>);
    }
    if (error) { return <h1>ERROR</h1>; }
    return (
        <div className="flex flex-wrap">
            {
                listing_front && listing_front.results.map(listing =>
                    <ListingCard cardData={listing} key={listing.id} />
                )
            }
        </div>)
});

export const FrontPage = () => {
    return <div className="center pt6 mw-site">
        <FrontPageListings limit={12} />
    </div>
}