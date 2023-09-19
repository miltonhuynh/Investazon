import React from 'react'
import './Stock.css'
import { useStateValue } from "./StateProvider"
function Stock({stockId, company, ticker, price, image}) {

  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'addBasket',
      item: {
        stockId: stockId,
        company: company,
        ticker: ticker,
        price: price,
        image: image
      }
    })
  }

  return (
    <div id="stock">
      <p id="companyName">{company}</p>
      <p id="ticker">{ticker}</p>
      <p id="price">${price}</p>
      <img src={image} alt="logo of company"/>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Stock