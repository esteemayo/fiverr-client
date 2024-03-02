import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <span className='text'>fiverr</span>
      </Link>
      <span className='dot'>.</span>
    </div>
  );
};

export default Logo;
