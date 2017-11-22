import * as React from 'react'
import { Ad, Icon, Button } from 'guloggratis-ui'
import Head from 'next/head'

import { Layout } from '../components/Layout'
import { FrontPageListings } from '../components/Listings/FrontPageListings'
import { latestFrontListings } from '../static/data/index'

interface Props {
    id?: any
}
export default class ListingPage extends React.Component<Props, Object> {
    static getInitialProps({ query: { id } }) {
        return { id }
    }
    render() {
        let { id } = this.props
        const listing = latestFrontListings.find(element => element.id == id)
        return (
            <div>
                <Layout title="Listing" >
                    <Head>
                        <title>{listing.title.toLocaleUpperCase()}</title>
                    </Head>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="my-2">
                                {listing.title}
                            </h1 >
                            <h1 className="my-2">
                                Kr. {(listing.price / 100).toLocaleString('da')}
                            </h1>
                        </div>
                        <div>
                            dfsdfdsfdsf
                        </div>
                    </div>
                    <div className="flex pb-2">
                        <div className="sm:w-2/3 mr-2">
                            <div className="flex justify-between shadow-md border" style={{ height: '600px', overflow: 'hidden' }}>
                                <div className="mr-2 flex-1 bg-grey-light">
                                    {listing.posterImage && <img className="block m-auto" src={listing.posterImage.url} alt={listing.title} />}
                                    {!listing.posterImage && <div className="block m-auto"> </div>}
                                </div>
                                <div className="items-center">
                                    {listing.images.length > 0 &&
                                        listing.images.map(image => (
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
                                    <Button propClasses={['bg-blue']} onClick={() => console.log(this)} > Vis Telephonenummer</Button>
                                </div>
                            </div>
                            <div>
                                <Ad width="100%" height={150} />
                            </div>
                            <div>
                                <h3>Spørgsmål og svar: {listing.title}</h3>
                            </div>
                            <div>
                                <FrontPageListings limit={4} columns={2} />
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="shadow-md p-2 border leading-loose">
                                <h3 className="pb-2">Privat bruger</h3>
                                <div className="bg-yellow p-2 flex">
                                    <div className="w-1/3 bg-grey-light">
                                        {listing.user.avatar && <img src={listing.user.avatar.url} alt="" />}
                                        {!listing.user.avatar && <div className="text-center"> <Icon type="user-circle-o" size="4x" classes="text-white" /> </div>}
                                    </div>
                                    <div className="w-3/4 truncate px-2 text-sm">
                                        <p className="font-bold"> {listing.user.username}</p>
                                        <p> 6093 Sjølund</p>
                                        <p> Medlem siden: 15/01-2005</p>
                                    </div>

                                </div>
                                <div>Spørgsmål og svar</div>
                                <div>
                                    <Button propClasses={['bg-blue']} onClick={() => console.log(this)} > Vis Telephonenummer</Button>
                                </div>

                            </div>

                            <div className="my-2">
                                <Ad width="100%" height={200} />
                            </div>
                            <div className="my-2">
                                <Ad width="100%" height={200} />
                            </div>
                            <div>
                                <h3 className="leading-loose">Lignende annoncer</h3>
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

