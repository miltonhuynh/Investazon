import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {


  return (
    <div id="checkout">
      <h2 id="checkoutTitle">Your shopping Basket</h2>
      <div id="checkoutRight">
        <h2>
          <Subtotal />
        </h2>
      </div>
    </div>
  )
}

export default Checkout