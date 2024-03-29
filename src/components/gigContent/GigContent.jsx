import Star from '../star/Star';
import Seller from '../seller/Seller';
import Slide from '../slide/Slide';
import Reviews from '../reviews/Reviews';

import './GigContent.scss';

const GigContent = ({
  desc,
  title,
  images,
  _id: id,
  starNumber,
  totalStars,
  createdAt,
  data,
  error,
  isLoading,
}) => {
  return (
    <section className='gigContent'>
      <span className='breadCrumbs'>FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
      <h1>{title}</h1>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <div className='user'>
          <img
            src={data.image ?? '/img/noavatar.jpg'}
            alt='avatar'
            className='pp'
          />
          <span>{data.username}</span>
          <Star starNumber={starNumber} totalStars={totalStars} />
        </div>
      )}
      {/* <Slide arrowsScroll={1} slidesToShow={1} className='slider'>
        {images.map((img, index) => {
          return <img src={img} alt={`Image ${index + 1}`} />;
        })}
      </Slide> */}
      <h2>About this gig</h2>
      <p>{desc}</p>
      <Seller
        user={data}
        error={error}
        starNumber={starNumber}
        totalStars={totalStars}
        isLoading={isLoading}
        createdAt={createdAt}
      />
      <Reviews gigId={id} />
    </section>
  );
};

export default GigContent;
