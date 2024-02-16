import './Features.scss';

const Features = () => {
  return (
    <section className='features'>
      <div className='container'>
        <div className='item'>
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className='title'>
            <img src='/img/check.png' alt='' />
            <h4>The best for every budget</h4>
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className='title'>
            <img src='/img/check.png' alt='' />
            <h4>Quality work done quickly</h4>
          </div>
          <p>
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className='title'>
            <img src='/img/check.png' alt='' />
            <h4>Protected payments, every time</h4>
          </div>
          <p>
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className='title'>
            <img src='/img/check.png' alt='' />
            <h4>24/7 support</h4>
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className='item'>
          <video src='img/video.mp4' controls></video>
        </div>
      </div>
    </section>
  );
};

export default Features;
