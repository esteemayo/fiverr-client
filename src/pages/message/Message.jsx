import { Link, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getCurrentUser } from '../../utils/getCurrentUser';
import { createMessage, getMessages } from '../../services/messageService';

import './Message.scss';

const Message = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const currentUser = getCurrentUser();

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const { data } = await getMessages(id);
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (message) => {
      const { data } = await createMessage(message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const desc = e.target[0].value;

      const newMessage = {
        conversationId: id,
        desc,
      };

      mutate(newMessage);
      e.target[0].value = '';
    },
    [mutate]
  );

  const messageClasses = useCallback(
    (userId) => {
      return userId === currentUser._id ? 'item owner' : 'item';
    },
    [currentUser]
  );

  return (
    <main className='message'>
      <div className='container'>
        <span className='breadCrumbs'>
          <Link to='/messages'>MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>
        {isLoading ? (
          'loading'
        ) : error ? (
          'Something went wrong!'
        ) : (
          <section className='messages'>
            {data.map((message) => {
              const { _id: id, desc, user } = message;
              return (
                <div key={id} className={messageClasses(user._id)}>
                  <img
                    src={user.image ?? '/img/noavatar.jpg'}
                    alt={user.username}
                  />
                  <p>{desc}</p>
                </div>
              );
            })}
          </section>
        )}
        <hr />
        <form className='write' onSubmit={handleSubmit}>
          <textarea cols='30' rows='10' placeholder='write a message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </main>
  );
};

export default Message;
