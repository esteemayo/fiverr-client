import './Register.scss';

const Register = () => {
  return (
    <main className='register'>
      <div className='container'>
        <form>
          <div className='left'>
            <h1>Create a new account</h1>
            <div className='formGroup'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='johndoe'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' placeholder='email' />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='********'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='confirmPassword'>Confirm password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='********'
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='file'>Profile picture</label>
              <input type='file' id='file' accept='image/*' />
            </div>
            <div className='formGroup'>
              <label htmlFor='country'>country</label>
              <input
                type='text'
                id='country'
                name='country'
                placeholder='USA'
              />
            </div>
            <button type='submit'>Register</button>
          </div>
          <div className='right'>
            <h1>I want to become a seller</h1>
            <div className='formGroup'>
              <label htmlFor='isSeller'>Activate the seller account</label>
              <input type='radio' id='isSeller' />
            </div>
            <div className='formGroup'>
              <label htmlFor='phone'>Phone number</label>
              <input
                type='phone'
                id='phone'
                name='phone'
                placeholder='+1 234 567 89'
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
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
