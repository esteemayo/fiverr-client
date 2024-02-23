import { Link } from 'react-router-dom';

import './MenuOptions.scss';

const MenuOptions = ({ isOpen, currentUser, onClick }) => {
  return (
    <div className={isOpen ? 'options show' : 'options'}>
      {currentUser.isSeller && (
        <>
          <Link to='/mygigs'>Gigs</Link>
          <Link to='/add'>Add New Gig</Link>
        </>
      )}
      <Link to='/orders'>Orders</Link>
      <Link to='/messages'>Messages</Link>
      <span onClick={onClick}>Logout</span>
    </div>
  );
};

export default MenuOptions;
