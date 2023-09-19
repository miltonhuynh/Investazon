import './App.css';
import { useEffect } from "react"
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {
  const[, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
