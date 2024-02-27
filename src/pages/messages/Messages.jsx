import { useCallback, useMemo } from 'react';
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { getFromStorage, userKey } from '../../utils';
import {
  getConversations,
  updateConversation,
} from '../../services/conversationService';

import './Messages.scss';

const Messages = () => {
  const queryClient = useQueryClient();
  const currentUser = getFromStorage(userKey);

  const { isLoading, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      const { data } = await getConversations();
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (conversationId) => {
      const { data } = await updateConversation(conversationId);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
  });

  const handleRead = useCallback(
    (conversationId) => {
      mutate(conversationId);
    },
    [mutate]
  );

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
                      <Link to={`/message/${id}`}>
                        {lastMessage && lastMessage.substring(0, 100)}...
                      </Link>
                    </td>
                    <td>{moment(updatedAt).fromNow()}</td>
                    <td>
                      {(currentUser.isSeller && !readBySeller) ||
                        (!currentUser.isSeller && !readByBuyer && (
                          <button onClick={() => handleRead(id)}>
                            Mark as Read
                          </button>
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
