import React, { useEffect } from 'react'
import {FaAcquisitionsIncorporated} from 'react-icons/fa'
import useIntersection from '../Hooks/useIntersection'

export default function Whyus() {
    const ref = React.useRef()
    const inViewport = true
    useEffect(() => {
        
        console.log(inViewport)
        
    }, [inViewport])
    return (
        <section ref={ref} className="w-screen">
            <div className="text-center flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl text-gray-600  lg:text-4xl" >Why Us</h1>
                <p className="text-gray-500 py-1 px-11 sm:w-1/2 sm:py-6 text-lg  sm:text-xl" >We are a company guided by some simple values  which from the core of our operations</p>
            </div>
            <div className="my-1 flex justify-around flex-wrap " >
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

const Card = () => {
    return(
        <div  className="flex flex-col shadow-xl drop-shadow-xl w-64 rounded-lg  px-4 py-11 m-3" >
            <div className="w-16 text-white text-2xl flex items-center justify-center h-16 rounded-md bg-blue-700" >
                <FaAcquisitionsIncorporated />
            </div>
            <p className="font-bold text-xl text-gray-600 my-6  lg:text-2xl" >Ease of use</p>
            <p className="text-gray-500  text-base" > Make your crytocurrency investment in a quick, easy and confidential enviroment</p>
        </div>
    )
}