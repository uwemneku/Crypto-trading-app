import React from 'react'
import Activity from '../Activity'
import Card from './Card'

export default function Home() {
    return (
        <div className="flex-1  flex flex-wrap  sm:px-10 pt-20">
        <div className="flex  sm:flex-row w-full md:justify-between flex-wrap">
            <Card title="Balance" amount="$200" showStats={true} color="green" />
            <Card title="Bonus" amount="$300" color="blue"  />
            <Card title="Initial deposit" amount="$300" color="orange" />
        </div>
        <Activity />
        <Activity />
        <Activity />
    
    </div>
    )
}
