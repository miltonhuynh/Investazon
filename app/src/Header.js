import React from 'react'
import './Header.css'
import logo from './images/logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Link} from "react-router-dom"


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="headerLogo" src={logo} alt="investazon logo" />
            </Link>
            <div className="headerSearch">
                <input className="headerSearchInput" type="text" />
                <SearchIcon className="headerSearchIcon" />
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
                <Link to="/Checkout">
                    <div className="headerOptionBasket">
                        <ShoppingCartCheckoutIcon />
                        <span className="headerOptionLineTwo headerBasketCount">
                            0
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header