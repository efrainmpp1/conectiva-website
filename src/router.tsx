import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './screens/Home';
import ServicePage from './screens/Service';
import AboutPage from './screens/About';
import PlansPage from './screens/Plans';
import ContactPage from './screens/Contact';
import LoginPage from './screens/Login';
import RegisterPage from './screens/Register';
import DashboardPage from './screens/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'service/:id',
        element: <ServicePage />,
      },
      {
        path: 'sobre',
        element: <AboutPage />,
      },
      {
        path: 'planos',
        element: <PlansPage />,
      },
      {
        path: 'contato',
        element: <ContactPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'cadastro',
        element: <RegisterPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;