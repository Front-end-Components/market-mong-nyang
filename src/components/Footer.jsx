
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import { RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill, RiGithubFill } from 'react-icons/ri';


export default function Footer() {
let date = new Date();
let year = date.getFullYear();

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.left}>
          <h3>마켓멍냥 고객센터</h3>
          <h2>8282-8282<span>공휴일 제외 오전 9시 - 오후 6시</span></h2>
          <div className={style.btnContent}>
            <span>카카오톡 문의</span><p>공휴일 제외 오전 9시 - 오후 6시</p>
          </div>
          <div className={style.btnContent}>
            <span>1:1 문의</span><p>365일<br/>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
          </div>
        </div>
        <div className={style.right}>
          <ul className={style.navbar}>
            <li><Link to="/">멍냥소개</Link></li>
            <li><Link to="/mypage/order">마이페이지</Link></li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          <p className={style.notice}>
            법인명 : 마켓멍냥 <span className={style.line}></span> 사업자등록번호 : 119-82-1234<br/>
            통신판매업 : 제 2022-서울강남-00001 호 <span className={style.line}></span> 개인정보보호책임자 : 7조 컴포넌트들<br/>
            주소 : 서울특별시 강남구 테헤란로 231, 11층 <span className={style.line}></span> 대표이사 : 7조 컴포넌트들<br/>
            입점문의 : 8282-8282 <span className={style.line}></span> 채용문의 : 8282-8282
          </p>
          <ul className={style.sns}>
            <li><RiInstagramFill size="30" title="인스타그램" color="rgb(95, 0, 128)" /></li>
            <li><RiFacebookBoxFill size="30" title="페이스북" color="rgb(95, 0, 128)" /></li>
            <li><RiYoutubeFill size="30" title="유투브" color="rgb(95, 0, 128)" /></li>
            <li><a href='https://github.com/Front-end-Components'><RiGithubFill size="30" title="github" color="rgb(95, 0, 128)" /></a></li>
          </ul>
        </div>
      </div>
      <p className={style.copy}>© {year}. Front-end Components All rights reserved.</p>
    </div>
  )
}