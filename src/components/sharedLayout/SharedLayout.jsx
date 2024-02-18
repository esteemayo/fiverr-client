import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default SharedLayout;
