import { requestUpdateProfile } from '@/api/userAPI';
import Button from '@/components/Button';
import { InfoList } from '@/components/Signup/infoList';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import style from './MyInfoForm.module.scss';
import PasswordModal from './passwordModal/passwordModal';

const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024;

const MyInfoModify = () => {
  const navigate = useNavigate();
  const [visiblePasswordModal, setVisiblePasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector((state) => state.user);
  const [inputs, setInputs] = useState({
    displayName: '',
  });

  const [profileImg, setProfileImg] = useState(null);

  const { displayName } = inputs;

  const handleOpenPasswordModal = () => {
    setVisiblePasswordModal(true);
  };
  const handleClosePasswordModal = () => {
    setVisiblePasswordModal(false);
  };

  const handleChangeLoginInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
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
      alert('이미지 사이즈는 최대 1MB입니다.');
      return false;
    }
    return true;
  };

  const handleSubmitUpdate = async (event) => {
    event.preventDefault();
    const updateData = {
      displayName: event.target.displayName.value,
      profileImgBase64: userInfo.profileImg === profileImg || !profileImg ? undefined : profileImg,
    };

    const isUpdate = await requestUpdateProfile(updateData);
    if (isUpdate) {
      alert('회원 정보가 수정되었습니다.');
      window.location.reload();
    }
  };

  useEffect(() => {
    if (userInfo) {
      setInputs({
        email: userInfo.email,
        password: '',
        displayName: userInfo.displayName,
      });
      setProfileImg(userInfo.profileImg);
      setLoading(true);
    }
  }, [userInfo]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('잘못된 접근입니다.');
      navigate('/');
    }
  }, []);

  return (
    loading && (
      <form className={style.myInfoModify} id="MyInfoModify" onSubmit={handleSubmitUpdate}>
        <section className={style.ListForm}>
          <label>email</label>
          <p>{userInfo.email}</p>
        </section>
        <section className={style.ListForm}>
          <label className={style.alignSelfCenter}>비밀번호</label>
          <Button type="button" name="비밀번호 변경" isPurple onClick={handleOpenPasswordModal} />
        </section>
        <InfoList
          label={'이름'}
          input={{
            name: 'displayName',
            value: displayName,

            onChange: handleChangeLoginInputs,
            placeholder: '이름을 입력해 주세요',
          }}
        />

        <section className={style.ListForm}>
          <label>프로필</label>
          <article className={style.profile_inputContainer}>
            <input
              type="file"
              accept=".jpg, .jpeg, .webp, .png, .gif, .svg"
              onChange={handleChangeProfileImg}
            />
            <figure className={style.profile_inputContainer_img}>
              {profileImg && <img alt="프로필" width={150} height={150} src={profileImg} />}
            </figure>
          </article>
        </section>
        <section className={style.btn}>
          <Button name="회원정보 수정" form="MyInfoModify" type="submit" isPurple={true} />
        </section>
        {visiblePasswordModal && <PasswordModal onCloseModal={handleClosePasswordModal} />}
      </form>
    )
  );
};

export default MyInfoModify;
