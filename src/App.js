import React from 'react';

// Components
import Home from './components/Home';
import Page from './components/Page';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ArtistContainer from './components/ArtistContainer';
import Message from './components/Message';
import SignUp from './components/SignUp';

import { Route } from 'react-router-dom';

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
