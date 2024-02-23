import { useCallback, useState } from 'react';

import { login } from '../../services/authService';

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

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const res = await login({ ...data });
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  }, []);

  const { username, password } = data;

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
                name='username'
                value={username}
                placeholder='johndoe'
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                placeholder='********'
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Login</button>
            <span>{error && error}</span>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
