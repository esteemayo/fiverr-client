import './GigInfo.scss';

const GigInfo = () => {
  return (
    <aside className='gigInfo'>
      <div className='price'>
        <h3>1 AI generated image</h3>
        <h2>$59.99</h2>
      </div>
      <p>
        I will create a unique high quality AI generated image based on a
        description that you give me
      </p>
      <div className='details'>
        <div className='item'>
          <img src='/img/clock.png' alt='clock icon' />
          <span>2 days delivery</span>
        </div>
        <div className='item'>
          <img src='/img/recycle.png' alt='recycle icon' />
          <span>3 Revisions</span>
        </div>
      </div>
      <div className='feature'>
        <div className='item'>
          <img src='/img/greencheck.png' alt='greencheck icon' />
          <span>Prompt writing</span>
        </div>
        <div className='item'>
          <img src='/img/greencheck.png' alt='greencheck icon' />
          <span>Artwork delivery</span>
        </div>
        <div className='item'>
          <img src='/img/greencheck.png' alt='greencheck icon' />
          <span>Image uploading</span>
        </div>
        <div className='item'>
          <img src='/img/greencheck.png' alt='greencheck icon' />
          <span>Additional design</span>
        </div>
      </div>
      <button>Continue</button>
    </aside>
  );
};

export default GigInfo;
