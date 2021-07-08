import React, { useEffect } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'
import { Link, useRouteMatch } from 'react-router-dom'
import './menu.css'

export default function Menu() {
    const matchHome = useRouteMatch("/home")
    const [changeTheme, setChangeTheme] = React.useState(true)
    const matchSettings = useRouteMatch("/settings")
    const matchUserProfile = useRouteMatch("/userProfile")

    // const handleClick = React.useCallback(()=>{
        // }, [])
        useEffect(() => {
            
                console.log('gugu');
        changeTheme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [changeTheme])
    return (
        <nav className="menu" >
            <ul>
                <li className={matchHome ? 'active' : 'bg-transparent'}>
                    <Link to="/home" >
                        <AiOutlineHome className="text-xl sm:text-base" />
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <HashLink to ="/home/#activity" smooth >
                        <AiOutlineHome  className="text-xl sm:text-base"/>
                        <p>Activity</p>
                    </HashLink>
                </li>
                <li className={matchUserProfile ? 'active' : 'bg-transparent'}>
                    <Link to="/userProfile"  >
                        <AiOutlineUser className="text-xl sm:text-base" />
                        <p>Edit Profile</p>
                    </Link>
                </li>
                <li className={matchSettings ? 'active' : 'bg-transparent'}>
                    <Link   to="/settings">
                        <AiOutlineSetting className="text-xl sm:text-base" />
                        <p>Settings</p>
                    </Link>
                </li>
                <li className={matchSettings ? 'active' : 'bg-transparent'}>
                    <Link onClick={()=>setChangeTheme(!changeTheme)} >
                        <AiOutlineSetting className="text-xl sm:text-base" />
                        <p>Dark Mode</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
