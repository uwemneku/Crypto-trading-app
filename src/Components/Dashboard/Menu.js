import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'
import { Link, useRouteMatch } from 'react-router-dom'
import './menu.css'

export default function Menu() {
    const matchHome = useRouteMatch("/home")
    const matchSettings = useRouteMatch("/settings")
    const matchUserProfile = useRouteMatch("/userProfile")
    return (
        <nav className="menu" >
            <ul>
                <li className={matchHome ? 'active' : 'bg-transparent'}>
                    <Link to="/home" >
                        <AiOutlineHome className="text-xl" />
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <HashLink to ="/home/#activity" smooth >
                        <AiOutlineHome  className="text-xl"/>
                        <p>Activity</p>
                    </HashLink>
                </li>
                <li>
                    <Link to="/userProfile" className={matchUserProfile ? 'active' : 'bg-transparent'} >
                        <AiOutlineUser className="text-xl" />
                        <p>Edit Profile</p>
                    </Link>
                </li>
                <li>
                    <Link  className={matchSettings ? 'active' : 'bg-transparent'} to="/settings">
                        <AiOutlineSetting className="text-xl" />
                        <p>Settings</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
