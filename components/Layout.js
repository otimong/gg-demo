import React from 'react';
import Head from 'next/head';
import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import { BreadCrumb } from "../components/BreadCrumb";
export var Layout = function (props) { return (React.createElement("div", { className: "w-100" },
    React.createElement(Head, null,
        React.createElement("title", null, props.title),
        React.createElement("meta", { charSet: 'utf-8' }),
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, minimal-ui" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/normalize.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/static/styles.css" }),
        React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" })),
    React.createElement(Header, null),
    React.createElement("div", { className: "middle-section mx-auto max-w-lg shadow-lg" },
        React.createElement(BreadCrumb, null),
        React.createElement("div", { className: "container px-2" }, props.children)),
    React.createElement(Footer, null))); };
