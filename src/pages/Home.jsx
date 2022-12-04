import React from 'react';
import styled from '@emotion/styled';
import Banner from '../components/Banner';
import Products from '../components/Products';

export default function Home() {
  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  );
}

const Container = styled.div`
  width: ${({ theme }) => theme.size.widthInner};
`;
