import './App.css';
import { useEffect } from "react"
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51NwxXHBnZOkmnGWGKvHCBsz596PibSsxxT03ab7dL1I6u3aOn3QVDmLPPOvujYWQsjoFJUQSNkrtw7AsL2vnscbw00v8SEMAvZ")

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
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
