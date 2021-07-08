import React from 'react'
import image from '../images/hero.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-20 lg:mt-0 z-10 lg:flex lg:flex-row-reverse justify-between items-center px-6  sm:px-16 dark:bg-gray-800 "   > 
            <div  className="z-0bg-black rounded-lg shadow-md ring-offset-red-900 flex-shrink-0 w-full lg:w-1/2 overflow-hidden " >
                <img className="w-full"  src={image} alt="kjkjkj" />
            </div>
            <div className="z-20  text-center sm:text-left mr-5" >
                <p className="font-bold text-3xl text-gray-600  lg:text-6xl text-center sm:text-left dark:text-white " >
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
                        <Link to="/getStarted" >
                            <p>Know more</p>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
