var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { Ad, Button } from 'guloggratis-ui';
import { Layout } from '../components/Layout';
import { FrontPageListings } from '../components/Listings/FrontPageListings';
import { latestFrontListings } from '../static/data/index';
var ListingPage = /** @class */ (function (_super) {
    __extends(ListingPage, _super);
    function ListingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListingPage.getInitialProps = function (_a) {
        var id = _a.query.id;
        return { id: id };
    };
    ListingPage.prototype.render = function () {
        var _this = this;
        var id = this.props.id;
        var listing = latestFrontListings.find(function (element) { return element.id == id; });
        return (React.createElement("div", null,
            React.createElement(Layout, { title: "Listing" },
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("div", null,
                        React.createElement("div", null, listing.title),
                        React.createElement("div", null, listing.price)),
                    React.createElement("div", null, "dfsdfdsfdsf")),
                React.createElement("div", { className: "flex pb-2" },
                    React.createElement("div", { className: "sm:w-3/4 mr-2" },
                        React.createElement("div", { className: "flex justify-between shadow-md" },
                            React.createElement("div", { className: "mr-2 flex-1" }, listing.posterImage && React.createElement("img", { className: "block m-auto", src: listing.posterImage.url, alt: listing.title })),
                            React.createElement("div", { className: "items-center" }, listing.images.length > 0 &&
                                listing.images.map(function (image) { return (React.createElement("div", { className: "mb-2", key: image.url },
                                    React.createElement("img", { src: image.url, className: "block m-auto", alt: listing.title }))); }))),
                        React.createElement("div", { className: "my-2 p-2 shadow-md" },
                            React.createElement("h3", null, "Beskrivelse:"),
                            React.createElement("div", { className: "py-4" }, listing.description),
                            React.createElement("div", null,
                                React.createElement(Button, { propClasses: ['bg-blue'], onClick: function () { return console.log(_this); } }, " Vis Telephonenummer"))),
                        React.createElement("div", null,
                            React.createElement(Ad, { width: "100%", height: 150 })),
                        React.createElement("div", null,
                            React.createElement(FrontPageListings, { limit: 4 }))),
                    React.createElement("div", { className: "w-1/4" },
                        React.createElement("div", { className: "shadow-md p-2" },
                            React.createElement("h3", { className: "pb-2" }, "Privat bruger"),
                            React.createElement("div", { className: "bg-yellow p-2" },
                                React.createElement("div", null, listing.user.avatar && React.createElement("img", { src: listing.user.avatar.url, alt: "" })),
                                React.createElement("div", null, listing.user.username))),
                        React.createElement("div", { className: "my-2" },
                            React.createElement(Ad, { width: "100%", height: 200 })),
                        React.createElement("div", { className: "my-2" },
                            React.createElement(Ad, { width: "100%", height: 200 })),
                        React.createElement("div", null,
                            React.createElement("h3", null, "Lignende annoncer"),
                            React.createElement("div", { className: "tablet:w-100" },
                                React.createElement(FrontPageListings, { limit: 8 }))))))));
    };
    return ListingPage;
}(Component));
export default ListingPage;
