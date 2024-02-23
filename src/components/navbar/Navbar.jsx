import { Link, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';

import Menu from '../menu/Menu';
import MenuOptions from '../menuOptions/MenuOptions';

import { userKey, getFromStorage } from '../../utils';

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
  }, [isActiveHandler]);

  const currentUser = getFromStorage(userKey);

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
          <Link to='/login'>Sign in</Link>
          {!currentUser.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {!!currentUser && (
            <div className='user' onClick={handleToggle}>
              <img src={currentUser.img ?? '/img/noavatar.jpg'} alt='avatar' />
              <span>{currentUser.username}</span>
              <MenuOptions isOpen={isOpen} currentUser={currentUser} />
            </div>
          )}
        </div>
      </div>
      {(isActive || pathname !== '/') && (
        <>
          <hr />
          <Menu />
          <hr />
        </>
      )}
    </nav>
  );
};

export default Navbar;
