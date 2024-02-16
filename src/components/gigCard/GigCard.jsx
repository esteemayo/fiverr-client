import { Link } from 'react-router-dom';

import './GigCard.scss';

const GigCard = ({ id, img, pp, desc, star, price, username }) => {
  return (
    <Link to={`/gig/${id}`}>
      <article className='gigCard'>
        <img src={img} alt='image' />
        <div className='info'>
          <div className='user'>
            <img src={pp} alt={username} />
            <span>{username}</span>
          </div>
          <p>{desc}</p>
          <div className='star'>
            <img src='/img/star.png' alt='star' />
            <span>{star}</span>
          </div>
        </div>
        <hr />
        <div className='details'>
          <img src='/img/heart.png' alt='heart icon' />
          <div className='price'>
            <span>STARTING AT</span>
            <h2>${price}</h2>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GigCard;
