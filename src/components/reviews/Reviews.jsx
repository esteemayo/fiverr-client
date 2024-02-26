import { useQuery } from '@tanstack/react-query';

import Review from '../review/Review';
import { getReviews } from '../../services/reviewService';

import './Reviews.scss';

const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await getReviews(gigId);
      return data;
    },
  });

  return (
    <section className='reviews'>
      <h2>Reviews</h2>
      {isLoading
        ? 'loading'
        : error
        ? 'Something went wrong!'
        : data.map((review) => {
            return <Review key={review._id} {...review} />;
          })}
    </section>
  );
};

export default Reviews;
