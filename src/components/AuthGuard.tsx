import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../libs/context/AuthContext';
import LoadingScreen from './LoadingScreen';

interface Props {
  children: JSX.Element;
}

const AuthGuard = ({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
