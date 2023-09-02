import React from 'react'
import './Stock.css'

function Stock({company, ticker, price, image}) {

  /* "./images/appleLogo.png" */
  console.log(company)
  console.log(ticker)
  console.log(price)
  console.log(image)

  return (
    <div id="stock">
      <p id="name">{company}</p>
      <p id="ticker">{ticker}</p>
      <p id="price">${price}</p>
      <img src={image} alt="logo of company"/>
      <button>Add to basket</button>
    </div>
  )
}

export default Stock