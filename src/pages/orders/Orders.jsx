import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getUserOrders } from '../../services/orderService';
import {
  createConversation,
  getConversation,
} from '../../services/conversationService';

import { getFromStorage, userKey } from '../../utils';
import { formatCurrency } from '../../utils/formatCurrency';

import './Orders.scss';

const Orders = () => {
  const navigate = useNavigate();
  const currentUser = getFromStorage(userKey);

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await getUserOrders();
      return data;
    },
  });

  const handleContact = useCallback(
    async (order) => {
      const { sellerId, buyerId } = order;
      const conversationId = sellerId + buyerId;

      try {
        const { data } = await getConversation(conversationId);
        navigate(`/message/${data.id}`);
      } catch (err) {
        if (err.response.status == 404) {
          const conversation = {
            to: currentUser.isSeller ? buyerId : sellerId,
          };

          const { data } = await createConversation(conversation);
          navigate(`/message/${data.id}`);
        }
      }
    },
    [currentUser, navigate]
  );

  return (
    <main className='orders'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <div className='container'>
          <div className='title'>
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => {
                const { _id: id, img, title, price } = order;
                return (
                  <tr key={id}>
                    <td>
                      <img src={img} alt={title} className='img' />
                    </td>
                    <td>{title}</td>
                    <td>{formatCurrency(price)}</td>
                    <td>
                      <img
                        src='/img/message.png'
                        alt='message icon'
                        className='message'
                        onClick={() => handleContact(order)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Orders;
