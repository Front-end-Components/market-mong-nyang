import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import style from './Pagination.module.scss';

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <nav className={style.nav}>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <MdArrowBackIosNew />
      </button>
      {Array(numPages)
        .fill()
        .map((_, idx) => {
          return (
            <button key={idx + 1} onClick={() => setPage(idx + 1)} aria-current={page === idx + 1 ? 'page' : null}>
              {idx + 1}
            </button>
          );
        })}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <MdArrowForwardIos />
      </button>
    </nav>
  );
}
