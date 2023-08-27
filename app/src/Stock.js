import React from 'react'
import './Stock.css'

function Stock() {
  return (
    <div className="stock">
      <div className="stockInfo">
        <p>Stock name placeholder</p>
        <p className="stockPrice">
            <small>$</small>
            <strong>350</strong>
        </p>
      </div>
    </div>
  )
}

export default Stock