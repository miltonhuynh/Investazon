import React from 'react'
import './index.css'
import loginLogo from './images/loginLogo.jpg' 
import { Link } from "react-router-dom"

function Login() {
  return (
    <div id="login">
        <Link to='/'>
            <img id="loginLogo" src={loginLogo} alt="investazon logo" />
        </Link>
        <div id="loginContainer">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />

                <button id="signInButton">Sign-in</button>
            </form>
            <p>disclaimer</p>
            <button id="registerButton">Create your Investazon account</button>
        </div>
    </div>
  )
}

export default Login