import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add';
import Message from './pages/message/Message';
import Gig from './pages/gig/Gig';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Messages from './pages/messages/Messages';
import Gigs from './pages/gigs/Gigs';
import Orders from './pages/register/orders/Orders';
import Login from './pages/login/Login';

import SharedLayout from './components/sharedLayout/SharedLayout';

function App() {
  const router = createBrowserRouter([
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
          element: <MyGigs />,
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
          path: '',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
