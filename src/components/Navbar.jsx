import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart2 } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { BiSearch } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import style from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { searchProduct } from '@/api/requests';
import { useDispatch } from 'react-redux';
import { requestLogout } from '@/api/userAPI';
import { setUserInit } from '@/store/userSlice';


export default function Header({ isLogin }) {
  const list = useSelector((state) => state.cart);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);

  const handleChange = e => {
    setValue(e.target.value)
  }
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct(value).then((res) => {
      if (res) {
        alert('상품 검색 완료');
        setSearch(res);
        console.log(res);
      } else {
        alert('상품 검색 실패');
      }
    });
  };
  console.log(search);  

  const displayName = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();

  const handleClickLogoutBtn = async () => {
    const isLogout = await requestLogout();
    if (isLogout) {
      localStorage.removeItem('token');
      dispatch(setUserInit());
      window.location.reload();
    }
  };


  return (
    <header className={style.userHeader}>
      {isLogin ? (
        <section className={style.service}>
          <p>
            <strong>{displayName}</strong>님, 안녕하세요.
          </p>
          <button type='button' onClick={handleClickLogoutBtn}>
            로그아웃
          </button>
        </section>
      ) : (
        <section className={style.service}>
          <Link to='/signup'>회원가입</Link>
          <Link to='/login'>로그인</Link>
        </section>
      )}
      <div className={style.search}>
        <Link to='/'>
          <img className={style.logo} src='/images/logo.png' alt='logo' />
          <h1 className={style.title}>마켓멍냥</h1>
        </Link>
        <div className={style.inputWrap}>
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <input
            id='search-input'
            className={style.searchInput}
            type='text'
            value={value}
            placeholder='검색어를 입력해 주세요'
            onChange={(e) => handleChange(e)}
            />
            <button
            type='submit'
            className={style.searchBtn}
            aria-label='submit'>
              <BiSearch size='24' color='rgb(95, 0, 128)' />
            </button>
          </form>
        </div>
        <div className={style.links}>
          <Link to='/mypage/like'>
            <VscHeart size='30' title='찜목록' />
          </Link>
          <Link to='/cart' className={style.cart}>
            <BsCart2 size='30' title='장바구니' />
            {
              list.length > 0 ? <p className={style.count}>{list.length}</p> : null
            }
          </Link>
          <Link to='/mypage/order'>
            <BsFillPersonFill
              size='30'
              title='마이페이지'
              color='rgb(95, 0, 128)'
            />
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          {/* <div className={style.hamberger}>
            <RxHamburgerMenu title='카테고리' />
            <Link to=''>카테고리</Link>
          </div> */}
          <li>
            <Link to='/products-food'>주식 / 간식</Link>
          </li>
          <li>
            <Link to='/products-care'>건강 / 케어</Link>
          </li>
          <li>
            <Link to='/products-living'>의류 / 리빙</Link>
          </li>
          <li>
            <Link to='/products-hygiene'>외출 / 위생</Link>
          </li>
          <li>
            <Link to='/admin'>관리자(임시)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
