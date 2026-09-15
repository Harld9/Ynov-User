import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from './App.tsx';
import UserList from './pages/UserList.tsx';
import { Outlet } from 'react-router';
import Header from './components/Header.tsx'
import User from './pages/User.tsx'
import Recipe from './pages/Recipe.tsx'
import Connexion from './pages/Connexion.tsx'


const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>


)



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: '/',
      element: <App />,
    },
    {
      path: '/userlist',
      element: <UserList />,
    },
    {
      path: '/user/:id',
      element: <User />,
    },
    {
      path: '/recipe/:id',
      element: <Recipe />,
    },
    {
      path: '/connexion',
      element: <Connexion />,
    }

    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);