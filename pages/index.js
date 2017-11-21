import React from "react";
import { Ad } from 'guloggratis-ui';
import { Layout } from '../components/Layout';
import { CategoryList } from "../components/CategoryList";
import { LatestListings } from "../components/Listings/LatestListings";
import { FrontPageListings } from "../components/Listings/FrontPageListings";
export default function () { return (React.createElement("div", null,
    React.createElement(Layout, { title: "Guloggratis 2.0" },
        React.createElement("div", { className: "sm:flex lg:flex py-2" },
            React.createElement("div", { className: "xs:w-100 lg:w-2/3" },
                React.createElement(CategoryList, null),
                React.createElement(Ad, { width: "100%", height: 126 })),
            React.createElement("div", { className: "xs:w-100 lg:w-1/3" },
                React.createElement(Ad, { width: "100%", height: 250 }),
                React.createElement(LatestListings, { limit: 3 }))),
        React.createElement("div", null,
            React.createElement(FrontPageListings, { limit: 40 }))))); };
