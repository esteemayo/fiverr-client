import Review from '../review/Review';

import './Reviews.scss';

const Reviews = () => {
  return (
    <section className='reviews'>
      <h2>Reviews</h2>
      <Review />
      <Review />
      <Review />
    </section>
  );
};

export default Reviews;
