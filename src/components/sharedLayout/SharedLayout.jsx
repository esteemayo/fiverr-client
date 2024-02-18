import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const SharedLayout = () => {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default SharedLayout;
