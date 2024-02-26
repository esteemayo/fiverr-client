import './AddReview.scss';

const AddReview = () => {
  return (
    <div className='addReview'>
      <h3>Add a review</h3>
      <form>
        <input type='text' name='' id='' placeholder='write your opinion' />
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
