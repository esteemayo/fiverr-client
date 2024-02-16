import { useCallback, useMemo, useState } from 'react';

import GigCard from '../../components/gigCard/GigCard';

import './Gigs.scss';

const Gigs = () => {
  const [sort, setSort] = useState('sales');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSort = useCallback((type) => {
    setSort(type);
    setIsOpen(false);
  }, []);

  const sortLabel = useMemo(() => {
    return sort === 'sales' ? 'Best Selling' : 'Newest';
  }, [sort]);

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
            <span className='sortType'>{sortLabel}</span>
            <img src='/img/down.png' alt='down icon' onClick={handleToggle} />
            {isOpen && (
              <div className='rightMenu'>
                {sort === 'sales' ? (
                  <span onClick={() => handleSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => handleSort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gigs;
