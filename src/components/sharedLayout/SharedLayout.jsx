import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from './../footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
