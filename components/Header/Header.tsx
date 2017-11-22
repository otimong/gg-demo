import * as React from 'react'
import Link from 'next/link'
import { Input, Button, Ad } from 'guloggratis-ui'
export const Header = () => (
    <header className="bg-black py-2">
        <div className="conatiner mx-auto max-w-lg">
            <Ad width="100%" height={180}/>
        </div>
        <div className="sm:flex lg:flex justify-between items-center mx-auto max-w-lg ">
            <div className="xs:flex justify-center py-2 xs:w-100 sm:w-1/4 lg:w-1/4">
                <a href="/" className="block"> <img className="w-3/4" src="../../static/gg-logo.png" alt="" /></a>
            </div>
            <div className="py-2 xs:px-2 xs:w-100 sm:w-3/4 lg:w-3/4">
                <ul className="xs:hidden sm:flex lg:flex list-reset py-2 text-white font-medium">
                    <li className="mr-3">
                        <div className="avatar"></div>
                        <Link prefetch href="/">
                            <a className="text-white">Login</a>
                        </Link>
                    </li >
                    <li className="mr-3">|</li>
                    <li className="mr-3">
                        <Link prefetch href="/">
                            <a className="text-white">Opret Bruger</a>
                        </Link>
                    </li>
                </ul>
                <div className="flex">
                    <div className="flex-1">
                        <Input width="100" size="large" placeholder="Sog blandet 1000000" propClasses="sm:w-100 xs:rounded-sm xs:rounded-l shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker " />
                    </div>
                    <div>
                        <Button size="large" type="secondary" propClasses={['border-0', 'rounded-sm', 'rounded-r','text-white', 'font-bold', 'py-2', 'px-4', 'rounde']}>SOG</Button>
                    </div>
                </div>
            </div>
        </div>
    </header>
)