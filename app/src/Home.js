import React from 'react';
import "./Home.css"
import Stock from './Stock';
import appleLogo from './images/appleLogo.png'

function Home() {

  const Items = [
    {
      "id": 1,
      "company": "Apple",
      "ticker": "AAPL",
      "price": 183.47,
      "image": "\"./images/appleLogo.png\""
    }/*,
    {
      "id": 2,
      "company": "Google",
      "ticker": "GOOG",
      "price": 136.84,
      "image": {appleLogo}
    },
    {
      "id": 3,
      "company": "Microsoft",
      "ticker": "MSFT",
      "price": 328.66,
      "image": {appleLogo}
    },
    {
      "id": 4,
      "company": "Netflix",
      "ticker": "NFLX",
      "price": 439.88,
      "image": {appleLogo}
    },
    {
      "id": 5,
      "company": "Amazon",
      "ticker": "AMZN",
      "price": 138.12,
      "image": {appleLogo}
    }*/
  ]

  const StocksList = Items.map((single) =>
    <Stock
      key={single.id}
      company={single.company}
      ticker={single.ticker}
      price={single.price}
      image={single.image}
    />
  );

  return (
    <div className="home">
      {/*<div className="homeContainer">
        <Stock company="Apple" ticker="AAPL" price="300"/>
        <Stock company="Google" ticker="GOOG" price="500"/>
        </div>
  */}
      {StocksList}
    </div>
  )
}

export default Home;
