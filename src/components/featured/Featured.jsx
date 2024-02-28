import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { services } from '../../data';

import './Featured.scss';

const Featured = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState();

  const handleSearch = useCallback(() => {
    navigate(`/gigs?search=${query}`);
  }, [navigate, query]);

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
              <input
                type='text'
                placeholder='Try "building mobile app"'
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className='popular'>
            <span>Popular:</span>
            {services.map((service) => {
              const { id, label } = service;
              return <button key={id}>{label}</button>;
            })}
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
