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
import { latestFrontListings } from '../../static/data/index';
import Link from 'next/link';
var FrontPageListings = /** @class */ (function (_super) {
    __extends(FrontPageListings, _super);
    function FrontPageListings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontPageListings.prototype.render = function () {
        var limit = this.props.limit;
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-reset latest-frontpage content-around" }, latestFrontListings.slice(0, limit).map(function (listing) { return (React.createElement(Link, { key: listing.title, href: "/listing/" + listing.id, prefetch: true },
                React.createElement("a", { href: "/listing/" + listing.id, className: "text-grey-darkest text-lg" },
                    React.createElement("li", { className: "latest-frontpage-listing xs:w-1/2 sm:w-100 xs:p-2" },
                        React.createElement("div", null, listing.image && React.createElement("img", { src: listing.image.url, alt: "", className: "w-100" })),
                        React.createElement("div", { className: "bg-white text-center p-2" },
                            "Kr. ",
                            (listing.price / 100).toLocaleString()))))); }))));
    };
    FrontPageListings.defaultProps = {
        limit: 12
    };
    return FrontPageListings;
}(Component));
export { FrontPageListings };
