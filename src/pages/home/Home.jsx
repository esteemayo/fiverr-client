import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';

import './Home.scss';

const Home = () => {
  return <main className='home'>
    <Featured />
    <TrustedBy />
    <Slide />
  </main>;
};

export default Home;
