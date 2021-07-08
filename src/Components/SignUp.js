import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import {Link, useHistory} from "react-router-dom"
import {auth, facebookProvider, googleProvider} from '../firebaseconfig'
import {login} from '../actions'
import {useDispatch} from 'react-redux'
import ClickAwayListener from 'react-click-away-listener';
import { VscLoading } from 'react-icons/vsc';
import SignInButton from './SignInButton';


export default function Signup() {
    const formRef = useRef(null)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneNumberRef = useRef(null)
    const passwordRef = useRef(null)
    const verifypasswordRef = useRef(null)
    const checkboxRef = useRef(null)
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
    const [isPasswordOK, setIsPasswordOK] = useState(false)
    const [isFormDataOk, setIsFormDataOk] = useState(true)
    const [errorText, setErrorText] = useState("")
    const dispact = useDispatch()
    const showError = (node) => {
        node.classList.add("inputError")
        setTimeout(() => {
            node.classList.remove("inputError")
        }, 2000);
    }
    const handleClick = (e) => {
        e.preventDefault()
        formRef.current.reportValidity()
        nameRef.current.value === ""  &&  showError(nameRef.current) 
        phoneNumberRef.current.value === "" && showError(phoneNumberRef.current)
        emailRef.current.value === "" && showError(emailRef.current)
        passwordRef.current.value === "" ? showError(passwordRef.current)
                                         : isPasswordOK ? createAccount() : setErrorText("Password does not match")
        
    }
    const createAccount = () => {
        setErrorText("")
        if(formRef.current.checkValidity()){
            setLoading(true)
            auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(e => dispact(login()))
            .catch(e => {setIsFormDataOk(false);  setErrorText(e.message)})
            .finally(e => setLoading(false))
        };
    }
    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }
    const handleVerifyPassword = (e) => {
        setErrorText ("")
        setIsPasswordOK(e.target.value === passwordRef.current.value);
    }
    
    const handleClickAway = () => {history.replace("/")}
    
    return (
        <section style={{backgroundColor:"rgb(0, 0, 0, 0.5)"}}  className={`  w-screen h-screen flex justify-center items-start py-10 transition-opacity duration-300 fixed overflow-y-scroll top-0 z-50`}>
            <ClickAwayListener onClickAway={handleClickAway}>
            <div className="bg-white rounded w-full sm:w-96 p-5 " >
                <p className="text-center font-bold text-gray-600 text-2xl" >Welcome</p>
                <p className="text-center text-md text-gray-500" >Enter your credentials to create your account</p>
               
                <form ref={formRef} className="mt-6 flex flex-col" >
                            <input required ref={nameRef} minLength={3} placeholder="Full Name" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 " type="text"  />
                            <input required ref={phoneNumberRef} minLength={10} placeholder="Phone number" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="tel"  />
                            <input required ref={emailRef} placeholder="Enter your email" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type="email"  />
                            <select name="currency"  required className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 text-gray-500">
                                <option value="">Choose a trading currency</option>
                                <option value="saab">Usd</option>
                                <option value="mercedes">Ng</option>
                                <option value="audi">Cd</option>
                                <option value="auddi">Cdd</option>
                            </select>
                            <div className="flex items-center">
                                <input required ref={passwordRef} placeholder="Enter your password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2 flex-1" type={showPassword? "text" : "password"}  />
                                <div className="flex-0 py-5">
                                     { showPassword ? <FaEye onClick={handleShowPassword}  /> : <FaEyeSlash onClick={handleShowPassword}/>}
                                </div>
                            </div>
                            <input required ref={verifypasswordRef} onInput={handleVerifyPassword} placeholder="Confirm password" className="focus:outline-none m-3 shadow-sm rounded drop-shadow-sm p-2" type={showPassword? "text" : "password"}   />
                            {(!isPasswordOK || !isFormDataOk) && <p className="text-center text-red-600 py-3" >{errorText}</p>}
                            <div className="flex items-center" >
                                <input required ref={checkboxRef} type="checkbox" className="m-3"/>
                                <label>I agree the terms and policy</label>
                            </div>
                            <button type="submit" className="bg-blue-600 p-1 rounded text-white" onClick={handleClick} >
                            {loading ? <VscLoading className='text-lg animate-spin' /> : "Sign In" }
                            </button>

                </form>
                <div className="flex flex-col mt-4">
                    <SignInButton authType = "Google" />
                    <SignInButton authType = "Facebook" />
                </div>
                <p className="text-center" > Have an account?   <span onClick={()=> history.replace("/login")} className="text-blue-700 font-medium cursor-pointer" >Sign In</span>  </p>
            </div>
            </ClickAwayListener>
        </section>
    )
}
