import React from 'react'
import "./Home.css"
import Stock from './Stock';

function Home() {

  const finnhub = require("finnhub");

  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = "cjog0q9r01qlfp4fjg7gcjog0q9r01qlfp4fjg80"
  const finnhubClient = new finnhub.DefaultApi()


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
    },
    {
      "id": 3,
      "company":"Microsoft",
      "ticker":"MSFT",
      "price": 200
    },
    {
      "id": 4,
      "company":"Netflix",
      "ticker":"NFLX",
      "price": 700
    },
    {
      "id": 5,
      "company":"Amazon",
      "ticker":"AMZN",
      "price": 800
    }
  ]

  console.log(Items)

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
