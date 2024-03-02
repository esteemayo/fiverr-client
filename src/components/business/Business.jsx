import { businesses } from '../../data';

import '../features/Features.scss';

const Business = () => {
  return (
    <section className='features dark'>
      <div className='container'>
        <div className='item'>
          <h1>
            fiverr <i>business</i>
          </h1>
          <h1>A business solution designed for teams</h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          {businesses.map((business) => {
            const { id, desc } = business;
            return (
              <div key={id} className='title'>
                <img src='/img/check.png' alt='check icon' />
                <span>{desc}</span>
              </div>
            );
          })}
          <button>Explore Fiverr Business</button>
        </div>
        <div className='item'>
          <img src='/img/business.webp' alt='image' />
        </div>
      </div>
    </section>
  );
};

export default Business;
