import React, { Component } from 'react'
import {
    Ad,
    CheckBox,
    CategoryList,
    Header,
    LatestListings,
    FrontPage,
    Footer
} from '../../components'

interface State {
    showTopBanner?: boolean
    showFollowBanners?: boolean
    showEarBanners?: boolean
    showAllBanners?: boolean

}
interface Props { }

export class Section extends Component<Props, State> {
    state: State = {
        showTopBanner: true,
        showEarBanners: true,
        showFollowBanners: true,
        showAllBanners: true
    }
    render() {
        const { showTopBanner, showEarBanners, showAllBanners } = this.state
        return (
            <div className="flex">
                <div className="bg-white w-1/6 h-screen mr-2">
                    <div className="leading-loose p-3 bg-blue text-white">
                        The Play Ground
                    </div>
                    <ul className="list-reset flex flex-col p-3">
                        <li className="mb-3">Front Page</li>
                        <li className="mb-3">Listing Page</li>
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
                                <div className="flex p-2">
                                    <div className="w-2/3">
                                        <CategoryList />
                                    </div>
                                    <div className="w-1/3">
                                        {showAllBanners && <Ad width="100%" height="260px" />}
                                        <LatestListings limit={3} />
                                    </div>
                                </div>
                                <FrontPage />
                                {(showEarBanners || showAllBanners) &&
                                    <div className="flex justify-between">
                                        <div className="absolute pin-t" style={{ marginLeft: "-160px" }}>
                                            <Ad width="160px" height="600px" />
                                        </div>
                                        <div className="absolute pin-t" style={{ marginLeft: "930px" }}>
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