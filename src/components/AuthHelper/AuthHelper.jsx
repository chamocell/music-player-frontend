import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './../Button';
import logo from './../../assets/img/fazt.png';
import { Link } from 'react-router-dom';

import useUser from '../../hooks/useUser';
import useQuery from '../../hooks/useQuery';

export default function AuthHelper({ type, onSubmit }) {
  const { user, isLoggedIn } = useUser(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const query = useQuery();

  if (isLoggedIn) return <Redirect to={query.get('next') || '/'} />;

  function defaultSubmitHandler() {
    if (!email || !password || (type === 'signup' && !username))
      return setErrorMsg('Debes llenar todos los campos!');
    user.logIn({ email });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit ? onSubmit() : defaultSubmitHandler();
  }

  function setValue(e, func, ...args) {
    setErrorMsg('');
    func(e.target.value, ...args);
  }

  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="Fazt logo" />
      {errorMsg && <p className="login-message">{errorMsg}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        {type === 'signup' && (
          <>
            <label htmlFor="login-username" className="login-label">
              Nombre de usuario
            </label>
            <input
              id="login-username"
              className="input login-input"
              type="text"
              value={username}
              onChange={(e) => setValue(e, setUsername)}
            />
          </>
        )}

        <label htmlFor="login-email" className="login-label">
          Correo electrónico
        </label>
        <input
          id="login-email"
          className="input login-input"
          type="email"
          value={email}
          onChange={(e) => setValue(e, setEmail)}
        />
        <label htmlFor="login-password" className="login-label">
          Contraseña
        </label>

        <input
          id="login-password"
          className="input login-input"
          type="password"
          value={password}
          onChange={(e) => setValue(e, setPassword)}
        />

        <Button extraClasses="login-button" buttonStyle="primary" type="submit">
          {type === 'signup' ? 'Registrarse' : 'Iniciar Sesión'}
        </Button>

        <Link className="login-link" to={type === 'signup' ? '/login' : '/signup'}>
          {type === 'signup' ? 'Iniciar sesión' : 'Registrate'}
        </Link>
      </form>
    </div>
  );
}
