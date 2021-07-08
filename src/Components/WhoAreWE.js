import React, { useEffect, useRef } from 'react'
import image from '../images/why.jpg'
import {useViewportSpy} from 'beautiful-react-hooks'

export default function WhoAreWE() {
    const ref = useRef()
    const isVisible = useViewportSpy(ref, {rootMargin: "0px"})
    useEffect(() => {
        console.log(isVisible)
    }, [isVisible])
    return (
        <div ref={ref} className={`${isVisible ? "opacity-100": "opacity-0"} transition-opacity duration-500  px-6 sm:px-12 h-screen dark:bg-gray-800 flex justify-center items-center`} >

            <h1 className=" block sm:hidden font-bold text-2xl text-gray-600 py-6  lg:text-4xl text-center" >Who are we?</h1>
            <div className="flex flex-col sm:flex-row items-center" >
                <div  className="z-0bg-black rounded-lg flex-shrink-0 w-full sm:w-1/2 overflow-hidden " >
                    <img className="w-full"  src={image} alt="kjkjkj" />
                </div>
                <div>
                    <h1 className=" hidden sm:block font-bold text-2xl text-gray-600 py-1  lg:text-4xl text-center" >Who are we?</h1>
                    <p className="text-gray-500 py-1 sm:px-11  sm:py-2 text-lg " >
                        Crycoin Binary Trade is a private crypto trading company that deals in investment in crypto currency to yield amazing turnovers.
                        <br />
                        <br />
                        The banks habe given limited growth to funds over the latest couple of years hence its necessary to secyre a better source of earining. By so doning sksnkd
                    </p>
                </div>
            </div>
        </div>
    )
}
