import * as React from 'react'
import { ListingCard } from '../Listings/ListingCard'
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

export const FrontPageListings = withFrontPageListings(({ loading, listing_front, error, variables }: ShapedProps) => {
    let limit = variables.limit
    let dummyListings = []

    // for (var i = 0; i < limit; i++) {
    //     dummyListings.push(<ListingsLoading key={i} />)
    // }

    if (loading) {
        return (
            <div className="flex flex-wrap">
                {
                    dummyListings.map(listing => listing)
                }
            </div>);
    }
    if (error) { return <h1>{error.extraInfo}</h1>; }
    return (
        <div>
            <ul className="list-reset latest-frontpage content-around">
                {
                    listing_front && listing_front.results.map(listing =>
                        <ListingCard listing={listing} key={listing.id} />
                    )
                }
            </ul>
        </div>)
});

export const FrontPage = () => {
    return <div className="center pt6 mw-site">
        <FrontPageListings limit={12} />
    </div>
}