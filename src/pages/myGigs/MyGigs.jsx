import { Link } from 'react-router-dom';

import './MyGigs.scss';

const MyGigs = () => {
  return (
    <main className='myGigs'>
      <div className='container'>
        <div className='title'>
          <h1>Gigs</h1>
          <Link to='/add'>
            <button>Add new gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
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
                  src='/img/delete.png'
                  alt='delete icon'
                  className='delete'
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
                  src='/img/delete.png'
                  alt='delete icon'
                  className='delete'
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
                  src='/img/delete.png'
                  alt='delete icon'
                  className='delete'
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
                  src='/img/delete.png'
                  alt='delete icon'
                  className='delete'
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
                  src='/img/delete.png'
                  alt='delete icon'
                  className='delete'
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
                  src='/img/delete.png'
                  alt='delete icon'
                  className='delete'
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MyGigs;
