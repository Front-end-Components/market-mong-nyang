import React from 'react';
import styled from '@emotion/styled';

export default function MypageHeader({ name }) {
  return (
    <Header>
      <h1>{name}</h1>
    </Header>
  );
}

const Header = styled.div`
  border-bottom: 2px solid rgb(51, 51, 51);
  padding-bottom: 2rem;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    color: rgb(51, 51, 51);
  }
`;
