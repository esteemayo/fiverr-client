import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import GigInfo from '../../components/gigInfo/GigInfo';
import GigContent from '../../components/gigContent/GigContent';

import { getGig } from '../../services/gigService';

import './Gig.scss';
import { getUser } from '../../services/userService';

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: async () => {
      const { data } = await getGig(id);
      return data;
    },
  });

  return (
    <main className='gig'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <div className='container'>
          <GigContent {...data} />
          <GigInfo {...data} />
        </div>
      )}
    </main>
  );
};

export default Gig;
