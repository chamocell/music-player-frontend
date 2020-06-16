import React from 'react';
import { Route } from 'react-router-dom';

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import Page from './containers/Page';
import ArtistContainer from './containers/ArtistContainer';

import PrivateRoute from './components/PrivateRoute';
import Message from './components/Message';

function App() {
  return (
    <Page>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={Home} />
      {/* <PrivateRoute path="/albums" component={Home} /> */}
      {/* <PrivateRoute exact path="/artists" component={Home} /> */}
      <PrivateRoute path="/artists/:id" component={ArtistContainer} />
      {/* <PrivateRoute path="/favourites" component={Home} /> */}
      <Route>
        <Message height={400} children="NO ENCONTRADO" status="404" />
      </Route>
    </Page>
  );
}

export default App;
