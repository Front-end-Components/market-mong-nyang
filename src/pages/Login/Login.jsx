import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/requests';
import Button from '../../components/Button';
import style from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAdmin, setUserInfo } from '@/store/userSlice';
import { requestLogin } from '@/api/userAPI';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    const loginData = await requestLogin({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    if (loginData) {
      if (loginData.email === process.env.REACT_APP_ADMIN_EMAIL) {
        dispatch(setIsAdmin({ isAdmin: true }));
        navigate('/admin');
        return;
      }
      dispatch(setUserInfo({ displayName: loginData.displayName }));
      navigate('/');
    } else alert('잘못된 아이디 혹은 비밀번호입니다.');
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     alert("잘못된 접근입니다.");
  //     navigate("/");
  //   }
  // }, []);

  return (
    <section className={style.login}>
      <h1>로그인</h1>
      <section className={style.login_container}>
        <form id="login" onSubmit={handleSubmitLogin} className={style.login_container_inputForm}>
          <input
            type="text"
            name="email"
            className={style.input}
            placeholder="이메일을 입력해 주세요"
          />
          <input
            type="password"
            name="password"
            className={style.input}
            placeholder="비밀번호를 입력해 주세요"
          />
          <section className={style.login_container_buttonSection}>
            <Button
              type="submit"
              name="로그인"
              form="login"
              className={style.loginButton}
              isPurple={true}
            />

            <Button name="회원가입" onClick={goToSignUp} />
          </section>
        </form>
      </section>
    </section>
  );
}
