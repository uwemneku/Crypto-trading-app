import React from 'react'
import image from '../images/Avartar.jpg'


export default function Avatar({size}) {
    const width = `w-${size}`
    const height = `h-${size}`
    return (
        <figure className={`${width} ${height} rounded-full overflow-hidden bg-blue-300`} >
                    <img className="h-full"  src={image} alt="dff" />
        </figure>
    )
}
