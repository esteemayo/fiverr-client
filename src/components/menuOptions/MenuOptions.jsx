import { Link } from 'react-router-dom';

import './MenuOptions.scss';

const MenuOptions = ({ isOpen, currentUser }) => {
  return (
    <aside className={isOpen ? 'options show' : 'options'}>
      {currentUser.isSeller && (
        <>
          <Link to='/mygigs'>Gigs</Link>
          <Link to='/add'>Add New Gig</Link>
        </>
      )}
      <Link to='/orders'>Orders</Link>
      <Link to='/messages'>Messages</Link>
      <span>Logout</span>
    </aside>
  );
};

export default MenuOptions;
