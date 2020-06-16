import React from 'react';
import AuthHelper from '../AuthHelper';

export default function SignUp({ location: { next } }) {
  return <AuthHelper type="signup" next={next} />;
}
