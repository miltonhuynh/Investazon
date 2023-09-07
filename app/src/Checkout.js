import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'


function Checkout() {

  const [{basket}] = useStateValue();
 
  return (
    <div id="checkout">
      <h2 id="checkoutTitle">Your shopping Basket</h2>
      {basket.map(item => (
        <CheckoutProduct
          id={item.id}
          company={item.company}
          ticker={item.ticker}
          price={item.price}
          image={item.image}
        />
      ))}
      <div id="checkoutRight">
        <h2>
          <Subtotal />
        </h2>
      </div>
    </div>
  )
}

export default Checkout