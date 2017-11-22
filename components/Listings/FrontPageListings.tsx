import React, { Component } from 'react'
import { latestFrontListings } from '../../static/data/index'
import * as Routes from '../../routes/routes'

const { Link } = Routes.routes

interface Props {
    limit?: number
}
export class FrontPageListings extends Component<Props, Object> {
    static defaultProps: Props = {
        limit: 12
    }
    render() {
        const { limit } = this.props
        return (
            <div>
                <ul className="list-reset latest-frontpage content-around">
                    {
                        latestFrontListings.slice(0, limit).map(listing => (
                            <Link key={listing.title} route="listing" params={{ id: `${listing.id}`, slug: `${listing.category.title}` }} prefetch={true} >
                                <a className="text-grey-darkest text-lg">
                                    <li className="latest-frontpage-listing xs:w-1/2 sm:w-100 xs:p-2">
                                        <div>
                                            {listing.image && <img src={listing.image.url} alt="" className="w-100" />}
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