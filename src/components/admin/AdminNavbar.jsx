import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
  return (
    <Nav>
      <Link to='/admin'> 대시 보드</Link>
      <Link to='/admin/products'> 상품 관리</Link>
      <Link to='/admin/order'> 거래 내역 관리</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 20vw;
  height: 90vh;
  background-color: ${({ theme }) => theme.color.purple};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 2rem;
  box-sizing: border-box;
  padding: 2rem;
  a {
    color: ${({ theme }) => theme.color.white};
    font-weight: 500;
  }
`;
