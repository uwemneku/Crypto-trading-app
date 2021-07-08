import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Hero from './Components/Hero'
import Whyus from './Components/Whyus'
import WhoAreWE from './Components/WhoAreWE'
import Login from './Components/Login'
import { Route, Switch, useHistory } from 'react-router-dom'
import Signup from './Components/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebaseconfig'
import { login, logout } from './actions'
import Pricing from './Components/Pricing'
import Dashboard from './Components/Dashboard'
import {AiOutlineLoading} from 'react-icons/ai'

export default function App() {
  

  return (
    <>
        <Route path="/" component={Home}  />
        <Route path="/login" component={Login}  />
        <Route path="/signup" component={Signup}  />
    </>
      )
    }
    
    const Home = () => {
      const isLoggedIn = useSelector(state => state.isLoggedIn)
      const [isLoading, setIsLoading] = useState(true) 
      const history = useHistory() 
      const dispatch = useDispatch()

        //checks to see if the user is logged in and then set laoding state
        useEffect(() => {
          auth.onAuthStateChanged((authUser) => {
            if(authUser){
              dispatch(login())
              setIsLoading(false)
              history.replace("/home")
              
            }else{
              dispatch(logout())   
              setIsLoading(false)
          }
        })
        }, [])

        if(isLoading){
          return(
            <div className="w-screen h-screen text-4xl flex flex-col items-center justify-center text-blue-600" >
                <AiOutlineLoading className="animate-spin" />
                <p className="font-bold animate-pulse" >Coin Cap</p>
            </div>
          )
        } else{

            return(
              <div className="relative w-screen overflow-x-hidden h-screen overflow-y-auto" >
                      <Header />
                      {
                        isLoggedIn ? <Dashboard />
                        :
                        <>
                                      <Hero />
                                      <div className="h-screen">
                                        
                        <Pricing />
                                      </div>
                                      <Whyus />
                                      <WhoAreWE />
                                  </>
                      }
                      
                  </div>
            )
        }

}