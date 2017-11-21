import React, { Component } from 'react'
import { Ad, Button } from 'guloggratis-ui'

import { Layout } from '../components/Layout'
import { FrontPageListings } from '../components/Listings/FrontPageListings'
import { latestFrontListings } from '../static/data/index'

interface Props {
    id?: any
}
export default class ListingPage extends Component<Props, Object> {
    static getInitialProps({ query: { id } }) {
        return { id }
    }
    render() {
        let { id } = this.props
        const listing = latestFrontListings.find(element => element.id == id)
        return (
            <div>
                <Layout title="Listing" >
                    <div className="flex justify-between">
                        <div>
                            <div>
                                {listing.title}
                            </div>
                            <div>
                                {listing.price}
                            </div>
                        </div>
                        <div>
                            dfsdfdsfdsf
                        </div>
                    </div>
                    <div className="flex pb-2">
                        <div className="sm:w-3/4 mr-2">
                            <div className="flex justify-between shadow-md">
                                <div className="mr-2 flex-1">
                                    {listing.posterImage && <img className="block m-auto" src={listing.posterImage.url} alt={listing.title} />}
                                </div>
                                <div className="items-center">
                                    {listing.images.length > 0 &&
                                        listing.images.map(image => (
                                            <div className="mb-2" key={image.url}>
                                                <img src={image.url} className="block m-auto" alt={listing.title} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="my-2 p-2 shadow-md">
                                <h3>Beskrivelse:</h3>
                                <div className="py-4">
                                    {listing.description}
                                </div>
                                <div>
                                    <Button propClasses={['bg-blue']} onClick={() => console.log(this)} > Vis Telephonenummer</Button>
                                </div>
                            </div>
                            <div>
                                <Ad width="100%" height={150} />
                            </div>
                            <div>
                                <FrontPageListings limit={4} />
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="shadow-md p-2">
                                <h3 className="pb-2">Privat bruger</h3>
                                <div className="bg-yellow p-2">
                                    <div>
                                        {listing.user.avatar && <img src={listing.user.avatar.url} alt="" />}
                                    </div>
                                    <div>{listing.user.username}</div>
                                </div>
                            </div>

                            <div className="my-2">
                                <Ad width="100%" height={200} />
                            </div>
                            <div className="my-2">
                                <Ad width="100%" height={200} />
                            </div>
                            <div>
                                <h3>Lignende annoncer</h3>
                                <div className="tablet:w-100">
                                    <FrontPageListings limit={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

