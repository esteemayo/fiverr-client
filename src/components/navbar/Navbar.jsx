import { Link, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  const navClasses = useMemo(() => {
    return isActive || pathname !== '/' ? 'navbar active' : 'navbar';
  }, [isActive, pathname]);

  useEffect(() => {
    window.addEventListener('scroll', isActiveHandler);
    return () => window.removeEventListener('scroll', isActiveHandler);
  }, []);

  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  return (
    <nav className={navClasses}>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <span className='text'>fiverr</span>
          </Link>
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
            <div className='user' onClick={handleToggle}>
              <img
                src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='avatar'
              />
              <span>{currentUser.username}</span>
              <div className={isOpen ? 'options show' : 'options'}>
                {currentUser.isSeller && (
                  <>
                    <Link to='/mygigs'>Gigs</Link>
                    <Link to='/add'>Add New Gig</Link>
                  </>
                )}
                <Link to='/orders'>Orders</Link>
                <Link to='/messages'>Messages</Link>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {(isActive || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <Link to='/'>Graphics & Design</Link>
            <Link to='/'>Video & Animation</Link>
            <Link to='/'>Writing & Translation</Link>
            <Link to='/'>AI Services</Link>
            <Link to='/'>Digital Marketing</Link>
            <Link to='/'>Music & Audio</Link>
            <Link to='/'>Programming & Tech</Link>
            <Link to='/'>Business</Link>
            <Link to='/'>Lifestyle</Link>
          </div>
          <hr />
        </>
      )}
    </nav>
  );
};

export default Navbar;
