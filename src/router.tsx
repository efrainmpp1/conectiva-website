import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';
import Home from './screens/Home';
import ServicePage from './screens/Service';
import FeatureDetailPage from './screens/FeatureDetail';
import NotFound from './screens/NotFound';
import { featureRoutes } from './routes/featureRoutes';
import AboutPage from './screens/About';
import PlansPage from './screens/Plans';
import ContactPage from './screens/Contact';
import LoginPage from './screens/Login';
import RegisterPage from './screens/Register';
import EditalPage from './screens/Agent/Edital';
import ProspeccaoPage from './screens/Agent/Prospeccao';
import AuthGuard from './components/AuthGuard';
      ...featureRoutes.map((fr) => ({
            path: 'agent/prospeccao',
            element: <ProspeccaoPage />,
            path: 'dashboard',
            element: <DashboardLayout />,
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
                path: 'analise-edital',
                element: <EditalPage />,
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
            path: 'agent',
            element: <Outlet />,
            children: [
              {
                path: 'prospeccao',
                element: <ProspeccaoPage />,
              },
            ],
              },
            ],
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
        path: 'agent/prospeccao',
        element: (
          <ProtectedRoute>
            <ProspeccaoPage />
          </ProtectedRoute>
        ),
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
            path: 'analise-edital',
            element: <EditalPage />,
          },
          {
            path: 'prospeccao-inteligente',
            element: <ProspeccaoInteligentePage />,
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
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
