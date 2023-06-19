import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

//замість component: Component можна children
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { shouldRedirect } = useAuth();

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
