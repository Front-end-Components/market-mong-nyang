import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  let user = useSelector((state) => {
    return state.user;
  });

  if (!user || (requireAdmin && !user.isAdmin)) {
    alert('접근 권한이 없습니다.\n로그인 페이지로 이동합니다.');
    return <Navigate to='/login' replace />;
  }
  return children;
}
