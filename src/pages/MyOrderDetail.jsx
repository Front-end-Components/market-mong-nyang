import React from 'react';
import { useParams } from 'react-router-dom';

export default function MyOrderDetail() {
  const { orderId } = useParams();
  return <div>MyOrderDetail {orderId}</div>;
}
