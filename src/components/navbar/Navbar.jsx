import { useCallback, useEffect, useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

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
          <span>Become a Seller</span>
          <button>Join</button>
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
