import React from 'react'
import { GLink } from '../../components'

const Route = require('../../routes/routes')

const { Link } = Route

export interface Props {
    listing: any
}


export class ListingCard extends React.Component<Props, {}> {
    render() {
        const { listing } = this.props
        if (!listing) return <DummyCard />
        return (
            <GLink
                key={listing.title}
                route="#"
                prefetch={true} as={`/listing/${listing.id}${listing.category.slug}`}
                classes={['text-grey-darkest', 'text-lg']}
            >
                <li className={`latest-frontpage-listing sm:w-100 xs:p-2`}>
                    <div className="flex justify-center">
                        {listing.image && <img src={listing.image.url} alt="" className="w-100" />}
                        {!listing.image && <img src="../../static/place-holder.png" alt="" className="w-100" />}
                    </div>
                    <div className="bg-white text-center p-2">Kr. {(listing.price / 100).toLocaleString()}</div>
                </li>
            </GLink>
        )
    }
}

const DummyCard = () => (
    <div className="latest-frontpage-listing text-grey-darkest text-lg min-w-1/3">
        <div className=" sm:w-100 xs:p-2 h-48 bg-grey-light">
        </div>
        <div className="bg-white text-center p-2">Kr. 00</div>
    </div>
)

