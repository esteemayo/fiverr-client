import ReviewItem from '../reviewItem/ReviewItem';

import './Reviews.scss';

const Reviews = () => {
  return (
    <section className='reviews'>
      <h2>Reviews</h2>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </section>
  );
};

export default Reviews;
