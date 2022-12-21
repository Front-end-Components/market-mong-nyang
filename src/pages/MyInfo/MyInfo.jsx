import Button from '@/components/Button';
import MypageHeader from '@/components/Mypage/MypageHeader';
import React, { useEffect, useState } from 'react';
import style from './MyInfo.module.scss';
import { useSelector } from 'react-redux';
import { requestLogin } from '@/api/userAPI';
import MyInfoModify from './MyInfoForm';
import { Navigate } from 'react-router-dom';

export default function MyInfo() {
  const email = useSelector((state) => state.user.email);
  const [passwordConfirm, setPasswordConfirm] = useState(false);

  const handleSubmitPasswordConfirm = async (event) => {
    event.preventDefault();
    const passwordCheckData = {
      email,
      password: event.target.password.value,
    };
    const isConfirmPassword = await requestLogin(passwordCheckData);
    if (isConfirmPassword) setPasswordConfirm(true);
    else alert('비밀번호를 확인해주세요.');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('잘못된 접근입니다.');
      Navigate('/');
    }
  }, []);

  return !passwordConfirm ? (
    <section className={style.myInfo}>
      <MypageHeader name={'개인 정보 수정'} />
      <section className={style.myInfo_container}>
        <h4>비밀번호 재확인</h4>
        <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</p>

        <form className={style.myInfo_container_inputForm} onSubmit={handleSubmitPasswordConfirm}>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            className={style.input}
          />
          <section className={style.myInfo_container_buttonSection}>
            <Button type="submit" name="확인" form="login" isPurple={true} width="50%" />
          </section>
        </form>
      </section>
    </section>
  ) : (
    <MyInfoModify />
  );
}
