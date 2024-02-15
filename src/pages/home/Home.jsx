import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';

import './Home.scss';

const Home = () => {
  return <main className='home'>
    <Featured />
    <TrustedBy />
  </main>;
};

export default Home;
