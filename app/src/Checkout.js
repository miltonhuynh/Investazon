import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
import Header from './Header';


function Checkout() {

  const [{ basket, user }] = useStateValue();
 
  return (
    <>
      <Header />
      <div id="checkout">
        <div id="checkoutLeft">
          <h3>Hello {user ? user?.email.split('@')[0] : 'Guest'},</h3>
          <h2 id="checkoutTitle">Your portfolio Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              company={item.company}
              ticker={item.ticker}
              price={item.price}
              image={item.image}
            />
          ))}
          </div>
        <div id="checkoutRight">
          <h2>
            <Subtotal />
          </h2>
        </div>
      </div>
    </>
  )
}

export default Checkout