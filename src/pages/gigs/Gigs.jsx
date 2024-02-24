import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getGigs } from '../../services/gigService';
import GigCard from '../../components/gigCard/GigCard';

import './Gigs.scss';

const Gigs = () => {
  const { search } = useLocation();

  const minRef = useRef();
  const maxRef = useRef();

  const [sort, setSort] = useState('sales');
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: async () => {
      const { data } = await getGigs(
        search,
        minRef.current?.value,
        maxRef.current?.value,
        sort
      );
      return data;
    },
  });

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSort = useCallback((type) => {
    setSort(type);
    setIsOpen(false);
  }, []);

  const handleFilter = useCallback(() => {
    refetch();
  }, [refetch]);

  const sortLabel = useMemo(() => {
    return sort === 'sales' ? 'Best Selling' : 'Newest';
  }, [sort]);

  useEffect(() => {
    refetch();
  }, [sort]);

  return (
    <main className='gigs'>
      <div className='container'>
        <span className='breadCrumbs'>FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr&apos;s AI
          artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type='number' ref={minRef} placeholder='min' />
            <input type='number' ref={maxRef} placeholder='max' />
            <button onClick={handleFilter}>Apply</button>
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
        <div className='cards'>
          {isLoading
            ? 'loading'
            : error
            ? 'Something went wrong'
            : data.map((item) => {
                return <GigCard key={item._id} {...item} />;
              })}
        </div>
      </div>
    </main>
  );
};

export default Gigs;
