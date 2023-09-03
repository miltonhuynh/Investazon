import React from 'react'
import "./Checkout.css"
import CurrencyFormat from "react-currency-format"

function Subtotal() {
  return (
    <div id="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small id="subtotalGift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  )
}

export default Subtotal