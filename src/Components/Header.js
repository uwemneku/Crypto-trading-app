import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebaseconfig'
import { logout } from '../actions'
import image from '../images/hero.jpg'
import Avatar from './Avatar'

export default function Header() {
    const [showNav, setShowNav] = useState(false)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()



    const handleMenuClick = React.useCallback(()=>{ setShowNav(!showNav)}, [showNav])
    const handleLogout = React.useCallback(()=>{
                                            auth.signOut()
                                            .then(e => dispatch(logout()))
                                            }, [dispatch])

    return (
        <header className="z-40 fixed top-0 flex justify-between items-center font-medium px-4 py-2 shadow-md  drop-shadow-md w-full bg-white" >
            <div>
                <p className="text-2xl" >Crypcoin</p>
            </div>
            <div className="flex" >
                {isLoggedIn && 
                    <Link to="/home/profile" className="lg:hidden px-3" >
                        <Avatar size={50} />
                    </Link>
                }
                <button className="block sm:hidden"  onClick={handleMenuClick} >
                    <AiOutlineMenu className="block sm:hidden text-2xl"  />
                </button>
            </div>
            <div className={ `fixed z-40  h-screen w-screen sm:h-auto sm:w-auto flex flex-col sm:flex-row items-center sm:relative top-0 bg-white ${showNav ? "ml-0 left-0" : "ml-full"}  sm:ml-0  py-0 pt-5 sm:pt-0 transition-all duration-500 `} >
                <button className="self-end sm:hidden px-3 "  onClick={handleMenuClick} >
                    <AiOutlineClose className="block sm:hidden text-2xl"  />
                </button>
                {
                    !isLoggedIn &&
                    <Nav />
                }
                {
                    isLoggedIn ?
                                <button onClick={handleLogout} className="nav_button text-white bg-blue-700">
                                    Log Out
                                </button>
                             :
                             <div className="flex sm:flex-row flex-col" >
                                    <Link to="/login" className=" nav_button  text-black " >
                                        <p>Log in</p>
                                    </Link>
                                    <Link to="/signup" className="nav_button text-white bg-blue-700">
                                        <p> Sign Up </p>
                                    </Link>
                            </div>
                }
            </div>
        
        </header>
    )
}

const Nav = () => {
    return(
        <ul className="flex flex-col sm:flex-row items-center " >
            <li className="nav_links">
                <Link to="/" >
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav_links">
                <Link to="/about" >
                    <span>About us</span>
                </Link>
            </li>
            <li className="nav_links">
                <Link to="contact" >
                    <span>Contact us</span>
                </Link>
            </li>
        </ul>
    )
}