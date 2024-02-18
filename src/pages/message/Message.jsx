import { Link } from 'react-router-dom';

import './Message.scss';

const Message = () => {
  return (
    <main className='message'>
      <div className='container'>
        <span className='breadCrumbs'>
          <Link to='/messages'>MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>
        <section className='messages'>
          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
              alt='avatar'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eleit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className='item owner'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
              alt='avatar'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eleit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
              alt='avatar'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eleit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className='item owner'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
              alt='avatar'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eleit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
              alt='avatar'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eleit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className='item owner'>
            <img
              src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
              alt='avatar'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing eleit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </section>
        <section className='write'>
          <textarea
            name=''
            id=''
            placeholder='write a message'
            cols='30'
            rows='10'
          />
          <button>Send</button>
        </section>
      </div>
    </main>
  );
};

export default Message;
