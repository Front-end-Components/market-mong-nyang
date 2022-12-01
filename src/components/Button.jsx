import React from 'react';

export default function Button({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}
