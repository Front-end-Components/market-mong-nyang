import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetail() {
  const { orderId } = useParams();
  return <div>OrderDetail {orderId}</div>;
}
