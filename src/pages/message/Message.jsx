import { Link, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createMessage, getMessages } from '../../services/message';

import './Message.scss';

const Message = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

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
              const { _id: id, desc } = message;
              return (
                <div key={id} className='item'>
                  <img
                    src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168679800/original/51e1dc11dcae4c2c8b3f6c42e0fbf1d355558625/design-a-stunning-ui-and-build-a-fullstack-flutter-app.jpg'
                    alt='avatar'
                  />
                  <p>{desc}</p>
                </div>
              );
            })}
          </section>
        )}
        <hr />
        <form className='write' onSubmit={handleSubmit}>
          <textarea
            name=''
            id=''
            placeholder='write a message'
            cols='30'
            rows='10'
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    </main>
  );
};

export default Message;
