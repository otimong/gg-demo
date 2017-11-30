import * as React from 'react'
import { latestFrontListings } from '../../static/data/index'
import { ListingCard } from './ListingCard'

interface Props {
    limit?: number
}
export class FrontPageListings extends React.Component<Props, Object> {
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
                            <ListingCard listing={listing} key={listing.id} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}