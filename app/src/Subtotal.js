import React from 'react'
import "./Checkout.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider" 

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();


  return (
    <div id="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({ basket.length } items): <strong>0</strong>
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