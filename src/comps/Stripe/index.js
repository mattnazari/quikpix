import React from 'react';
import './stripe.scss';

import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_Rla0UjJuDpACAUkzbJIZXbaG00fFSlyRNd');

const CARD_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    },
  },
}

const StripeForm = ({ setIsLocked, setIsPremium }) => {
  const stripe = useStripe();
  const elements = useElements();

  const Pay = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("error", error)
      alert('error with your payment')
    } else {
      console.log("payments", paymentMethod)

      setIsLocked(false)
      setIsPremium(true)

      alert('payment successful')
      // var clientSecret = await fetch('/pay.php')
      // var data = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: paymentMethod
      // });
      // if (data.success) {
      //   // unlock a feature
      //   alert('success')
      // }
    }
  }
  return (
    <form onSubmit={Pay}>
      <CardElement options={CARD_OPTIONS} />
      <button type='submit'>Pay Now</button>
    </form>
  )
}

const Wrapper = ({ setIsLocked, setIsPremium }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm setIsLocked={setIsLocked}
        setIsPremium={setIsPremium} />
    </Elements>
  )
}

Wrapper.defaultProps = {

}

export default Wrapper;