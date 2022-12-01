import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  // if (!user || (requireAdmin && !user.isAdmin)) {
  //   return <Navigate to='/' replace />;
  // }
  return children;
}
