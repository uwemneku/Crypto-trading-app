import React from 'react'
import image_sm from '../images/hero_sm.jpg'
import image_md from '../images/hero_md.jpg'
import image_lg from '../images/hero_lg.jpg'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
// import {} from ''

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-20 lg:mt-0 z-10 flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center px-6  sm:px-16 dark:bg-gray-800 "   > 
            <div  className="z-0bg-black rounded-lg shadow-md ring-offset-red-900 flex-shrink-0 w-full lg:w-1/2 overflow-hidden " >
                <img className="w-full"  src={image_sm} srcSet={`${image_md} 1920w, ${image_lg} 2400w, ${image_sm} 640w`}  alt="kjkjkj" />
            </div>
            <div className="z-20  text-center lg:text-left mr-5" >
                <p className="font-bold text-3xl text-gray-600 sm:text-4xl  lg:text-6xl text-center lg:text-left dark:text-white mt-7 lg:mt-0 " >
                    Crypto Trade Made  <span className="text-blue-700" >Easy</span>
                </p>
                <p className=" text-gray-500 py-1 sm:py-6 text-lg sm:text-xl dark:text-gray-300" >
                    Investinng in crytocurrencies simplified and made accessible at lightenine spped  crypcoin
                </p>
                <div>
                    <button className="hero_button bg-blue-600 text-white my-3 " >
                        <Link to="/getStarted" >
                            <p>Get Started</p>
                        </Link>
                    </button>
                    <button className="hero_button " >
                        <HashLink to="#whyus" smooth >
                            <p>Know more</p>
                        </HashLink>
                    </button>
                </div>
            </div>
        </section>
    )
}
