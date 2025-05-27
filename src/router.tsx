import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './screens/Home';
import ServicePage from './screens/Service';
import AboutPage from './screens/About';
import PlansPage from './screens/Plans';
import ContactPage from './screens/Contact';

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
    ],
  },
]);

export default router;