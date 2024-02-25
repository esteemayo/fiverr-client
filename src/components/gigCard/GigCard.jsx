import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getUser } from '../../services/userService';
import { formatCurrency } from '../../utils/formatCurrency';

import './GigCard.scss';

const GigCard = ({
  _id: id,
  desc,
  user,
  cover,
  price,
  title,
  totalStars,
  starNumber,
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${user}`],
    queryFn: async () => {
      const { data } = await getUser(user);
      return data;
    },
  });

  const stars = useMemo(() => {
    return (
      !isNaN(Math.round(totalStars / starNumber)) &&
      Math.round(totalStars / starNumber)
    );
  }, [starNumber, totalStars]);

  return (
    <Link to={`/gig/${id}`}>
      <article className='gigCard'>
        <img src={cover} alt={title} />
        <div className='info'>
          {isLoading ? (
            'loading'
          ) : error ? (
            'Something went wrong!'
          ) : (
            <div className='user'>
              <img src={data.img ?? '/img/noavatar.jpg'} alt={data.username} />
              <span>{data.username}</span>
            </div>
          )}
          <p>{desc}</p>
          <div className='star'>
            <img src='/img/star.png' alt='star' />
            <span>{stars}</span>
          </div>
        </div>
        <hr />
        <div className='details'>
          <img src='/img/heart.png' alt='heart icon' />
          <div className='price'>
            <span>STARTING AT</span>
            <h2>{formatCurrency(price)}</h2>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GigCard;
