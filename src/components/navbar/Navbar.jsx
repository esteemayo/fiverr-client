const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
