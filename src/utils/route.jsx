import { createBrowserRouter } from 'react-router-dom';

import MyGigs from '../pages/myGigs/MyGigs';
import Pay from '../pages/pay/Pay';
import Orders from '../pages/orders/Orders';
import Add from '../pages/add/Add';
import Message from '../pages/message/Message';
import Gig from '../pages/gig/Gig';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import Messages from '../pages/messages/Messages';
import NotFound from '../pages/notFound/NotFound';
import Gigs from '../pages/gigs/Gigs';
import Success from '../pages/success/Success';
import Login from '../pages/login/Login';

import AuthRoute from './AuthRoute';
import SharedLayout from '../components/sharedLayout/SharedLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'gigs',
        element: <Gigs />,
      },
      {
        path: 'gig/:id',
        element: <Gig />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'mygigs',
        element: <AuthRoute>
          <MyGigs />
        </AuthRoute>,
      },
      {
        path: 'add',
        element: <Add />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'message/:id',
        element: <Message />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'pay/:id',
        element: <Pay />,
      },
      {
        path: 'success',
        element: <Success />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
