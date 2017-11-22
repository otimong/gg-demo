import * as React from 'react'
import { latestFrontListings } from '../../static/data/index'
import * as Routes from '../../routes/routes'

const { Link } = Routes.routes

interface Props {
    limit?: number
    columns?: 2 | 3 | 4
}
export class FrontPageListings extends React.Component<Props, Object> {
    static defaultProps: Props = {
        limit: 12
    }
    render() {
        const { limit, columns } = this.props
        let cols;
        if (columns == 2) cols = 'w-1/2'
        if (columns == 3) cols = 'w-3/4'
        return (
            <div>
                <ul className="list-reset latest-frontpage content-around">
                    {
                        latestFrontListings.slice(0, limit).map(listing => (
                            <Link key={listing.title} route="listing" params={{ id: `${listing.id}`, slug: `${listing.category.slug}` }} prefetch={true} as={`/listing/${listing.id}${listing.category.slug}`} >
                                <a className="text-grey-darkest text-lg">
                                    <li className={`latest-frontpage-listing ${cols} xs:w-1/2 sm:w-100 xs:p-2`}>
                                        <div>
                                            {listing.image && <img src={listing.image.url} alt="" className="w-100" />}
                                            {!listing.image && <img src="../../static/place-holder.png" alt="" className="w-100" />}
                                        </div>
                                        <div className="bg-white text-center p-2">Kr. {(listing.price / 100).toLocaleString()}</div>
                                    </li>
                                </a>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        )
    }
}