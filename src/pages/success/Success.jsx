import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { confirmOrder } from '../../services/orderService';

import './Success.scss';

const Success = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const payment_intent = params.get('payment_intent');

  useEffect(() => {
    (async () => {
      try {
        await confirmOrder({ payment_intent });

        setTimeout(() => {
          navigate('/orders');
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <main className='success'>
      <div className='container'>
        Payment successful.You are being redirected to the orders page. Please
        do not close the page.
      </div>
    </main>
  );
};

export default Success;
