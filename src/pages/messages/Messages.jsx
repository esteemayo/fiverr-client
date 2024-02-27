import { Link } from 'react-router-dom';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { excerpts, getFromStorage, userKey } from '../../utils';
import { getConversations } from '../../services/conversationService';

import './Messages.scss';

const Messages = () => {
  const currentUser = getFromStorage(userKey);

  const { isLoading, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const { data } = await getConversations();
      return data;
    },
  });

  const statusLabel = useMemo(() => {
    return currentUser.isSeller ? 'Buyer' : 'Seller';
  }, [currentUser]);

  return (
    <main className='messages'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'Something went wrong!'
      ) : (
        <div className='container'>
          <div className='title'>
            <h1>Messages</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>{statusLabel}</th>
                <th>Last message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((conversation) => {
                const {
                  id,
                  sellerId,
                  buyerId,
                  lastMessage,
                  readBySeller,
                  readByBuyer,
                  updatedAt,
                } = conversation;
                return (
                  <tr
                    key={id}
                    className={
                      (currentUser.isSeller && !readBySeller) ||
                      (!currentUser.isSeller && !readByBuyer && 'active')
                    }
                  >
                    <td>{currentUser.isSeller ? buyerId : sellerId}</td>
                    <td>
                      <Link to={`/message/123`}>
                        {lastMessage && excerpts(lastMessage, 100)}
                      </Link>
                    </td>
                    <td>{moment(updatedAt).fromNow()}</td>
                    <td>
                      {(currentUser.isSeller && !readBySeller) ||
                        (!currentUser.isSeller && !readByBuyer && (
                          <button>Mark as Read</button>
                        ))}
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

export default Messages;
