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
import Link from 'next/link';
import { Icon } from 'guloggratis-ui';
import { rootCategories } from '../static/data/index';
var CategoryList = /** @class */ (function (_super) {
    __extends(CategoryList, _super);
    function CategoryList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryList.prototype.render = function () {
        return (React.createElement("div", { className: "p-2" },
            React.createElement("ul", { className: "list-reset leading-normal" }, rootCategories.map(function (category, index) { return (React.createElement("li", { key: category.id, className: "hover:bg-yellow hover:text-white inline-block w-1/2 pr-2" },
                React.createElement(Link, { href: "/category" + category.slug },
                    React.createElement("a", { href: "/category" + category.slug, className: "flex items-center hover:text-white text-grey-darkest" },
                        React.createElement(Icon, { type: "car", size: "xs", classes: "text-yellow text-sm pr-2 hover:text-white" }),
                        category.title,
                        " ",
                        React.createElement("div", { className: "text-grey ml-2" }, "(" + category.count + ")"))))); }))));
    };
    return CategoryList;
}(Component));
export { CategoryList };
