import { Link } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { formatCurrency } from '../../utils/formatCurrency';
import { getCurrentUser } from '../../utils/getCurrentUser';

import { deleteGig, getMyGigs } from '../../services/gigService';

import './MyGigs.scss';

const MyGigs = () => {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['myGigs'],
    queryFn: async () => {
      const { data } = await getMyGigs(currentUser._id);
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (gigId) => {
      return await deleteGig(gigId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myGigs'] });
    },
  });

  const handleDelete = useCallback(
    (gigId) => {
      mutate(gigId);
    },
    [mutate]
  );

  const headerLabel = useMemo(() => {
    return currentUser.isSeller ? 'Gigs' : 'Orders';
  }, [currentUser]);

  return (
    <main className='myGigs'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <div className='container'>
          <div className='title'>
            <h1>{headerLabel}</h1>
            <Link to='/add'>
              <button>Add new gig</button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gig) => {
                const { _idd: id, cover, title, price, sales } = gig;
                return (
                  <tr key={id}>
                    <td>
                      <img src={cover} alt={title} className='img' />
                    </td>
                    <td>{title}</td>
                    <td>{formatCurrency(price)}</td>
                    <td>{sales}</td>
                    <td>
                      <img
                        src='/img/delete.png'
                        alt='delete icon'
                        className='delete'
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default MyGigs;
