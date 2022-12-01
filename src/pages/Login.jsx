import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Login() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/`);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
      </form>
      <Button name='로그인'></Button>
    </div>
  );
}
