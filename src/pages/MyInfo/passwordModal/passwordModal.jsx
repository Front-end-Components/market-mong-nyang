import { requestUpdateProfile } from '@/api/userAPI';
import Button from '@/components/Button';
import { InfoList } from '@/components/Signup/infoList';
import { useCallback, useEffect, useState } from 'react';
import style from './passwordModal.module.scss';

const PasswordModal = ({ onCloseModal }) => {
  const [inputs, setInputs] = useState({ oldPassword: '', newPassword: '' });
  const [checkNewPassword, setCheckNewPassword] = useState('');

  const { oldPassword, newPassword } = inputs;

  const [isConfirmOldPassword, setIsConfirmOldPassword] = useState(false);
  const [isConfirmNewPassword, setIsConfirmNewPassword] = useState(false);
  const [isConfirmCheckNewPassword, setIsConfirmCheckNewPassword] = useState(false);

  const handleConfirmPassword = useCallback(() => {
    if (oldPassword.length >= 8 || oldPassword.length === 0) setIsConfirmOldPassword(true);
    else setIsConfirmOldPassword(false);
  }, [oldPassword]);

  const handleComparePassword = useCallback(() => {
    if (oldPassword !== newPassword || newPassword.length === 0) setIsConfirmNewPassword(true);
    else setIsConfirmNewPassword(false);
  }, [oldPassword, newPassword]);

  const handleConfirmCheckNewPassword = useCallback(() => {
    if (newPassword === checkNewPassword || checkNewPassword.length === 0)
      setIsConfirmCheckNewPassword(true);
    else setIsConfirmCheckNewPassword(false);
  }, [newPassword, checkNewPassword]);

  const handleChangePasswords = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isConfirmPasswordValidation = () => {
    return (
      isConfirmOldPassword &&
      isConfirmNewPassword &&
      isConfirmCheckNewPassword &&
      inputs.newPassword.length > 0 &&
      inputs.oldPassword.length > 0 &&
      checkNewPassword.length > 0
    );
  };

  const requestPasswordChange = async () => {
    const isSucess = await requestUpdateProfile({
      oldPassword,
      newPassword,
    });
    if (isSucess) {
      alert('비밀번호가 변경되었습니다.');
      onCloseModal();
    } else alert('현재 비밀번호가 잘못 입력되었습니다.');
  };

  useEffect(() => {
    handleConfirmPassword();
  }, [handleConfirmPassword]);

  useEffect(() => {
    handleComparePassword();
  }, [handleComparePassword]);

  useEffect(() => {
    handleConfirmCheckNewPassword();
  }, [handleConfirmCheckNewPassword]);

  return (
    <>
      <section className={style.modalBackground} />
      <section className={style.modalContainer}>
        <section className={style.modalContainer_content}>
          <h1>비밀번호 변경</h1>
          <InfoList
            label={'현재 비밀번호'}
            input={{
              name: 'oldPassword',
              value: oldPassword,
              type: 'password',

              onChange: handleChangePasswords,
              placeholder: '기존 비밀번호를 입력해 주세요',
              checkInput: {
                isConfirm: isConfirmOldPassword,
                errorMessage: '비밀번호는 8자 이상이어야 합니다.',
              },
            }}
          />
          <InfoList
            label={'새 비밀번호'}
            input={{
              name: 'newPassword',
              value: newPassword,
              type: 'password',

              onChange: handleChangePasswords,
              placeholder: '바꿀 비밀번호를 입력해 주세요',
              checkInput: {
                isConfirm: isConfirmNewPassword,
                errorMessage: '기존 비밀번호와 같습니다.',
              },
            }}
          />
          <InfoList
            label={'새 비밀번호 확인'}
            input={{
              name: 'checkNewPassword',
              value: checkNewPassword,
              type: 'password',
              onChange: (e) => {
                setCheckNewPassword(e.target.value);
              },
              placeholder: '비밀번호를 다시 입력해 주세요',
              checkInput: {
                isConfirm: isConfirmCheckNewPassword,
                errorMessage: '새로운 비밀번호가 일치하지 않습니다.',
              },
            }}
          />
          <section className={style.modalContainer_content_btnSection}>
            <Button name="취소" onClick={onCloseModal} />
            <Button
              disabled={!isConfirmPasswordValidation()}
              name="비밀번호 변경"
              isPurple
              onClick={requestPasswordChange}
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default PasswordModal;
