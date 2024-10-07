import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home/:memberId',
    element: <Home />,
  },
  {
    path: '/mypage/:memberId',
    element: <Mypage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);
