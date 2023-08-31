import React from 'react'
import "./Home.css"
import Stock from './Stock';

function Home() {

  const Items = [
    {
      "id":1,
      "company":"Apple",
      "ticker":"AAPL",
      "price": 300
    },
    {
      "id":2,
      "company":"Google",
      "ticker":"GOOG",
      "price": 500
    }
  ]

  console.log(Items)

  const StocksList = Items.map((single) =>
  <Stock
    key={single.id}
    company={single.company}
    ticker={single.ticker}
    price={single.image}  
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
