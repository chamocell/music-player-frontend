import React, { useContext } from 'react';
import { AuthContext } from './../Page';
import { Route, Redirect } from 'react-router-dom';

function Children({ children }) {
  return <>{children}</>;
}

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? (
          <Children children={children} {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              next: routeProps.location.pathname + routeProps.location.search
            }}
          />
        )
      }
    />
  );
}
