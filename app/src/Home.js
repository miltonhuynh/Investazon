import React from 'react';
import "./Home.css"
import Stock from './Stock';

function Home() {

 
  

  const Items = [
    {
      "id": 1,
      "company": "Apple",
      "ticker": "AAPL",
      "price": 1
    },
    {
      "id": 2,
      "company": "Google",
      "ticker": "GOOG",
      "price": 2
    },
    {
      "id": 3,
      "company": "Microsoft",
      "ticker": "MSFT",
      "price": 3
    },
    {
      "id": 4,
      "company": "Netflix",
      "ticker": "NFLX",
      "price": 4
    },
    {
      "id": 5,
      "company": "Amazon",
      "ticker": "AMZN",
      "price": 5
    }
  ]

  const StocksList = Items.map((single) =>
    <Stock
      key={single.id}
      company={single.company}
      ticker={single.ticker}
      price={single.price}
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
