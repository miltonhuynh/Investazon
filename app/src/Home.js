import React from 'react';
import "./Home.css"
import Stock from './Stock';
import Header from './Header';

function Home() {

  const Items = [
    {
      "stockId": 1,
      "company": "Apple",
      "ticker": "AAPL",
      "price": 183.47,
      "image": "appleLogo.png"
    },
    {
      "stockId": 2,
      "company": "Google",
      "ticker": "GOOG",
      "price": 136.84,
      "image": "googleLogo.svg"
    },
    {
      "stockId": 3,
      "company": "Microsoft",
      "ticker": "MSFT",
      "price": 328.66,
      "image": "microsoftLogo.png"
    },
    {
      "stockId": 4,
      "company": "Netflix",
      "ticker": "NFLX",
      "price": 439.88,
      "image": "netflixLogo.png"
    },
    {
      "stockId": 5,
      "company": "Amazon",
      "ticker": "AMZN",
      "price": 138.12,
      "image": "amazonLogo.svg"
    },
    {
      "stockId": 6,
      "company": "Tesla",
      "ticker": "TSLA",
      "price": 245.02,
      "image": "teslaLogo.png"
    },
    {
      "stockId": 7,
      "company": "Meta",
      "ticker": "META",
      "price": 296.38,
      "image": "metaLogo.png"
    },
    {
      "stockId": 8,
      "company": "Nvidia",
      "ticker": "NVDA",
      "price": 485.09,
      "image": "nvidiaLogo.png"
    },
  ]

  const StocksList = Items.map((single) =>
    <Stock
      stockId={single.stockId}
      company={single.company}
      ticker={single.ticker}
      price={single.price}
      image={single.image}
    />
  );

  return (
    <>
    <Header />
      <div className="home">
        {StocksList}
      </div>
    </>
  )
}

export default Home;
