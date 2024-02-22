import './Login.scss';

const Login = () => {
  return (
    <main className='login'>
      <div className='container'>
        <form >
          <h1>Sign in</h1>
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='johndoe' />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='johndoe@gmail.com' />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
