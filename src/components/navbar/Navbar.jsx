import { useCallback, useEffect, useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', isActiveHandler);
    return () => window.removeEventListener('scroll', isActiveHandler);
  }, []);

  return (
    <nav className={isActive ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {!!currentUser && (
            <div className='user'>
              <img src='' alt='' />
              <span>{currentUser.username}</span>
              <div className='options'>
                {currentUser.isSeller && (
                  <>
                    <span>Gigs</span>
                    <span>Add New Gig</span>
                  </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <>
          <hr />
          <div className='menu'>
            <span>test</span>
            <span>test</span>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
