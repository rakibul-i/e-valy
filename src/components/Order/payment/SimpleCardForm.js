import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';
import './payment.css';

const SimpleCardForm = () => {
  const [{basket}] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      
      setPaymentError(null)
    }
  };

  return (
    <div>
    {
      paymentError && <p className="text-danger">{paymentError}</p>
    }
    {
      paymentSuccess ? <p className="text-success">Your payment was successfull. Your payment id '{paymentSuccess}' </p> : (
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="payBTn mt-3" type="submit" disabled={!stripe}>
          Pay
        </button>
    </form>
      )
    }
    
    </div>
  );
};

export default SimpleCardForm;