import './Add.scss';

const Add = () => {
  return (
    <main className='add'>
      <div className='container'>
        <h1>Add new gig</h1>
        <section className='sections'>
          <div className='left'>
            <div className='formGroup'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                placeholder="e.g. I will do something I'm really good at"
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='category'>Category</label>
              <select name='category' id='category'>
                <option value='design'>Design</option>
                <option value='web'>Web Development</option>
                <option value='animation'>Animation</option>
                <option value='music'>Music</option>
              </select>
            </div>
            <div className='formGroup'>
              <label htmlFor='file'>Cover Image</label>
              <input type='file' id='file' accept='image/*' />
            </div>
            <div className='formGroup'>
              <label htmlFor='images'>upload Images</label>
              <input type='file' id='images' accept='image/*' multiple />
            </div>
            <div className='formGroup'>
              <label htmlFor='desc'>Description</label>
              <textarea
                id='desc'
                name='desc'
                cols='30'
                rows='10'
                placeholder='Brief descriptions to introduce your service to customers'
              />
            </div>
            <button>Create</button>
          </div>
          <div className='right'>
            <div className='formGroup'>
              <label htmlFor='service'>Service Title</label>
              <input
                type='text'
                id='service'
                placeholder='e.g. One page web design'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='short-desc'>Short Description</label>
              <textarea
                type='text'
                id='short-desc'
                name='short-desc'
                cols='30'
                rows='10'
                placeholder='Short description of your service'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='delivery-time'>Delivery Time(e.g. 3 days)</label>
              <input type='number' id='delivery-time' min={1} />
            </div>
            <div className='formGroup'>
              <label htmlFor='revision'>Revision Number</label>
              <input type='number' id='revision' />
            </div>
            <div className='formGroup'>
              <label htmlFor='features'>Add Features</label>
              <input type='text' placeholder='e.g. page design' />
              <input type='text' placeholder='e.g. file uploading' />
              <input type='text' placeholder='e.g. setting up a domain' />
              <input type='text' placeholder='e.g. hosting' />
            </div>
            <div className='formGroup'>
              <label htmlFor='price'>Price</label>
              <input type='number' id='price' name='price' min={1} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Add;
