// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../api/requests";
// import Button from "../components/Button";
// import style from "./Login.module.scss";
// import { Link } from "react-router-dom";

// export default function Login() {
//   // TEST
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const test = {
//       email: "test@naver.com",
//       password: "1q2w3e4r",
//     };
//     login(test);
//   };

//   return (
//     <div className={style.login}>
//       <h1>로그인</h1>
//       <div className={style.container}>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             className={style.input}
//             placeholder="이메일을 입력해 주세요"
//           />
//           <input
//             type="password"
//             className={style.input}
//             placeholder="비밀번호를 입력해 주세요"
//           />
//         </form>
//         <div className={style.btn}>
//           <Button name="로그인" onClick={handleSubmit} isPurple={true}></Button>
//           <Link to="/signup">
//             <Button name="회원가입"></Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/requests";
import Button from "../components/Button";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  // TEST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = {
      email: "test@naver.com",
      password: "1q2w3e4r",
    };
    login(test);
  };

  return (
    <section className={style.login}>
      <h1>로그인</h1>
      <form className={style.login_inputContainer} onSubmit={handleSubmit}>
        <input
          type="email"
          className={style.login_inputContainer_input}
          placeholder="이메일을 입력해 주세요"
        />
        <input
          type="password"
          className={style.login_inputContainer_input}
          placeholder="비밀번호를 입력해 주세요"
        />
      </form>
      <section className={style.login_findContainer}>
        <button>아이디 찾기</button>
        <button>비밀번호 찾기</button>
      </section>
      <section className={style.login_buttonContainer}>
        <Button name="로그인" onClick={handleSubmit} isPurple={true}></Button>
        <Link to="/signup">
          <Button name="회원가입" />
        </Link>
      </section>
    </section>
  );
}
