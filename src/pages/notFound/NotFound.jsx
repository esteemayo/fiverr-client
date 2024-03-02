import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <main className='notFound'>
      <div className='container'>
        <div className='wrapper'>
          <Link to='/'>
            <img src='/svg/back_home.svg' alt='404' />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
