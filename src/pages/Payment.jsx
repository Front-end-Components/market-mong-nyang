import React from 'react';
import Account from '@/components/Account';
import style from './Payment.module.scss';

export default function Payment() {
  return (
  <div className={style.container}>
    <h2>주문서</h2>
    <div className={style.orderForm}>
      <h3>주문 상품</h3>
      <div>상품 이름</div>
    </div>

    <div className={style.orderForm}>
      <h3>주문자 정보</h3>
      <div className={style.inner}>
        <div className={style.left}>
          <span className={style.txt}>보내는 분</span>
          <span className={style.txt}>이메일</span>
        </div>
        <div className={style.right}>
          <span className={style.txt}>test</span>
          <span className={style.txt}>test@test.com</span>
        </div>
      </div>
    </div>

    <div className={style.paymentContent}>
      <div className={style.orderForm}>
        <h3>결제 수단</h3>
        <div className={style.inner}>
          <div className={style.left}>
            <span className={style.txt}>결제수단 선택</span>
          </div>
          <div className={style.right}>
            <Account />
          </div>
        </div>
        <ul class={style.notice}>
          <li>※ 은행 당 하나의 계좌만 허용되며, 계좌번호는 일부만 노출됩니다.</li>
          <li>※ 등록된 계좌가 안보이면 계좌를 등록해주세요.</li>
          <li>※ 등록 가능한 은행은 국민, 신한, 우리, 하나, 케이, 카카오페이, 농협만 가능합니다.</li>
        </ul>
      </div>

      <div className={style.payForm}>
        <h3>결제 금액</h3>
        <div className={style.inner}>
          <div className={style.left}>
            <span className={style.txt}>주문금액</span>
            <span className={style.txt}>배송비</span>
            <span className={style.txt}>상품 할인</span>
            <span className={style.txt}>최종결제금액</span>
          </div>
          <div className={style.right}>
            <span className={style.txt}>8000 원</span>
            <span className={style.txt}>무료</span>
            <span className={style.txt}>0 원</span>
            <span className={style.txt}><p>8000</p>원</span>
          </div>
          <p><span>무료</span>멍냥 주인 무료배송!</p>
        </div>
      </div>
    </div>
  </div>
  )
}
