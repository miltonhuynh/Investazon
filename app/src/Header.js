import React from 'react'
import './Header.css'
import logo from './images/logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider" 
import { auth } from "./firebase"

function Header() {
    const [{ basket, user }] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

    let userEmail = "";

    if (user && user._delegate && user._delegate.email) {
        userEmail = user._delegate.email.split('@')[0];;
    }

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
                <div onClick={handleAuthentication} className="headerOption">
                    <span className="headerOptionLineOne">
                        Hello {user ? userEmail : 'Guest'}
                    </span>
                    <Link to={!user && "/login"}>
                        <span className="headerOptionLineTwo" id="loginLink">
                            {user ? 'Sign out' : 'Sign in'}
                        </span> 
                    </Link>
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
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header