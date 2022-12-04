import React from 'react';
import MypageHeader from '../components/MypageHeader';
import { VscHeart } from 'react-icons/vsc';
import styled from '@emotion/styled';

export default function MyLike() {
  return (
    <Container>
      <MypageHeader name={'찜한 상품'} />
      <Content>
        <VscHeart size='60' title='찜' color='lightgray' />
        <p>찜한 상품이 없습니다.</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 557px;
  p {
    color: ${({ theme }) => theme.color.darkgray};
  }
`;
