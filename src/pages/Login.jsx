import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/requests';
import Button from '../components/Button';

export default function Login() {
  // TEST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = {
      email: 'test@test.com',
      password: '1q2w3e4r',
    };
    const res = await login(test);
    console.log(res);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' />
      </form>
      <Button name='로그인' onClick={handleSubmit}></Button>
    </div>
  );
}
