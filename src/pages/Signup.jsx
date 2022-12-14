import MypageHeader from "@/components/MypageHeader";
import React from "react";
import { signup } from "../api/requests";
import Button from "../components/Button";
import style from "./Signup.module.scss";

export default function Signup() {
  // TEST
  const onSubmit = (event) => {
    event.preventDefault();
    const test = {
      email: "test@test.com",
      password: "1q2w3e4r",
      displayName: "test",
    };
    const res = signup(test);
    console.log(res);
  };

  return (
    <div className={style.signup}>
      <div className={style.header}>
        <MypageHeader name={"회원가입"} />
      </div>
      <form className={style.form}>
        <div className={style.div}>
          <label htmlFor="email" className={style.label}>
            이메일<span className={style.span}>*</span>
          </label>
          <input
            type="email"
            className={style.input}
            placeholder="이메일을 입력해 주세요"
          />
          <Button name="중복확인" />
        </div>
        <div className={style.div}>
          <label htmlFor="password" className={style.label}>
            비밀번호<span className={style.span}>*</span>
          </label>
          <input
            type="password"
            className={style.input}
            placeholder="비밀번호를 입력해 주세요"
          />
        </div>
        <div className={style.div}>
          <label htmlFor="password-check" className={style.label}>
            비밀번호 확인<span className={style.span}>*</span>
          </label>
          <input
            type="password"
            className={style.input}
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
        </div>
        <div className={style.div}>
          <label htmlFor="name" className={style.label}>
            이름<span className={style.span}>*</span>
          </label>
          <input
            type="text"
            className={style.input}
            placeholder="이름을 입력해 주세요"
          />
        </div>
        <div className={style.btn}>
          <Button name="가입하기" onClick={onSubmit} isPurple={true} />
        </div>
      </form>
    </div>
  );
}
