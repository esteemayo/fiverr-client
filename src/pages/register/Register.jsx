import { useCallback, useState } from 'react';

import './Register.scss';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  img: '',
  country: '',
  isSeller: false,
  desc: '',
};

const Register = () => {
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <main className='register'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='left'>
            <h1>Create a new account</h1>
            <div className='formGroup'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='johndoe'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='email'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='********'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='********'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='file'>Profile Picture</label>
              <input type='file' id='file' accept='image/*' />
            </div>
            <div className='formGroup'>
              <label htmlFor='country'>Country</label>
              <input
                type='text'
                id='country'
                name='country'
                placeholder='USA'
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Register</button>
          </div>
          <div className='right'>
            <h1>I want to become a seller</h1>
            <div className='toggle'>
              <label htmlFor='isSeller'>Activate the seller account</label>
              <label htmlFor='' className='switch'>
                <input type='checkbox' id='isSeller' />
                <span className='slider round' />
              </label>
            </div>
            <div className='formGroup'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='phone'
                id='phone'
                name='phone'
                placeholder='+1 234 567 89'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='desc'>Description</label>
              <textarea
                type='text'
                id='desc'
                name='desc'
                cols='30'
                rows='10'
                placeholder='A short description of yourself'
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
