import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createReview } from '../../services/reviewService';

import './AddReview.scss';

const AddReview = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (review) => {
      const { data } = await createReview(review);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const desc = e.target[0].value;
      const star = +e.target[1].value;

      const review = {
        desc,
        star,
        gig: gigId,
      };

      mutate(review);

      e.target.reset();
    },
    [mutate]
  );

  return (
    <div className='addReview'>
      <h3>Add a review</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='write your opinion' />
        <select name='' id=''>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default AddReview;
