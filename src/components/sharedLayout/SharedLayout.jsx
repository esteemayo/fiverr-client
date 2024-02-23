import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import ToastProvider from '../../providers/ToastProvider';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <ToastProvider />
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default SharedLayout;
