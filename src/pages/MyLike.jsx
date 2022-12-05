import React from 'react';
import MypageHeader from '../components/MypageHeader';
import { VscHeart } from 'react-icons/vsc';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from './../style/theme';

export default function MyLike() {
  return (
    <div css={likeStyle}>
      <MypageHeader name={'찜한 상품'} />
      <div css={contentStyle}>
        <VscHeart size='60' title='찜' color='lightgray' />
        <p>찜한 상품이 없습니다.</p>
      </div>
    </div>
  );
}

const likeStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 557px;
  p {
    color: ${theme.color.gray};
  }
`;
