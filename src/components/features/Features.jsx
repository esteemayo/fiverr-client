import { Fragment } from 'react';

import { features } from '../../data';

import './Features.scss';

const Features = () => {
  return (
    <section className='features'>
      <div className='container'>
        <div className='item'>
          <h1>A whole world of freelance talent at your fingertips</h1>
          {features.map((feature) => {
            const { id, title, desc } = feature;
            return (
              <Fragment key={id}>
                <div className='title'>
                  <img src='/img/check.png' alt='check icon' />
                  <h4>{title}</h4>
                </div>
                <p>{desc}</p>
              </Fragment>
            );
          })}
        </div>
        <div className='item'>
          <video src='img/video.mp4' controls></video>
        </div>
      </div>
    </section>
  );
};

export default Features;
