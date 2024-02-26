import { useQuery } from '@tanstack/react-query';

import { formatCurrency } from '../../utils/formatCurrency';
import { getUserOrders } from '../../services/orderService';

import './Orders.scss';

const Orders = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await getUserOrders();
      return data;
    },
  });

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
