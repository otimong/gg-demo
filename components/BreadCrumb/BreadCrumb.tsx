import React from 'react'
import Link from 'next/link'

export const BreadCrumb = () => (
    <div className="bg-grey-light py-2 px-2">
        <ul className="flex list-reset text-grey-darker font-medium">
            <li className="mr-4">
                <Link prefetch={true} href="/">
                    <a className="text-grey-darker">Forside</a>
                </Link>
            </li>
        </ul>
    </div>
)
