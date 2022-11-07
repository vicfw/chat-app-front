import { createBrowserRouter } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Chat />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default router;
