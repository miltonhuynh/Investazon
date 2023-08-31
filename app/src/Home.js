import React from 'react'
import "./Home.css"
import Stock from './Stock';

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <Stock company="Apple" ticker="AAPL" price="300"/>
        </div>
      </div>
  )
}

export default Home;
