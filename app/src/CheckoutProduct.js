import React from 'react'
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ stockId, company, image, ticker, price }) {

  const [,dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'removeBasket',
      stockId:stockId,
    })

  }

  return (
    <div id="checkoutStock">
      <img id="checkoutStockImage" src={image} alt="Logo of company"/>
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
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct