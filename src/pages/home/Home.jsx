import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import Featured from '../../components/featured/Featured';

import { cards } from '../../data';

import './Home.scss';

const Home = () => {
  return <main className='home'>
    <Featured />
    <TrustedBy />
    <Slide arrowsScroll={5} slidesToShow={5} >
      {cards.map((item) => {
        return <CategoryCard key={item.id} {...item} />;
      })}
    </Slide>
  </main>;
};

export default Home;
