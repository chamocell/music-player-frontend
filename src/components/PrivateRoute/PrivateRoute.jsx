import React, { useContext } from 'react';
import { AuthContext } from './../Page';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? (
          <Component {...routeProps} />
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
