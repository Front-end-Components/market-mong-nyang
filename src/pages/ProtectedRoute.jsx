import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  let user = useSelector((state) => {
    return state.user;
  });

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/login' replace />;
  }
  return children;
}
