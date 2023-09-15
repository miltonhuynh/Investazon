import {React, useState} from 'react'
import './index.css'
import loginLogo from './images/loginLogo.jpg' 
import { Link } from "react-router-dom"

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signIn = e => {
    e.preventDefault()
  }
  
  return (
    <div id="login">
        <Link to='/'>
            <img id="loginLogo" src={loginLogo} alt="investazon logo" />
        </Link>
        <div id="loginContainer">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn} id="signInButton">Sign-in</button>
            </form>
            <button id="registerButton">Create your Investazon account</button>
        </div>
    </div>
  )
}

export default Login