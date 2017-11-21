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
import { latestListings } from '../../static/data/index';
import * as Router from '../../routes/routes';
var Link = Router.routes.Link;
var LatestListings = /** @class */ (function (_super) {
    __extends(LatestListings, _super);
    function LatestListings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LatestListings.prototype.render = function () {
        var timeAgo = function (date) {
            var today = new Date();
            var listingDay = new Date(date);
            var seconds = (today - listingDay) / 1000;
            var interval = Math.floor(seconds / 31536000);
            if (interval < 1) {
                return Math.floor(seconds) + "seconds";
            }
        };
        var _a = this.props, limit = _a.limit, header = _a.header;
        var listings = Array.from(latestListings);
        return (React.createElement("div", { className: "py-2" },
            React.createElement("h4", { className: "bg-yellow p-2" }, header),
            React.createElement("ul", { className: "list-reset flex flex-col" }, listings.slice(0, limit).map(function (item) { return (React.createElement(Link, { key: item.title, href: "/listing/" + item.id, prefetch: true },
                React.createElement("a", { href: "/listing/" + item.id, className: "text-grey-darkest" },
                    React.createElement("li", { className: "flex items-center justify-between py-2 border-b border-gray-darkest text-sm" },
                        React.createElement("div", { className: "w-1/6" },
                            React.createElement("img", { src: item.image.url, alt: "" })),
                        React.createElement("div", { className: "truncate w-2/5" }, item.title),
                        React.createElement("div", { className: "w-auto px-2 font-semibold" },
                            "Kr. ",
                            (item.price / 100).toLocaleString('da')))))); }))));
    };
    LatestListings.defaultProps = {
        header: 'Nyeste annoncer'
    };
    return LatestListings;
}(Component));
export { LatestListings };
