import './Business.scss';

const Business = () => {
  return (
    <section className='business'>
      <div className='container'>
        <div className='item'>
          <h1>fiverr business</h1>
          <h1>A business solution designed for teams</h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className='title'>
            <img src='/img/check.png' alt='check icon' />
            <span>Connect to freelancers with proven business experience</span>
          </div>
          <div className='title'>
            <img src='/img/check.png' alt='check icon' />
            <span>
              Get matched with the perfect talent by a customer success manager
            </span>
          </div>
          <div className='title'>
            <img src='/img/check.png' alt='check icon' />
            <span>
              Manage teamwork and boost productivity with one powerful workspace
            </span>
          </div>
        </div>
        <div className='item'>
          <img
            src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png'
            alt='image'
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
