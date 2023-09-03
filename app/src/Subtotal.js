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
          </>
        )}
        decimalScale={2}
        value={0} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal