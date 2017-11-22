import * as React  from 'react'
import { latestListings } from '../../static/data/index'

import * as Router from '../../routes/routes'

interface Props {
    limit?: number
    header?: string
}

const Link = Router.routes.Link

export class LatestListings extends React.Component<Props, Object> {

    static defaultProps: Props = {
        header: 'Nyeste annoncer'
    }

    render() {
        const timeAgo = (date) => {
            let today: any = new Date()
            let listingDay: any = new Date(date);
            let seconds = (today - listingDay) / 1000
            let interval = Math.floor(seconds / 31536000)
            if (interval < 1) {
                return Math.floor(seconds) + "seconds"
            }
        }

        const { limit, header } = this.props
        const listings = Array.from(latestListings)
        return (
            <div className="py-2">
                <h4 className="bg-yellow p-2">{header}</h4>
                <ul className="list-reset flex flex-col">
                    {
                        listings.slice(0, limit).map(item => (
                            <Link key={item.title} href={`/listing/${item.id}`} prefetch >
                                <a href={`/listing/${item.id}`} className="text-grey-darkest">
                                    <li className="flex items-center justify-between py-2 border-b border-gray-darkest text-sm">
                                        <div className="w-1/6">
                                            <img src={item.image.url} alt="" />
                                        </div>
                                        <div className="truncate w-2/5">{item.title}</div>
                                        <div className="w-auto px-2 font-semibold">Kr. {(item.price / 100).toLocaleString('da')}</div>
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
