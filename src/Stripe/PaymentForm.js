import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import stripePromise from './StripeClient';

const PaymentForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add your payment processing logic here
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    </Elements>
  );
};

export default PaymentForm;
