import { Navigate } from 'react-router-dom';

import { getCurrentUser } from './getCurrentUser';

const AuthRoute = ({ children }) => {
  const currentUser = getCurrentUser();

  return currentUser ? children : <Navigate to='/login' />;
};

export default AuthRoute;
