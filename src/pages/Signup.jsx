import MypageHeader from "@/components/MypageHeader";
import React, { useState } from "react";
import { signup } from "../api/requests";
import Button from "../components/Button";
import style from "./Signup.module.scss";

export default function Signup() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const { email, password, displayName } = inputs;
  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [checkPassword, setCheckPassword] = useState("");
  const onCheckPassword = (event) => {
    setCheckPassword(event.currentTarget.value);
  };

  // TEST
  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== checkPassword) {
      return alert("비밀번호와 비밀번호 확인이 다릅니다.");
    }
    const test = {
      // email: "test@test.com",
      // password: "1q2w3e4r",
      // displayName: "test",
      email: email,
      password: password,
      displayName: displayName,
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
            name="email"
            type="email"
            value={email}
            className={style.input}
            placeholder="이메일을 입력해 주세요"
            onChange={onChange}
          />
          <Button name="중복확인" />
        </div>
        <div className={style.div}>
          <label htmlFor="password" className={style.label}>
            비밀번호<span className={style.span}>*</span>
          </label>
          <input
            name="password"
            type="password"
            value={password}
            className={style.input}
            placeholder="비밀번호를 입력해 주세요"
            onChange={onChange}
          />
        </div>
        <div className={style.div}>
          <label htmlFor="password-check" className={style.label}>
            비밀번호 확인<span className={style.span}>*</span>
          </label>
          <input
            name="checkPassword"
            type="password"
            value={checkPassword}
            className={style.input}
            placeholder="비밀번호를 한번 더 입력해 주세요"
            onChange={onCheckPassword}
          />
        </div>
        <div className={style.div}>
          <label htmlFor="name" className={style.label}>
            이름<span className={style.span}>*</span>
          </label>
          <input
            name="displayName"
            type="text"
            value={displayName}
            className={style.input}
            placeholder="이름을 입력해 주세요"
            onChange={onChange}
          />
        </div>
        <div className={style.btn}>
          <Button name="가입하기" onClick={onSubmit} isPurple={true} />
        </div>
      </form>
    </div>
  );
}
