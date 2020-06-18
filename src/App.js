import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import MusicApp from './containers/MusicApp';
import ArtistContainer from './containers/ArtistContainer';

import Message from './components/Message';
import AuthProvider from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MusicApp>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          {/* <PrivateRoute path="/albums" component={Home} /> */}
          {/* <PrivateRoute exact path="/artists" component={Home} /> */}
          <Route path="/artists/:id" component={ArtistContainer} />
          {/* <PrivateRoute path="/favourites" component={Home} /> */}
          <Route>
            <Message height={400} children="NO ENCONTRADO" status="404" />
          </Route>
        </MusicApp>
      </Router>
    </AuthProvider>
  );
}

export default App;
