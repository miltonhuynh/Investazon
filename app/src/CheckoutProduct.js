import React from 'react'

function CheckoutProduct({ id, image, title, price }) {


  return (
    <div id="checkoutProduct">
      <img id="checkoutProductImage" src={image} />
      <div id="checkoutProductInfo">
        <p id="checkoutProductTitle">
          {title}
        </p>
        <p id="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct