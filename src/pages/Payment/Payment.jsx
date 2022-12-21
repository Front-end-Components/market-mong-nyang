import React, { useEffect, useState } from 'react';
import Account from '@/components/Mypage/Account/Account';
import Button from '@/components/common/Button';
import { getListAccount, checkAuth } from '@/api/requests';
import { formatPrice } from '@/utils/formats';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import { Pagination } from 'swiper';
import 'swiper/scss'; //basic
import 'swiper/scss/pagination';
import style from './Payment.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentItem from '@/components/Payment/PaymentItem';
import { showLoading, hideLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import { deleteItem } from '@/store/cartSlice';
import { Modal } from '@/components/Modal';

export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [account, setAccounts] = useState([]);
  const [accounts, setAccount] = useState([]);
  const [payAuth, setPayAuth] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');

  let { state } = useLocation();

  let totalPrice = 0;
  if (state.length) {
    state.map((item) => {
      totalPrice += item.price * item.count;
    });
  } else {
    state = [state];
    totalPrice = state[0].price * state[0].count;
  }

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getListAccount();
        setAccounts(data);
        setAccount(data.accounts[0]);
      } catch {
        alert('등록된 계좌가 없습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  const accountId = accounts.id;

  useEffect(() => {
    async function postData() {
      try {
        dispatch(showLoading());
        const payData = await checkAuth();
        setPayAuth(payData);
      } catch {
        alert('등록된 정보가 없습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
    postData();
  }, []);

  return (
    <div className={style.container}>
      <h2>주문서</h2>
      <div className={style.orderForm}>
        <h3>주문 상품</h3>
        <div className={style.inner}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={false} // 루프 슬라이드
            spaceBetween={10} // 슬라이드간의 간격
            slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
            style={{
              '--swiper-pagination-color': '#43007c',
            }}
          >
            {state.map((item) => {
              return (
                <SwiperSlide
                  style={{
                    display: 'flex',
                  }}
                >
                  <div className={style.left}>
                    <span className={style.txt}>상품 이름</span>
                    <span className={style.txt}>상품 가격</span>
                    <span className={style.txt}>상품 개수</span>
                  </div>
                  <div className={style.right}>
                    <span className={style.txt}>{item.title}</span>
                    <span className={style.txt}>{formatPrice(item.price)}원</span>
                    <span className={style.txt}>{item.count}개</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className={style.orderForm}>
        <h3>주문자 정보</h3>
        <div className={style.inner}>
          <div className={style.left}>
            <span className={style.txt}>보내는 분</span>
            <span className={style.txt}>이메일</span>
          </div>
          <div className={style.right}>
            <span className={style.txt}>{payAuth.displayName}</span>
            <span className={style.txt}>{payAuth.email}</span>
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
              <span className={style.title}>계좌 간편결제</span>
              {Array.isArray(account.accounts) ? (
                <p className={style.totalBalance}>
                  총 계좌 잔액: <span>{formatPrice(account.totalBalance)}</span>
                </p>
              ) : null}
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                loop={false} // 루프 슬라이드
                spaceBetween={10} // 슬라이드간의 간격
                slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
                style={{
                  '--swiper-pagination-color': '#43007c',
                }}
              >
                {Array.isArray(account.accounts) ? (
                  account.accounts.map((item, idx) => {
                    return (
                      <SwiperSlide>
                        <Account className={style.slide} item={item} key={idx} />
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <div className={style.noList}>
                    <h4>등록된 계좌가 없습니다.</h4>
                  </div>
                )}
              </Swiper>
            </div>
          </div>
          <ul class={style.notice}>
            <li>※ 은행 당 하나의 계좌만 허용되며, 계좌번호는 일부만 노출됩니다.</li>
            <li>※ 등록된 계좌가 안보이면 계좌를 등록해주세요.</li>
            <li>
              ※ 등록 가능한 은행은 국민, 신한, 우리, 하나, 케이, 카카오페이, 농협만 가능합니다.
            </li>
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
              <span className={style.txt}>{formatPrice(totalPrice)} 원</span>
              <span className={style.txt}>무료</span>
              <span className={style.txt}>0 원</span>
              <span className={style.txt}>
                <p>{formatPrice(totalPrice)}</p>원
              </span>
            </div>
            <p>
              <span>무료</span>멍냥 주인 무료배송!
            </p>
          </div>
          {modal ? <Modal modal={modal} setModal={setModal} modalText={modalText} /> : null}
          <Button
            name={'결제하기'}
            isPurple={true}
            onClick={() => {
              if (window.confirm('결제하시겠습니까?')) {
                try {
                  PaymentItem(state, accountId);
                  state.map((item) => {
                    dispatch(deleteItem(item.id));
                  });
                } catch (error) {
                  setModal(true);
                  setModalText('잔액이 부족합니다.');
                  window.location.replace('/mypage/account');
                } finally {
                  setModal(true);
                  setModalText('결제가 완료되었습니다.');
                  navigate('/mypage/order', { state: state.count });
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
