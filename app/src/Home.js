import React from 'react';
import "./Home.css"
import Stock from './Stock';

function Home() {

  const Items = [
    {
      "id": 1,
      "company": "Apple",
      "ticker": "AAPL",
      "price": 183.47,
      "image": "applelogo.png"
    },
    {
      "id": 2,
      "company": "Google",
      "ticker": "GOOG",
      "price": 136.84,
      "image": "googleLogo.svg"
    },
    {
      "id": 3,
      "company": "Microsoft",
      "ticker": "MSFT",
      "price": 328.66,
      "image": "microsoftLogo.png"
    },
    {
      "id": 4,
      "company": "Netflix",
      "ticker": "NFLX",
      "price": 439.88,
      "image": "netflixLogo.png"
    },
    {
      "id": 5,
      "company": "Amazon",
      "ticker": "AMZN",
      "price": 138.12,
      "image": "amazonLogo.svg"
    },
    {
      "id": 6,
      "company": "Tesla",
      "ticker": "TSLA",
      "price": 245.02,
      "image": "teslaLogo.png"
    },
    {
      "id": 7,
      "company": "Meta",
      "ticker": "META",
      "price": 296.38,
      "image": "metaLogo.png"
    },
    {
      "id": 8,
      "company": "Nvidia",
      "ticker": "NVDA",
      "price": 485.09,
      "image": "nvidiaLogo.png"
    },
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
