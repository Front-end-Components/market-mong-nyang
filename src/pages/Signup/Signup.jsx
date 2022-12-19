import { requestSignup } from "@/api/userAPI";
import { InfoList } from "@/components/Signup/infoList";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom/dist";
import Button from "../../components/Button";
import style from "./Signup.module.scss";

const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024;

export default function Signup() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const [checkPassword, setCheckPassword] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [isConfirmEmail, setIsConfirmEmail] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isConfirmCheckPassword, setIsConfirmCheckPassword] = useState(false);

  const { email, password, displayName } = inputs;

  const handleChangeInfoInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleChangeCheckPassword = (event) => {
    setCheckPassword(event.currentTarget.value);
  };

  const handleChangeProfileImg = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];

      if (!isCheckProfileSize(file.size)) return;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setProfileImg(reader.result);
      };
    }
  };

  const isCheckProfileSize = (size) => {
    if (size > MAX_PROFILE_IMAGE_SIZE) {
      alert("이미지 사이즈는 최대 1MB입니다.");
      return false;
    }
    return true;
  };

  const handleConfirmEmail = useCallback(() => {
    if (email.length > 0) setIsConfirmEmail(true);
    else setIsConfirmEmail(false);
  }, [email]);

  const handleConfirmPassword = useCallback(() => {
    if (password.length >= 8 || password.length === 0)
      setIsConfirmPassword(true);
    else setIsConfirmPassword(false);
  }, [password]);

  const handleConfirmCheckPassword = useCallback(() => {
    if (password === checkPassword || checkPassword.length === 0)
      setIsConfirmCheckPassword(true);
    else setIsConfirmCheckPassword(false);
  }, [password, checkPassword]);

  const handleSubmitSignup = async (event) => {
    event.preventDefault();

    if (!(isConfirmEmail && isConfirmPassword && isConfirmCheckPassword)) {
      alert("필수 사항을 조건에 맞게 모두 입력해주세요.");
      return;
    }

    const signData = {
      email: event.target.email.value,
      password: event.target.password.value,
      displayName: event.target.displayName.value,
      profileImgBase64: profileImg ?? undefined,
    };

    const isSignup = await requestSignup(signData);
    if (isSignup) navigate("/login");
  };

  useEffect(() => {
    handleConfirmEmail();
  }, [handleConfirmEmail]);

  useEffect(() => {
    handleConfirmPassword();
  }, [handleConfirmPassword]);

  useEffect(() => {
    handleConfirmCheckPassword();
  }, [handleConfirmCheckPassword]);

  return (
    <div className={style.signup}>
      <div className={style.header}>
        <h1>회원가입</h1>
      </div>
      <form id="signup" onSubmit={handleSubmitSignup}>
        <InfoList
          label={"이메일"}
          input={{
            name: "email",
            value: email,
            required: true,
            onChange: handleChangeInfoInputs,
            placeholder: "이메일을 입력해 주세요",
          }}
          button={{
            name: "중복 확인",
            onClick: (e) => {
              e.preventDefault();
            },
          }}
        />
        <InfoList
          label={"비밀번호"}
          input={{
            name: "password",
            value: password,
            type: "password",
            required: true,
            onChange: handleChangeInfoInputs,
            placeholder: "비밀번호를 입력해 주세요",
            checkInput: {
              isConfirm: isConfirmPassword,
              errorMessage: "비밀번호는 8자 이상이어야 합니다.",
            },
          }}
        />
        <InfoList
          label={"비밀번호 확인"}
          input={{
            name: "checkPassword",
            value: checkPassword,
            type: "password",
            required: true,
            onChange: handleChangeCheckPassword,
            placeholder: "비밀번호를 다시 입력해 주세요",
            checkInput: {
              isConfirm: isConfirmCheckPassword,
              errorMessage: " 비밀번호가 일치하지 않습니다.",
            },
          }}
        />
        <InfoList
          label={"이름"}
          input={{
            name: "displayName",
            value: displayName,
            required: true,
            onChange: handleChangeInfoInputs,
            placeholder: "이름을 입력해 주세요",
          }}
        />

        <section className={style.profile}>
          <label>프로필</label>
          <article className={style.profile_inputContainer}>
            <input
              type="file"
              accept=".jpg, .jpeg, .webp, .png, .gif, .svg"
              onChange={handleChangeProfileImg}
            />
            <figure className={style.profile_inputContainer_img}>
              {profileImg && (
                <img alt="프로필" width={150} height={150} src={profileImg} />
              )}
            </figure>
          </article>
        </section>
        <section className={style.btn}>
          <Button
            name="가입하기"
            form="signup"
            type="submit"
            isPurple={true}
            width="100%"
          />
        </section>
      </form>
    </div>
  );
}
