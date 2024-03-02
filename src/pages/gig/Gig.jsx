import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import GigInfo from '../../components/gigInfo/GigInfo';
import GigContent from '../../components/gigContent/GigContent';

import { getGig } from '../../services/gigService';
import { getUser } from '../../services/userService';

import './Gig.scss';

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: async () => {
      const { data } = await getGig(id);
      return data;
    },
  });

  const userId = data?.user;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
  });

  return (
    <main className='gig'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <div className='container'>
          <GigContent
            {...data}
            isLoading={isLoadingUser}
            error={errorUser}
            data={dataUser}
          />
          <GigInfo {...data} />
        </div>
      )}
    </main>
  );
};

export default Gig;
