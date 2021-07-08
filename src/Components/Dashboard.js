import React from 'react'
import { Route } from 'react-router-dom'
import Activity from './Activity'
import Card from './Dashboard/Card'
import Home from './Dashboard/Home'
import Menu from './Dashboard/Menu'
import Profile from './Dashboard/Profile'
import Settings from './Dashboard/Settings'

export default function Dashboard() {
    return (
        <section className="w-screen  flex items-start" >
            <div className="fixed bottom-0 w-full sm:w-auto  sm:sticky sm:top-0">
                <Menu />
            </div>

            <div className="flex flex-1">
                <Route  path="/home" component={Home} />
                <Route exact path="/settings" component={Settings} />
                <div className="">
                    <Profile />
                </div>

            </div>
        </section>
    )
}

