import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './screens/Home';
import ServicePage from './screens/Service';

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
    ],
  },
]);

export default router;