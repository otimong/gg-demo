import React, { Component } from 'react'
import Link from 'next/link'

import { Icon } from '../../components'
import { rootCategories } from '../../static/data'

export class CategoryList extends Component {
    render() {
        return (
            <div className="p-2 category-list">
                <ul className="list-reset leading-normal">
                    {
                        rootCategories.map((category, index) => (
                            <li key={category.id} className="hover:bg-yellow hover:text-white inline-block w-1/2 pr-2">
                                <Link href={`/category${category.slug}`} >
                                    <a href={`/category${category.slug}`} className="flex items-center hover:text-white text-grey-darkest">
                                        <Icon type="car" size="xs" classes="text-yellow text-sm pr-2 hover:text-white" />{category.title} <div className="text-grey ml-2">{`(${category.count})`}</div>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
