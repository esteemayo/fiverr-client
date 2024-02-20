import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = () => {
  return (
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
  );
};

export default Menu;
