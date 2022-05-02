import React, { useState } from "react"
import Payment from "./Payment"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { publishableKey } from "../Stripe/config"

const stripePromise = loadStripe(publishableKey)

    const options = {
      // passing the client secret obtained in step 2
      clientSecret: '{{CLIENT_SECRET}}',
      // Fully customizable with appearance API.
      appearance: {/*...*/},
    };

const Checkout = () => {

    return (
        <Elements stripe={stripePromise} >
            <Payment />
        </Elements>
        
    )
}

export default Checkout