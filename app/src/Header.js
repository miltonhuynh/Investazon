import React from 'react'
import './Header.css'
import logo from './images/logo.jpg'

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="investazon logo" />
            <div className="headerSearch">
                <input className="headerSearchInput" type="text" />
            </div>
            <div className="headerNav">
                <div className="headerOptsion">

                </div>
                <div className="headerOption">

                </div>
                <div className="headerOption">

                </div>
            </div>
        </div>
    )
}

export default Header