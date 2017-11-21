import React from 'react';
import Link from 'next/link';
export var BreadCrumb = function () { return (React.createElement("div", { className: "bg-grey-light py-2 px-2" },
    React.createElement("ul", { className: "flex list-reset text-grey-darker font-medium" },
        React.createElement("li", { className: "mr-4" },
            React.createElement(Link, { prefetch: true, href: "/" },
                React.createElement("a", { className: "text-grey-darker" }, "Forside")))))); };
