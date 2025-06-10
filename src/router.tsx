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
import EditalPage from './screens/Agent/Edital';
import ProspeccaoPage from './screens/Agent/Prospeccao';
import DashboardLayout from './screens/Dashboard';
import DashboardHome from './screens/Dashboard/Home';
import AgentPage from './screens/Dashboard/Agent';
import HistoryPage from './screens/Dashboard/History';
import CoinsPage from './screens/Dashboard/Coins';
import ProfilePage from './screens/Dashboard/Profile';
import ProtectedRoute from './libs/components/ProtectedRoute';

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
        path: 'agent/edital',
        element: <EditalPage />,
      },
      {
        path: 'agent/prospeccao',
        element: <ProspeccaoPage />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: 'agente',
            element: <AgentPage />,
          },
          {
            path: 'historico',
            element: <HistoryPage />,
          },
          {
            path: 'moedas',
            element: <CoinsPage />,
          },
          {
            path: 'perfil',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default router;