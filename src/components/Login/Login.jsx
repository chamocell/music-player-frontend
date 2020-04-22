import React, { useContext, useState } from 'react';
import { AuthContext } from './../Page';
import { Redirect } from 'react-router-dom';
import Button from './../Button';

function Login({ location: { next } }) {
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!email || !password) return;
    setUser({ email });
    localStorage.setItem('user', email);
  }

  return user ? (
    <Redirect to={next || '/'} />
  ) : (
    <main className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          className="input"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Button type="submit">Log in</Button>
      </form>
    </main>
  );
}

export default Login;
