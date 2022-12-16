import { InfoList } from "@/components/Signup/infoList";
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
  const handleInfoInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [checkPassword, setCheckPassword] = useState("");
  const handlePasswordCheckInput = (event) => {
    setCheckPassword(event.currentTarget.value);
  };

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
        <h1>회원가입</h1>
      </div>
      <form className={style.form}>
        <InfoList
          label={"이메일"}
          input={{
            name: "email",
            value: inputs.email,
            onChange: handleInfoInputs,
            placeholder: "이메일을 입력해 주세요",
          }}
          button={{
            name: "중복확인",
            onClick: () => {},
          }}
        />
        <InfoList
          label={"비밀번호"}
          input={{
            name: "password",
            value: inputs.password,
            type: "password",
            onChange: handleInfoInputs,
            placeholder: "비밀번호를 입력해 주세요",
          }}
        />
        <InfoList
          label={"비밀번호 확인"}
          input={{
            name: "checkPassword",
            value: checkPassword,
            type: "password",
            onChange: handlePasswordCheckInput,
            placeholder: "비밀번호를 다시 입력해 주세요",
          }}
        />
        <InfoList
          label={"이름"}
          input={{
            name: "displayName",
            value: inputs.displayName,
            onChange: handleInfoInputs,
            placeholder: "이름을 입력해 주세요",
          }}
        />
        <section className={style.btn}>
          <Button name="가입하기" onClick={onSubmit} isPurple={true} />
        </section>
      </form>
    </div>
  );
}
