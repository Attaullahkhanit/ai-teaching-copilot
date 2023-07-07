import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";
import TestStripe from "./TestStripe";

const PUBLIC_KEY = "YOUR_PUBLIC_TEST";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <TestStripe />
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;