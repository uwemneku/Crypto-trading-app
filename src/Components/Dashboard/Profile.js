import React from 'react'
import { Link, useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import './Profile.css'
import Avatar from '../Avatar'
import ClickAwayListener from 'react-click-away-listener'

export default function Profile() {
    const match = useRouteMatch({
        path: "/home/profile",
        exact:true
    })
    const history = useHistory()
    const location = useLocation()

    const handleClickAway =()=>{
        match && history.replace("/home")
        console.log(location.pathname);
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway} >

            <div  className={`profile ${match? '-right-0': '-right-3/4'}`} >
                <div className="flex my-5 flex-col justify-center items-center" >
                    <Avatar size={16} />
                    <p className="text-lg font-semibold" >Victor Rebook</p>
                </div>

                <div className="divider" />

                <section >
                    <h4>Account</h4>
                    <div className="list">
                        <p>Joined</p>
                        <p>June 22, 2020</p>
                    </div>
                    <div className="list">
                        <p>Assets Total</p>
                        <p> $4567</p>
                    </div>
                </section>

                <div className="divider" />

                <section>
                    <h4>Assets</h4>
                    <div className="list">
                        <p>Bitcoin </p>
                        <p>123 <span>Btc</span></p>
                    </div>
                    <div className="list">
                        <p>Pancake </p>
                        <p>123 <span>Btc</span></p>
                    </div>
                    <div className="list">
                        <p>Eterium </p>
                        <p>123 <span>Btc</span></p>
                    </div>
                    <div className="list">
                        <p>Ocean </p>
                        <p>123 <span>Btc</span></p>
                    </div>
                    <div className="list">
                        <p>Silver </p>
                        <p>123 <span>Btc</span></p>
                    </div>
                </section>
            </div>
        </ClickAwayListener>
    )
}



