import { useCallback, useState } from 'react';

import './Login.scss';

const initialState = {
  username: '',
  password: '',
};

const Login = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <main className='login'>
      <div className='container'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className='formGroup'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                placeholder='johndoe'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='johndoe@gmail.com'
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
