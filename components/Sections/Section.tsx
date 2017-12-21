import React, { Component } from 'react'
import { FrontPage } from '../Sections/FrontPage'
import { ImageSizeType } from '../../queries/query-types'
import {
    Ad,
    CheckBox,
    CategoryList,
    Header,
    LatestListings,
    Footer,
    Listing
} from '../../components'

const Route = require('../../routes/routes')
interface State {
    showTopBanner?: boolean
    showFollowBanners?: boolean
    showEarBanners?: boolean
    showAllBanners?: boolean
    showFrontPage?: boolean
    showListingPage?: boolean

}
interface Props { }

export class Section extends Component<Props, State> {
    state: State = {
        showTopBanner: true,
        showEarBanners: true,
        showFollowBanners: true,
        showAllBanners: true,
        showFrontPage: true,
        showListingPage: false
    }

    changeRout = () => {
        Route.Router.pushRoute('/blog/hello-world', { slug: 'someshit' })
    }
    render() {
        const { showTopBanner, showEarBanners, showAllBanners, showFrontPage, showListingPage } = this.state
        const { children } = this.props
        return (
            <div className="flex">
                <div className="bg-white w-1/6 h-screen mr-2">
                    <div className="leading-loose p-3 bg-blue text-white">
                        The Play Ground
                    </div>
                    <ul className="list-reset flex flex-col text-grey-dark">
                        <li className="border-b-2 p-3 cursor-pointer"
                            onClick={() => this.setState({
                                showFrontPage: true,
                                showListingPage: false
                            })
                            }>Front Page</li>
                        <li className="border-b-2 p-3 cursor-pointer"
                            onClick={() => this.setState({
                                showFrontPage: false,
                                showListingPage: true
                            })
                            }>Listing Page</li>
                        <li className="border-b-2 p-3 cursor-pointer">Components</li>
                    </ul>
                </div>
                <div className="w-full mr-2">
                    <nav className="bg-white flex leading-loose p-3 mb-2 h-100">
                        <CheckBox
                            label="Top Banner" name="top-banner"
                            value={showTopBanner}
                            checked={showTopBanner}
                            onChange={() => this.setState({ showTopBanner: !showTopBanner })}
                        />
                        <CheckBox
                            label="Ear Banners" name="ear-banners"
                            value={showEarBanners}
                            checked={showEarBanners}
                            onChange={() => this.setState({ showEarBanners: !showEarBanners })}
                        />
                        <CheckBox
                            label="All Banners" name="all-banners"
                            value={showAllBanners}
                            checked={showAllBanners}
                            onChange={() => this.setState({
                                showAllBanners: !showAllBanners,
                                showEarBanners: !showEarBanners,
                                showTopBanner: !showTopBanner
                            })}
                        />

                    </nav>
                    <div className="bg-white p-3">
                        <div className="max-w-3xl m-auto">
                            <Header showTopBanner={showTopBanner || showAllBanners} />
                            <div className="max-w-lg m-auto relative">
                                {showFrontPage && <FrontPage />}
                                {showListingPage && <Listing id={38820494} {...this.state} image_size={ImageSizeType.BIG} />}
                                {(showEarBanners || showAllBanners) &&
                                    <div className="flex justify-between">
                                        <div className="absolute pin-t" style={{ marginLeft: "-175px" }}>
                                            <Ad width="160px" height="600px" />
                                        </div>
                                        <div className="absolute pin-t" style={{ marginLeft: "945px" }}>
                                            <Ad width="160px" height="600px" />
                                        </div>
                                    </div>
                                }
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}