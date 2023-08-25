import React from 'react'
import './Header.css'
import logo from './images/logo.jpg'

function Header() {
    return (
        <div className="header">
            <img className="headerLogo" src={logo} alt="investazon logo" />
            <div className="headerSearch">
                <input className="headerSearchInput" type="text" />
            </div>
            <div className="headerNav">

                <div className="headerOption">
                    <span className="headerOptionLineOne">
                        Hello Guest
                    </span>
                    <span className="headerOptionLineTwo">
                        Sign in
                    </span>
                </div>
                <div className="headerOption">
                <span className="headerOptionLineOne">
                        Returns
                    </span>
                    <span className="headerOptionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="headerOption">
                    <span className="headerOptionLineOne">
                        Your
                    </span>
                    <span className="headerOptionLineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header