import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';

import { createOrder } from '../../services/orderService';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

import './Pay.scss';

const stripePromise = loadStripe(
  import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);

const Pay = () => {
  const { id } = useParams();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await createOrder(id);
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <main className='pay'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </main>
  );
};

export default Pay;
