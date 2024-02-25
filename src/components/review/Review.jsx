import Star from '../star/Star';

import './Review.scss';

const Review = () => {
  return (
    <>
      <article className='reviewItem'>
        <div className='user'>
          <img
            src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/23905bcdab16b427c8612965f318b4e0-1660400198734/8275baf4-be7e-4120-8a7a-ddf0fde94600.png'
            alt='avatar'
            className='pp'
          />
          <div className='info'>
            <span>John Doe</span>
            <div className='country'>
              <img
                src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                alt='flag'
              />
              <span>United States</span>
            </div>
          </div>
        </div>
        <Star />
        <p>
          I just want to say that art_with_ai was the first, and after this, the
          only artist I'll be using on Fiverr. Communication was amazing, each and
          every day he sent me images that I was free to request changes to. They
          listened, understood, and delivered above and beyond my expectations. I
          absolutely recommend this gig, and know already that I'll be using it
          again very very soon
        </p>
        <div className='helpful'>
          <span>Helpful?</span>
          <img src='/img/like.png' alt='like icon' />
          <span>Yes</span>
          <img src='/img/dislike.png' alt='dislike icon' />
          <span>No</span>
        </div>
      </article>
      <hr />
    </>
  );
};

export default Review;
