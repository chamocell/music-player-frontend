import React, { useContext } from 'react';
import { AuthContext } from './../Page';
import { Redirect } from 'react-router-dom';

function Login({ location: { next } }) {
  const { user, setUser } = useContext(AuthContext);
  console.log('Next:', next);
  return user ? (
    <Redirect to={next} />
  ) : (
    <div>
      <p>Log in</p>
      <button
        onClick={() => {
          setUser({ username: 'test' });
        }}
      >
        Click here to log in
      </button>
    </div>
  );
}

export default Login;
