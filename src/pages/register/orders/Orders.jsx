import { useMemo } from 'react';
import './Orders.scss';

const Orders = () => {
  const currentUser = {
    id: 1,
    name: 'John Doe',
    isSeller: true,
  };

  const label = useMemo(() => {
    return currentUser.isSeller ? 'Buyer' : 'Seller';
  }, [currentUser]);

  return (
    <main className='orders'>
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
              <th>{label}</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/299984800/original/1adee721799ebf42432d37f152c4bf5c9d77d080/angular-web-projects-and-websites.png'
                  alt='image'
                  className='img'
                />
              </td>
              <td>Gig 1</td>
              <td>$88</td>
              <td>123</td>
              <td>
                <img
                  src='/img/message.png'
                  alt='message icon'
                  className='message'
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/299984800/original/1adee721799ebf42432d37f152c4bf5c9d77d080/angular-web-projects-and-websites.png'
                  alt='image'
                  className='img'
                />
              </td>
              <td>Gig 1</td>
              <td>$88</td>
              <td>123</td>
              <td>
                <img
                  src='/img/message.png'
                  alt='message icon'
                  className='message'
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/299984800/original/1adee721799ebf42432d37f152c4bf5c9d77d080/angular-web-projects-and-websites.png'
                  alt='image'
                  className='img'
                />
              </td>
              <td>Gig 1</td>
              <td>$88</td>
              <td>123</td>
              <td>
                <img
                  src='/img/message.png'
                  alt='message icon'
                  className='message'
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/299984800/original/1adee721799ebf42432d37f152c4bf5c9d77d080/angular-web-projects-and-websites.png'
                  alt='image'
                  className='img'
                />
              </td>
              <td>Gig 1</td>
              <td>$88</td>
              <td>123</td>
              <td>
                <img
                  src='/img/message.png'
                  alt='message icon'
                  className='message'
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/299984800/original/1adee721799ebf42432d37f152c4bf5c9d77d080/angular-web-projects-and-websites.png'
                  alt='image'
                  className='img'
                />
              </td>
              <td>Gig 1</td>
              <td>$88</td>
              <td>123</td>
              <td>
                <img
                  src='/img/message.png'
                  alt='message icon'
                  className='message'
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src='https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/299984800/original/1adee721799ebf42432d37f152c4bf5c9d77d080/angular-web-projects-and-websites.png'
                  alt='image'
                  className='img'
                />
              </td>
              <td>Gig 1</td>
              <td>$88</td>
              <td>123</td>
              <td>
                <img
                  src='/img/message.png'
                  alt='message icon'
                  className='message'
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Orders;
