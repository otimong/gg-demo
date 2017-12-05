import * as React from 'react'
import { latestListings } from '../../static/data/index'

import * as Router from '../../routes/routes'

interface Props {
    limit?: number
    header?: string
}

const Link = Router.routes.Link

export class LatestListings extends React.Component<Props, Object> {

    static defaultProps: Props = {
        header: 'Nyeste annoncer',
    }

    render() {
        const timeAgo = (date) => {
            let today: any = new Date()
            let listingDay: any = new Date(date)
            let seconds = (today - listingDay) / 1000
            let interval = Math.floor(seconds / 31536000)
            if (interval < 1) {
                return Math.floor(seconds) + 'seconds'
            }
        }

        const { limit, header } = this.props
        const listings = Array.from(latestListings)
        return (
            <div className="py-2">
                <h4 className="bg-yellow p-2">{header}</h4>
                <ul className="list-reset flex flex-col">
                    {
                        listings.slice(0, limit).map(listing => (
                            <Link key={listing.title} route="listing" params={{ id: `${listing.id}`, slug: `${listing.category.slug}` }}
                                  prefetch={true} as={`/listing/${listing.id}${listing.category.slug}`}>
                                <a href={`/listing/${listing.id}${listing.category.slug}`} className="text-grey-darkest">
                                    <li className="flex items-center justify-between py-2 border-b border-gray-darkest text-sm">
                                        <div className="w-1/6">
                                            <img src={listing.image.url} alt="" />
                                        </div>
                                        <div className="truncate w-2/5">{listing.title}</div>
                                        <div className="w-auto px-2 font-semibold">Kr. {(listing.price / 100).toLocaleString('da')}</div>
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
