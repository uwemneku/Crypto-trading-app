import React from 'react'
import image from '../images/Avartar.jpg'


export default function Avatar({size}) {
    const width = `w-${size}`
    const height = `h-${size}`
    return (
        <figure style={{width:size, height:height}} className={` rounded-full overflow-hidden bg-blue-300`} >
                    <img className="w-full"  src={image} alt="dff" />
        </figure>
    )
}
