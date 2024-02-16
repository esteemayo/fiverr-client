import GigCard from '../../components/gigCard/GigCard';

import './Gigs.scss';

const Gigs = () => {
  return (
    <main className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr&apos;s AI
          artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type='text' placeholder='min' />
            <input type='text' placeholder='max' />
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>Best Selling</span>
            <img src='/img/down.png' alt='down icon' />
            <div className='rightMenu'>
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gigs;
