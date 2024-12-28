import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.tsx';
import React from 'react';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
