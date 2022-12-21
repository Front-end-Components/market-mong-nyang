import React from 'react';
import { useParams } from 'react-router-dom';

export default function PaymentDetail() {
  const { paymentId } = useParams();
  return <div>PaymentDetail {paymentId}</div>;
}
