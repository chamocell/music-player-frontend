import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Page from './components/Page';
import Login from './components/Login';
import MainRoute from './components/MainRoute';
import ArtistContainer from './components/ArtistContainer';
import Message from './components/Message';

function App() {
  return (
    <Page>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <MainRoute exact path="/" component={Home} />
          <MainRoute path="/albums" component={'' ? Message : Message} />
          <MainRoute exact path="/artists" component={'' ? Message : Message} />
          <MainRoute path="/artists/:id" component={ArtistContainer} />
          <MainRoute path="/favourites" component={'' ? Message : Message} />
          <Route>
            <Message height={400} children="NO ENCONTRADO" status="404" />
          </Route>
        </Switch>
      </Router>
    </Page>
  );
}

export default App;
