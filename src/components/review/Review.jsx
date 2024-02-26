import { useQuery } from '@tanstack/react-query';

import { getUser } from '../../services/userService';

import './Review.scss';

const Review = ({ desc, star, user }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${user}`],
    queryFn: async () => {
      const { data } = await getUser(user);
      return data;
    },
  });

  return (
    <>
      <article className='review'>
        {isLoading ? (
          'loading'
        ) : error ? (
          'Something went wrong'
        ) : (
          <div className='user'>
            <img
              src={data.image ?? '/img/noavatar.jpg'}
              alt='avatar'
              className='pp'
            />
            <div className='info'>
              <span>{data.username}</span>
              <div className='country'>
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className='stars'>
          {Array(star)
            .fill()
            .map((_, index) => {
              return <img key={index} src='/img/star.png' alt='star icon' />;
            })}
          <span>{star}</span>
        </div>
        <p>{desc}</p>
        <div className='helpful'>
          <span>Helpful?</span>
          <img src='/img/like.png' alt='like icon' />
          <span>Yes</span>
          <img src='/img/dislike.png' alt='dislike icon' />
          <span>No</span>
        </div>
      </article>
      <hr />
    </>
  );
};

export default Review;
