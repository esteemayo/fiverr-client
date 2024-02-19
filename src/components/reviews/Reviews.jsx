import ReviewItem from '../reviewItem/ReviewItem';

import './Reviews.scss';

const Reviews = () => {
  return (
    <section className='reviews'>
      <h2>Reviews</h2>
      <ReviewItem />
      <hr />
      <ReviewItem />
      <hr />
      <ReviewItem />
      <hr />
    </section>
  );
};

export default Reviews;
