import { Navigate } from 'react-router-dom';

import { getCurrentUser } from './getCurrentUser';

const ProtectedRoute = ({ children }) => {
  const currentUser = getCurrentUser();

  return currentUser ? <Navigate to='/' /> : children;
};

export default ProtectedRoute;
