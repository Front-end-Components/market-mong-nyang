import React, { useRef } from 'react';
import Button from '../components/Button';

export default function Signup() {
  // test
  const formRef = useRef();
  // const displayNameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const fileRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    // const user = {
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    //   displayNameRef: displayNameRef.current.value,
    //   profileImgBase64: fileRef.fileName || '',
    // };
    // formRef.current.reset();
    // setFile({ file: null });
    // onAdd(user);
  };

  return (
    <form ref={formRef}>
      <div>
        <label for='email'>
          이메일<span>*</span>
        </label>
        <input type='text' className='email' />
      </div>
      <div>
        <label for='password'>
          비밀번호<span>*</span>
        </label>
        <input type='text' className='password' />
      </div>
      <div>
        <label for='password-check'>
          비밀번호 확인<span>*</span>
        </label>
        <input type='text' className='password-check' />
      </div>
      <div>
        <label for='name'>
          이름<span>*</span>
        </label>
        <input type='text' className='name' />
      </div>
      <Button name='제출' onClick={onSubmit} />
    </form>
  );
}
