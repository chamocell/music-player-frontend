import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Button from './components/Button';
import Home from './components/Home';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar title="App Name"></Sidebar>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <p>Not found</p>
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
