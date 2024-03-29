import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';

import Menu from '../menu/Menu';
import Logo from '../logo/Logo';

import { userKey, setToStorage } from '../../utils';
import { getCurrentUser } from '../../utils/getCurrentUser';

import { logout } from '../../services/authService';
import MenuOptions from '../menuOptions/MenuOptions';

import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await logout();

      setToStorage(userKey, null);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }, [navigate]);

  const navClasses = useMemo(() => {
    return isActive || pathname !== '/' ? 'navbar active' : 'navbar';
  }, [isActive, pathname]);

  useEffect(() => {
    window.addEventListener('scroll', isActiveHandler);
    return () => window.removeEventListener('scroll', isActiveHandler);
  }, [isActiveHandler]);

  const currentUser = getCurrentUser();

  return (
    <nav className={navClasses}>
      <div className='container'>
        <Logo />
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <Link to='/login'>Sign in</Link>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <Link to='/register'>
              <button>Join</button>
            </Link>
          )}
          {!!currentUser && (
            <div className='user' onClick={handleToggle}>
              <img src={currentUser.img ?? '/img/noavatar.jpg'} alt='avatar' />
              <span>{currentUser.username}</span>
              <MenuOptions
                isOpen={isOpen}
                currentUser={currentUser}
                onClick={handleLogout}
              />
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
