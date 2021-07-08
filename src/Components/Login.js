import React, { useEffect, useRef, useState, } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { VscLoading } from 'react-icons/vsc'
import SignInButton from './SignInButton';
import {Link, useHistory} from "react-router-dom"
import {auth} from '../firebaseconfig'
import {login} from '../actions'
import { useDispatch } from 'react-redux';
import ClickAwayListener from 'react-click-away-listener';
import { useViewportSpy } from 'beautiful-react-hooks';



export default function Login() {
    //Refs to be used to get input values
    const ref = useRef()
    const passwordRef = useRef("")   
    const emailRef = useRef("")
    const formRef = useRef("")
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const dispact = useDispatch()
    
    const isVisible = useViewportSpy(ref, {rootMargin: "0px"})
    useEffect(() => {
        console.log(isVisible)
    }, [isVisible])

    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }

    // this function takes a node and blinks the background color
    const showError = (node) => {
        node.classList.add("inputError")
        setTimeout(() => {
            node.classList.remove("inputError")
        }, 2000);
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        formRef.current.reportValidity()
        if(emailRef.current.value === "") showError(emailRef.current)
        if(passwordRef.current.value === "") showError(passwordRef.current)

        if(formRef.current.checkValidity()){
            const email = emailRef.current.value
            const password = passwordRef.current.value
            setLoading(true)
            auth.signInWithEmailAndPassword(email, password)
            .then(e => {dispact(login()); history.goBack()})
            .catch(error => {setLoading(false); alert(error.message)})
        }
    }

    const handleClickAway = () => {history.push("/")}
    
    return (
        <section ref={ref} style={{backgroundColor:"rgb(0, 0, 0, 0.5)"}}  className={`${isVisible ? "opacity-100": "opacity-0"} transition-opacity duration-500  w-screen h-screen flex justify-center items-start py-20 fixed top-0 z-50`}>
            <ClickAwayListener onClickAway={handleClickAway}>

                <div className="bg-white rounded w-full sm:w-96 p-5 " >
                    <p className="text-center font-bold text-gray-600 text-2xl" >Welcome Back</p>
                    <p className="text-center text-md text-gray-500" >Enter your credentials to acess your account</p>
                    
                    <form ref={formRef} className="mt-6 flex flex-col" >
                                <input ref={emailRef} placeholder="Enter your email" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="email"  />
                                <div className="flex items-center">
                                    <input ref={passwordRef} placeholder="Enter your password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 flex-1" type={showPassword?"text":"password"}  />
                                    <div className="flex-0 py-5">
                                        { showPassword ? <FaEye onClick={handleShowPassword}  /> : <FaEyeSlash onClick={handleShowPassword}/>}
                                    </div>
                                </div>
                                <button onClick={handleSignIn} className="bg-blue-600 p-1 rounded text-white flex justify-center items-center" >
                                    {loading ? <VscLoading className='text-lg animate-spin' /> : "Sign In" }
                                </button>
                    </form>

                    <div className="flex flex-col mt-2">
                        <SignInButton authType = "Google" />
                        <SignInButton authType = "Facebook" />
                        
                    </div>
                    
                    <p className="text-center" > Don't have an account?   <span onClick={()=> history.replace("/signup")} className="text-blue-700 font-medium cursor-pointer" >Sign up</span>  </p>
                </div>
        
            </ClickAwayListener>
        </section>
    )
}
