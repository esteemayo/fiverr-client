import { useCallback, useMemo, useReducer, useState } from 'react';

import { upload } from '../../utils/upload';
import { INITIAL_STATE, gigReducer } from '../../reducers/gigReducer';

import './Add.scss';

const Add = () => {
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState(undefined);
  const [singleFile, setSingleFile] = useState(undefined);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = useCallback(
    ({ target: input }) => {
      const { name, value } = input;

      dispatch({
        type: 'CHANGE_INPUT',
        payload: {
          name,
          value,
        },
      });
    },
    [dispatch]
  );

  const handleFeature = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: 'ADD_FEATURES',
        payload: e.target[0].value,
      });

      e.target[0].value = '';
    },
    [dispatch]
  );

  const handleUploads = useCallback(async () => {
    setUploading(true);

    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );

      dispatch({ type: 'ADD_IMAGES', payload: { cover, images } });
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  }, [dispatch, files, singleFile, upload]);

  const uploadLabel = useMemo(() => {
    return uploading ? 'Uploading' : 'Upload';
  }, []);

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
                name='title'
                placeholder="e.g. I will do something I'm really good at"
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='category'>Category</label>
              <select name='category' id='category' onChange={handleChange}>
                <option value='design'>Design</option>
                <option value='web'>Web Development</option>
                <option value='animation'>Animation</option>
                <option value='music'>Music</option>
              </select>
            </div>
            <div className='images'>
              <div className='imagesInputs'>
                <div className='formGroup'>
                  <label htmlFor='file'>Cover Image</label>
                  <input
                    type='file'
                    id='file'
                    accept='image/*'
                    onChange={(e) => setSingleFile(e.target.files[0])}
                  />
                </div>
                <div className='formGroup'>
                  <label htmlFor='images'>upload Images</label>
                  <input
                    type='file'
                    id='images'
                    accept='image/*'
                    onChange={(e) => setFiles(e.target.files)}
                    multiple
                  />
                </div>
              </div>
              <button disabled={uploading} onClick={handleUploads}>
                {uploadLabel}
              </button>
            </div>
            <div className='formGroup'>
              <label htmlFor='desc'>Description</label>
              <textarea
                id='desc'
                name='desc'
                cols='30'
                rows='10'
                placeholder='Brief descriptions to introduce your service to customers'
                onChange={handleChange}
              />
            </div>
            <button>Create</button>
          </div>
          <div className='right'>
            <div className='formGroup'>
              <label htmlFor='shortTitle'>Short Title</label>
              <input
                type='text'
                id='shortTitle'
                name='shortTitle'
                placeholder='e.g. One page web design'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='shortDesc'>Short Description</label>
              <textarea
                type='text'
                id='shortDesc'
                name='shortDesc'
                cols='30'
                rows='10'
                placeholder='Short description of your service'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='deliveryTime'>Delivery Time(e.g. 3 days)</label>
              <input
                type='number'
                id='deliveryTime'
                name='deliveryTime'
                min={1}
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='revisionNumber'>Revision Number</label>
              <input
                type='number'
                id='revisionNumber'
                name='revisionNumber'
                onChange={handleChange}
              />
            </div>
            <form className='add' onSubmit={handleFeature}>
              <div className='formGroup'>
                <label htmlFor='features'>Add Features</label>
                <input
                  type='text'
                  id='features'
                  name='features'
                  placeholder='e.g. page design'
                />
              </div>
              <button type='submit'>Add</button>
            </form>
            <div className='addedFeatures'>
              {state?.features?.map((feature) => {
                return (
                  <div key={feature} className='item'>
                    <button>
                      {feature}
                      <span>X</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className='formGroup'>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                id='price'
                name='price'
                min={1}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Add;
