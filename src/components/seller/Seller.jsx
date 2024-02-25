import Star from '../star/Star';

import './Seller.scss';

const Seller = ({ starNumber, totalStars, isLoading, error, user }) => {
  return (
    <>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <section className='seller'>
          <h2>About the seller</h2>
          <div className='user'>
            <img
              src={user.image ?? '/img/noavatar.jpg'}
              alt='avatar'
              className='pp'
            />
            <div className='info'>
              <span>{user.username}</span>
              <Star starNumber={starNumber} totalStars={totalStars} />
              <button>Contact me</button>
            </div>
          </div>
          <div className='box'>
            <div className='items'>
              <div className='item'>
                <span className='title'>From</span>
                <span className='desc'>{user.country}</span>
              </div>
              <div className='item'>
                <span className='title'>Member since</span>
                <span className='desc'>Aug 2022</span>
              </div>
              <div className='item'>
                <span className='title'>Avg. response time</span>
                <span className='desc'>4 hours</span>
              </div>
              <div className='item'>
                <span className='title'>Last delivery</span>
                <span className='desc'>1 day</span>
              </div>
              <div className='item'>
                <span className='title'>Languages</span>
                <span className='desc'>English</span>
              </div>
            </div>
            <hr />
            <p>{user.desc}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Seller;
