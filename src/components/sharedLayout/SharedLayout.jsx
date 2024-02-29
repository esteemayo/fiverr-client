import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ToasterProvider from '../../providers/ToasterProvider';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <ToasterProvider />
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default SharedLayout;
