import React from 'react'
import { graphql, QueryProps } from 'react-apollo'
import { FrontPageListings } from '../FrontPageListings/FrontPageListings'
import { Button } from '../../components'
import { Layout } from '../../components'
import { Ad } from '../../components'
import { Icon } from '../../components'
import Head from 'next/head'

import { ListingPageQuery as ListingsQuery } from '../../queries/ListingPage'
import { ListingPageQuery, ListingPageQueryVariables, ImageSizeType } from '../../queries/query-types'

type ExternalProps = {
    showAllBanners?: boolean
}
type SharedProps = ListingPageQuery & QueryProps & ExternalProps

const withListing = graphql<
    ListingPageQuery,
    ListingPageQueryVariables,
    QueryProps>(ListingsQuery, {
        options: ({ id, image_size }) => ({
            variables: { id, image_size },
        }),
        props: ({ data, ownProps }) => ({ ...data, ...ownProps }),
    })

const ListingsContainer: React.SFC<SharedProps> = ({ loading, listing, error, ...other }) => {
    if (loading) return <h1>loading...</h1>

    if (error || loading) {
    }
    if (!listing) return null;

    return (
        <div>
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="my-2">
                        {listing.title}
                    </h1>
                    <h1 className="my-2">
                        Kr. {(listing.price / 100).toLocaleString('da')}
                    </h1>
                </div>
                <div>

                </div>
            </div>
            <div className="sm:flex pb-2">
                <div className="sm:w-2/3 mr-2">
                    <div className="sm:flex justify-between shadow-md border" style={{ height: '600px', overflow: 'hidden' }}>
                        <div className="mr-2 flex-1 bg-grey-light">
                            {listing.image && <img className="block m-auto" src={listing.image.url} alt={listing.title} />}
                            {!listing.image && <div className="block m-auto"></div>}
                        </div>
                        <div className="items-center">
                            {listing.thumbnails.length > 0 &&
                                listing.thumbnails.map(image => (
                                    <div className="mb-2 bg-grey-light" key={image.url}>
                                        <img src={image.url} className="block m-auto" alt={listing.title} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="my-2 p-2 shadow-md border">
                        <h3>Beskrivelse:</h3>
                        <div className="py-4 whitespace-pre-wrap">
                            {listing.description}
                        </div>
                        <div>
                            <Button propClasses={['bg-blue']}> Vis Telephonenummer</Button>
                        </div>
                    </div>
                    <div>
                        {other.showAllBanners && <Ad width="100%" height={150} />}
                    </div>
                    <div className="shadow:md my-2 border">
                        <div className="bg-grey-light  p-2">
                            <h3>Spørgsmål og svar: {listing.title}</h3>
                        </div>
                    </div>
                    <div>
                        <FrontPageListings limit={4} />
                    </div>
                </div>
                <div className="sm:w-1/3">
                    <div className="shadow-md p-2 border leading-loose">
                        <h3 className="pb-2">Privat bruger</h3>
                        <div className="bg-yellow p-2 flex">
                            <div className="w-1/3 bg-grey-light">
                                {listing.user.avatar && <img src={listing.user.avatar.url} alt="" />}
                                {!listing.user.avatar &&
                                    <div className="text-center"><Icon type="user-circle-o" size="4x" classes="text-white" /></div>}
                            </div>
                            <div className="w-3/4 truncate px-2 text-sm">
                                <p className="font-bold"> {listing.user.username}</p>
                                <p> 6093 Sjølund</p>
                                <p> Medlem siden: 15/01-2005</p>
                            </div>
                        </div>
                        <div>Spørgsmål og svar</div>
                        <div>
                            <Button propClasses={['bg-blue']} onClick={() => console.log(this)}> Vis Telephonenummer</Button>
                        </div>

                    </div>

                    <div className="my-2">
                        {other.showAllBanners && <Ad width="100%" height={200} />}
                    </div>
                    <div className="my-2">
                        {other.showAllBanners && <Ad width="100%" height={200} />}
                    </div>
                    <div>
                        <h3 className="leading-loose">Lignende annoncer</h3>
                        <div className="tablet:w-100">
                            <FrontPageListings limit={8} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ListingsContainer.displayName = "Listing"

export const Listing = withListing(ListingsContainer)