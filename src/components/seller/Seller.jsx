import './Seller.scss';

const Seller = () => {
  return (
    <div className='seller'>
      <h2>About the seller</h2>
      <div className='user'>
        <img
          src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/23905bcdab16b427c8612965f318b4e0-1660400198734/8275baf4-be7e-4120-8a7a-ddf0fde94600.png'
          alt='avatar'
          className='pp'
        />
        <div className='info'>
          <span>John Doe</span>
          <Star />
          <button>Contact me</button>
        </div>
      </div>
      <div className='box'>
        <div className='items'>
          <div className='item'>
            <span className='title'>From</span>
            <span className='desc'>USA</span>
          </div>
          <div className='item'>
            <span className='title'>Member since</span>
            <span className='desc'>Aug 2022</span>
          </div>
          <div className='item'>
            <span className='title'>Avg. response time</span>
            <span className='desc'>4 hours</span>
          </div>
          <div className='item'>
            <span className='title'>Last delivery</span>
            <span className='desc'>1 day</span>
          </div>
          <div className='item'>
            <span className='title'>Languages</span>
            <span className='desc'>English</span>
          </div>
        </div>
        <hr />
        <p>
          My name is Ciaran, I enjoy creating AI generated art in my spare time.
          I have a lot of experience using the AI program and that means I know
          what to prompt the AI with to get a great and incredibly detailed
          result.
        </p>
      </div>
    </div>
  );
};

export default Seller;
