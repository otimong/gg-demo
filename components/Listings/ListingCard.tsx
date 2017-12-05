import * as React from 'react'
import * as Routes from '../../routes/routes'

const { Link } = Routes.routes

export interface Props {
    listing: any
}

export class ListingCard extends React.Component<Props, {}> {
    render() {
        const { listing } = this.props
        return (
            <div>
                <Link key={listing.title} route="listing" params={{ id: `${listing.id}`, slug: `${listing.category.slug}` }}
                      prefetch={true} as={`/listing/${listing.id}${listing.category.slug}`}>
                    <a className="text-grey-darkest text-lg">
                        <li className={`latest-frontpage-listing sm:w-100 xs:p-2`}>
                            <div className="flex justify-center">
                                {listing.image && <img src={listing.image.url} alt="" className="w-100" />}
                                {!listing.image && <img src="../../static/place-holder.png" alt="" className="w-100" />}
                            </div>
                            <div className="bg-white text-center p-2">Kr. {(listing.price / 100).toLocaleString()}</div>
                        </li>
                    </a>
                </Link>
            </div>
        )
    }
}