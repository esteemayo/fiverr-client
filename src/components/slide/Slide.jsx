import Slider from 'infinite-react-carousel';

import './Slide.scss';

const Slide = ({ slidesToShow, arrowsScroll, children }) => {
  return (
    <section className='slide'>
      <div className='container'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </section>
  );
};

export default Slide;
