import Business from '../../components/business/Business';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Featured from '../../components/featured/Featured';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import Features from '../../components/features/Features';

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
    <Features />
    <Business />
  </main>;
};

export default Home;
