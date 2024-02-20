import { Link } from 'react-router-dom';

import { menus } from '../../data';

import './Menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
      {menus.map((item) => {
        const { id, label } = item;
        return (
          <Link key={id} to='/'>
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
