import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  let user = useSelector((state) => state.user);

  if (requireAdmin) {
    if (user.isAdmin) return children;
    else {
      alert('접근 권한이 없습니다.\n메인 페이지로 이동합니다.');
      return <Navigate to="/" replace />;
    }
  } else if (!user.email) {
    alert('회원 전용 페이지입니다.\n로그인 페이지로 이동합니다.');
    return <Navigate to="/login" replace />;
  }
  return children;
}
