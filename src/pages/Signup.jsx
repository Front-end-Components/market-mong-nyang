import React from 'react';
import { signup } from '../api/requests';
import Button from '../components/Button';

export default function Signup() {
  // TEST
  const onSubmit = (event) => {
    event.preventDefault();
    const test = {
      email: 'test@test.com',
      password: '1q2w3e4r',
      displayName: 'test',
    };
    const res = signup(test);
    console.log(res);
  };

  return (
    <form>
      <div>
        <label htmlFor='email'>
          이메일<span>*</span>
        </label>
        <input type='text' className='email' />
      </div>
      <div>
        <label htmlFor='password'>
          비밀번호<span>*</span>
        </label>
        <input type='text' className='password' />
      </div>
      <div>
        <label htmlFor='password-check'>
          비밀번호 확인<span>*</span>
        </label>
        <input type='text' className='password-check' />
      </div>
      <div>
        <label htmlFor='name'>
          이름<span>*</span>
        </label>
        <input type='text' className='name' />
      </div>
      <Button name='제출' onClick={onSubmit} />
    </form>
  );
}
