import React from 'react';
import Link from 'next/link';
import { Input, Button, Ad } from 'guloggratis-ui';
export var Header = function () { return (React.createElement("header", { className: "bg-black py-2" },
    React.createElement("div", { className: "conatiner mx-auto max-w-lg" },
        React.createElement(Ad, { width: "100%", height: 180 })),
    React.createElement("div", { className: "sm:flex lg:flex justify-between items-center mx-auto max-w-lg " },
        React.createElement("div", { className: "xs:flex justify-center py-2 xs:w-100 sm:w-1/4 lg:w-1/4" },
            React.createElement("img", { src: "../../static/gg-logo.png", alt: "" })),
        React.createElement("div", { className: "py-2 xs:px-2 xs:w-100 sm:w-3/4 lg:w-3/4" },
            React.createElement("ul", { className: "xs:hidden sm:flex lg:flex list-reset py-2 text-white font-medium" },
                React.createElement("li", { className: "mr-3" },
                    React.createElement("div", { className: "avatar" }),
                    React.createElement(Link, { prefetch: true, href: "/" },
                        React.createElement("a", { className: "text-white" }, "Login"))),
                React.createElement("li", { className: "mr-3" }, "|"),
                React.createElement("li", { className: "mr-3" },
                    React.createElement(Link, { prefetch: true, href: "/" },
                        React.createElement("a", { className: "text-white" }, "Opret Bruger")))),
            React.createElement("div", { className: "flex" },
                React.createElement("div", { className: "flex-1" },
                    React.createElement(Input, { width: "100", size: "large", placeholder: "Sog blandet 1000000", propClasses: "sm:w-100 xs:rounded-sm xs:rounded-l" })),
                React.createElement("div", null,
                    React.createElement(Button, { size: "large", propClasses: ['border-0', 'rounded-sm', 'rounded-r'] }, "SOG"))))))); };
