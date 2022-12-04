import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <Header>
      <Link to='/admin'>
        <Image src={'/images/logo.png'} alt={'logo'} />
        <h1>마켓멍냥 Admin Page</h1>
      </Link>
      <button>Logout</button>
    </Header>
  );
}

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow.default};
  justify-content: space-between;
  padding: 0 3rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
    img {
      width: 40px;
    }
    h1 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.purple};
    }
  }
  button {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
