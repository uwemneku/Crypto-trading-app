import React from 'react'
import colors from 'tailwindcss/colors'

export default function Card({title, amount, showStats = false, color}) {
    const _color = `bg-${color}-500`
    const textColor = `text-${color}-500`
    const borderColor = `border-${color}-500`
    return (
        <div className={`w-max group overflow-hidden m-2 border-2 ${borderColor} bg-white shadow-md rounded-md transition-all duration-500 transform hover:scale-105 flex  flex-wrap items-center`}>
            <div className="p-3  flex justify-between items-end">
                <div>
                    <p className="text-sm sm:text-base font-medium ">{title}</p>
                    <p className="text-xl sm:text-4xl font-semibold" >{amount}</p>
                </div>
                {
                    showStats &&

                    <div className="mt-4 flex px-2 sm:px-4 text-center justify-around" >
                        <div className="mr-3">
                            <p className="text-sm">Profit</p> 
                            <p className="text-green-600" >+2,87%</p>
                        </div>
                    </div>
                }

            </div>
            <div style={{backgroundColor:colors[color][500]}} className={` self-stretch p-4 flex items-center`} >
                <p style={{color:colors[color][500]}} className={`text-xl sm:text-4xl bg-white p-2 sm:p-1 rounded-md`} >£</p>
            </div>
        </div>
    )
}
