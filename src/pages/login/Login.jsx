import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import { login } from '../../services/authService';
import { setToStorage, userKey } from '../../utils';

import './Login.scss';

const initialState = {
  username: '',
  password: '',
};

const Login = () => {
  const usernameRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await login({ ...data });

        setToStorage(userKey, res.data.details);
        navigate('/');
      } catch (err) {
        setError(err.response.data.message);
        console.log(err.response.data.message);
      }
    },
    [data, navigate, setToStorage]
  );

  useEffect(() => {
    usernameRef.current.focus();
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
                name='username'
                ref={usernameRef}
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
