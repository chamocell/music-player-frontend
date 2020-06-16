import React from 'react';
import AuthHelper from '../../components/AuthHelper';

export default function Login({ location: { next } }) {
  return <AuthHelper type="login" next={next} />;
}
