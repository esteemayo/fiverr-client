import GigInfo from '../../components/gigInfo/GigInfo';
import Star from '../../components/star/Star';
import Seller from '../../components/seller/Seller';
import Slide from '../../components/slide/Slide';
import Reviews from '../../components/reviews/Reviews';

import './Gig.scss';

const Gig = () => {
  return (
    <main className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadCrumbs'>
            FIVERR &gt; GRAPHICS & DESIGN &gt;
          </span>
          <h1>I will create ai generated art for you</h1>
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
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png'
              alt='image'
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png'
              alt='image'
            />
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png'
              alt='image'
            />
          </Slide>
          <h2>About this gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <Seller />
          <Reviews />
        </div>
        <GigInfo />
      </div>
    </main>
  );
};

export default Gig;
