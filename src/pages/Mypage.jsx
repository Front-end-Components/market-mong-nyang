import React from 'react';
import { Outlet } from 'react-router-dom';
import MypageNavbar from '../components/MypageNavbar';
import styled from '@emotion/styled';

export default function Mypage() {
  return (
    <Container>
      <MypageNavbar />
      <OutletWrap>
        <Outlet />
      </OutletWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: ${({ theme }) => theme.size.widthInner};
  margin-top: 2rem;
`;

const OutletWrap = styled.div`
  width: 80%;
  margin-left: 2rem;
`;
