import React, { useContext, useState } from 'react';
import { AuthContext } from './../Page';
import { Redirect } from 'react-router-dom';
import Button from './../Button';
import logo from './../../assets/img/fazt.png';
import { Link } from 'react-router-dom';

function Login({ location: { next } }) {
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!email || !password)
      return setErrorMsg('Debes colocar un correo y una contraseña!');
    setUser({ email });
    localStorage.setItem('user', email);
  }

  return user ? (
    <Redirect to={next || '/'} />
  ) : (
    <main className="login">
      <img className="login-logo" src={logo} alt="Fazt logo" />
      {errorMsg && <p className="login-message">{errorMsg}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email" className="login-label">
          Correo electrónico
        </label>
        <input
          id="login-email"
          className="input login-input"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
            setErrorMsg('');
          }}
        />
        <label htmlFor="login-password" className="login-label">
          Contraseña
        </label>
        <input
          id="login-password"
          className="input login-input"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
            setErrorMsg('');
          }}
        />
        <Button extraClasses="login-button" style="primary" type="submit">
          Iniciar Sesión
        </Button>
        <Link className="login-link" to="/register">
          Registrate
        </Link>
      </form>
    </main>
  );
}

export default Login;
