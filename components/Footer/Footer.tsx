import * as React from 'react'
import Link from 'next/link'

export const Footer = () => (
    <div className="bg-black text-white">
        <div className="sm:flex container mx-auto max-w-lg">
            <div className="border-r text-start border-white px-2 py-8 sm:w-1/4">
                <h3 className="text-yellow mb-2">Samarbejdspartnere </h3>
                <ul className="list-reset leading-normal">
                    <li><a href="http://www.sn.dk" className="white" target="_blank">Dagbladet</a></li>
                    <li><a href="http://frdb.dk/" className="white" target="_blank">Fredericia Dagblad</a></li>
                    <li><a href="http://www.sn.dk" className="white" target="_blank">Frederiksborg Amts Avis</a></li>
                    <li><a href="http://www.fyens.dk" className="white" target="_blank">Fyens Stiftstidende</a></li>
                    <li><a href="http://www.faa.dk" className="white" target="_blank">Fyns Amts Avis</a></li>
                    <li><a href="http://hsfo.dk/" className="white" target="_blank">Horsens Folkeblad</a></li>
                    <li><a href="http://www.jv.dk" className="white" target="_blank">Jydske Vestkysten</a></li>
                    <li><a href="http://nordjyske.dk/" className="white" target="_blank">Nordjyske</a></li>
                    <li><a href="http://www.nordvestnyt.dk" className="white" target="_blank">Nordvestnyt</a></li>
                    <li><a href="http://amtsavisen.dk/" className="white" target="_blank">Randers Amtsavis</a></li>
                    <li><a href="http://www.sn.dk" className="white" target="_blank">Sj&aelig;llandske</a></li>
                    <li><a href="http://www.thisted-dagblad.dk" className="white" target="_blank">Thisted Dagblad</a></li>
                    <li><a href="http://www.vafo.dk" className="white" target="_blank">Vejle Amts Folkeblad</a></li>
                    <li><a href="http://stiften.dk" className="white" target="_blank">&Aring;rhus Stiftstidende</a></li>
                </ul>
            </div>
            <div className="border-r text-start border-white px-2 py-8 sm:w-1/4">
                <h3 className="text-yellow mb-2">GulogGratis.dk</h3>
                <ul className="list-reset leading-normal">
                    <li><a href="https://mit.guloggratis.dk/pakkepost" className="white">Pakkepost</a></li>
                    <li><a href="https://itunes.apple.com/dk/app/guloggratis/id599906021?mt=8" className="white" target="_blank">iPhone App</a></li>
                    <li><a href="https://m.guloggratis.dk?disable_adaptive=false" className="white">Mobilvenlig GulogGratis.dk</a></li>
                    <li><a href="/sider/information" className="white">Information</a></li>
                    <li><a href="/sider/brugerbetingelser" className="white">Betingelser</a></li>
                    <li>
                        <Link href="/sider/privatlivspolitik">
                            <a className="white">Cookiepolitik</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sider/erhvervsannoncering">
                            <a className="white">Erhvervsannoncering</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sitemap">
                            <a className="white">Sitemap</a>
                        </Link></li>

                </ul>
            </div>
            <div className="px-2 py-8 w-1/2">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-yellow  mb-2">Support</h3>
                        <ul className="list-reset">
                            <li><Link href="/support"><a className="white">Kontakt support</a></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-yellow">GulogGratis.dk på sociale medier</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
)