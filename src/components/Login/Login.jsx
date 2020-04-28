import React from 'react';
import AuthHelper from '../AuthHelper';

export default function Login({ location: { next } }) {
  return <AuthHelper type="login" next={next} />;
}
