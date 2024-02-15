import './Featured.scss';

const Featured = () => {
  return (
    <section className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className='search'>
            <div className='searchInput'>
              <img src='/img/search.png' alt='search icon' />
              <input type='text' placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className='popular'>
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className='right'>
          <img src='/img/man.png' alt='man' />
        </div>
      </div>
    </section>
  );
};

export default Featured;
