import Star from '../star/Star';
import Seller from '../seller/Seller';
import Slide from '../slide/Slide';
import Reviews from '../reviews/Reviews';

import './GigContent.scss';

const GigContent = ({ desc, title, images }) => {
  return (
    <section className='gigContent'>
      <span className='breadCrumbs'>FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
      <h1>{title}</h1>
      <div className='user'>
        <img
          src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/23905bcdab16b427c8612965f318b4e0-1660400198734/8275baf4-be7e-4120-8a7a-ddf0fde94600.png'
          alt='avatar'
          className='pp'
        />
        <span>John Doe</span>
        <Star />
      </div>
      <Slide arrowsScroll={1} slidesToShow={1} className='slider'>
        {images.map((img, index) => {
          return <img src={img} alt={`Image ${index + 1}`} />;
        })}
      </Slide>
      <h2>About this gig</h2>
      <p>{desc}</p>
      <Seller />
      <Reviews />
    </section>
  );
};

export default GigContent;
