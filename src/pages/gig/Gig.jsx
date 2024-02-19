import GigInfo from '../../components/gigInfo/GigInfo';
import GigContent from '../../components/gigContent/GigContent';

import './Gig.scss';

const Gig = () => {
  return (
    <main className='gig'>
      <div className='container'>
        <GigContent />
        <GigInfo />
      </div>
    </main>
  );
};

export default Gig;
