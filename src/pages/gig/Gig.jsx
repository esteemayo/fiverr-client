import Slide from '../../components/slide/Slide';

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
            <div className='stars'>
              <img src='/img/star.png' alt='star icon' />
              <img src='/img/star.png' alt='star icon' />
              <img src='/img/star.png' alt='star icon' />
              <img src='/img/star.png' alt='star icon' />
              <img src='/img/star.png' alt='star icon' />
              <span>5</span>
            </div>
          </div>
          <Slide arrowsScroll={1} slidesToShow={1}>
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
          <div className='seller'>
            <h2>Abut the seller</h2>
            <div className='user'>
              <img
                src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/23905bcdab16b427c8612965f318b4e0-1660400198734/8275baf4-be7e-4120-8a7a-ddf0fde94600.png'
                alt='avatar'
                className='pp'
              />
              <div className='info'>
                <span>John Doe</span>
                <div className='stars'>
                  <img src='/img/star.png' alt='star icon' />
                  <img src='/img/star.png' alt='star icon' />
                  <img src='/img/star.png' alt='star icon' />
                  <img src='/img/star.png' alt='star icon' />
                  <img src='/img/star.png' alt='star icon' />
                  <span>5</span>
                </div>
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
                My name is Ciaran, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className='reviews'>
            <h2>Reviews</h2>
            <article className='item'>
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
              <div className='stars'>
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist I'll be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that I'll be using it again very very soon
              </p>
              <div className='help'>
                <span>Helpful?</span>
                <img src='/img/like.png' alt='like icon' />
                <span>Yes</span>
                <img src='/img/dislike.png' alt='dislike icon' />
                <span>No</span>
              </div>
            </article>
            <hr />
            <article className='item'>
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
              <div className='stars'>
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist I'll be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that I'll be using it again very very soon
              </p>
              <div className='help'>
                <span>Helpful?</span>
                <img src='/img/like.png' alt='like icon' />
                <span>Yes</span>
                <img src='/img/dislike.png' alt='dislike icon' />
                <span>No</span>
              </div>
            </article>
            <hr />
            <article className='item'>
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
              <div className='stars'>
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <img src='/img/star.png' alt='star icon' />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist I'll be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that I'll be using it again very very soon
              </p>
              <div className='help'>
                <span>Helpful?</span>
                <img src='/img/like.png' alt='like icon' />
                <span>Yes</span>
                <img src='/img/dislike.png' alt='dislike icon' />
                <span>No</span>
              </div>
            </article>
            <hr />
          </div>
        </div>
        <div className='right'>Right</div>
      </div>
    </main>
  );
};

export default Gig;
