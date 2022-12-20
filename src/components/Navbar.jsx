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
import { setIsAdmin, setUserInit } from '@/store/userSlice';
import { hideLoading, showLoading } from '@/store/loadingSlice';

export default function Header({ isLogin }) {
  const list = useSelector((state) => state.cart);
  const tags = ['주식', '간식', '건강', '케어', '의류', '리빙', '외출', '위생'];

  // 단어 검색어
  const [searchText, setSearchText] = useState('');
  // 태그 검색어
  const [searchTag, setSearchTag] = useState('');
  // 검색 값
  const [value, setValue] = useState('');
  // 검색 결과
  const [search, setSearch] = useState([]);

  const handleChange = (event) => {
    let { value } = event.target;
    setValue(value);
    const valArr = value.split(' ');
    console.log(valArr);
    // 검색어가 하나일 경우
    if (valArr.length === 1 && tags.indexOf(value) !== -1) {
      const tagsIndex = tags.indexOf(value)
      console.log(value + '태그를 가지고 있다!')
      setSearchTag(tags[tagsIndex]);
      setSearchText('');
    } else if (valArr.length === 1 && tags.indexOf(value) === -1) {
      setSearchText(value);
      setSearchTag('');
    }
  }
  console.log(value)
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(searchText === '' && searchTag !== '') {
      try {
        dispatch(showLoading());
        const data = await searchProduct({ "searchTags": [searchTag] });
        alert('검색 완료')
        setSearch(data);
        console.log(data);
        console.log(search);
        dispatch(hideLoading());
      } catch {
        alert('상품 목록을 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    } else if(searchText !== '' && searchTag === '') {
      try {
        dispatch(showLoading());
        const data = await searchProduct({ "searchText": searchText });
        alert('검색 완료')
        setSearch(data);
        console.log(data);
        console.log(search);
        dispatch(hideLoading());
      } catch {
        alert('상품 목록을 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    } else if( searchText!== '' && searchTag!== '') {
      try {
        dispatch(showLoading());
        const data = await searchProduct({ "searchText": searchText, "searchTags": [searchTag] });
        alert('검색 완료')
        setSearch(data);
        console.log(data);
        console.log(search);
        dispatch(hideLoading());
      } catch {
        alert('상품 목록을 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
  }

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
          <button type="button" onClick={handleClickLogoutBtn}>
            로그아웃
          </button>
        </section>
      ) : (
        <section className={style.service}>
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
        </section>
      )}
      <div className={style.search}>
        <Link to="/">
          <img className={style.logo} src="/images/logo.png" alt="logo" />
          <h1 className={style.title}>마켓멍냥</h1>
        </Link>
        <div className={style.inputWrap}>
          <form onSubmit={handleSubmit}>
            <input
            id='search-input'
            className={style.searchInput}
            type='text'
            value={value}
            placeholder='검색어를 입력해 주세요'
            onChange={(e) => handleChange(e)}
            />
            <button className={style.searchBtn} aria-label="submit">
              <BiSearch size="24" color="rgb(95, 0, 128)" />
            </button>
          </form>
        </div>
        <div className={style.links}>
          <Link to="/mypage/like">
            <VscHeart size="30" title="찜목록" />
          </Link>
          <Link to="/cart" className={style.cart}>
            <BsCart2 size="30" title="장바구니" />
            {list.length > 0 ? <p className={style.count}>{list.length}</p> : null}
          </Link>
          <Link to="/mypage/order">
            <BsFillPersonFill size="30" title="마이페이지" color="rgb(95, 0, 128)" />
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/products-food">주식 / 간식</Link>
          </li>
          <li>
            <Link to="/products-care">건강 / 케어</Link>
          </li>
          <li>
            <Link to="/products-living">의류 / 리빙</Link>
          </li>
          <li>
            <Link to="/products-hygiene">외출 / 위생</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
