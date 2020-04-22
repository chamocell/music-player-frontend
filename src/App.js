import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Button from './components/Button';
import Home from './components/Home';
import Page from './components/Page';
import Login from './components/Login';
import MainRoute from './components/MainRoute';

function App() {
  return (
    <Page>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <MainRoute exact path="/" component={Home} />
          <MainRoute exact path="/albums" component={Home} />
          <MainRoute exact path="/artists" component={Home} />
          <MainRoute exact path="/favourites" component={Home} />
          <Route>
            <p>Not found</p>
          </Route>
        </Switch>
      </Router>
    </Page>
  );
}

export default App;
