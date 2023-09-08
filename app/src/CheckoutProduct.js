import React from 'react'

function CheckoutProduct({ id, company, image, ticker, price }) {


  return (
    <div id="checkoutStock">
      <img id="checkoutStockImage" src={image} />
      <div id="checkoutStockInfo">
      <p id="checkoutStockCompany">
          Company: {company}
        </p>
        <p id="checkoutStockTicker">
          Ticker: {ticker}
        </p>
        <p id="checkoutStockPrice">Price per share: 
          <small> $</small>
          <strong>{price}</strong>
        </p>
        <button>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct