import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Button from './components/Button';
import Home from './components/Home';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);
  const musicPlayerState = {
    active: musicPlayerActive,
    setActive: setMusicPlayerActive,
    playing: musicPlayerPlaying,
    setPlaying: setMusicPlayerPlaying
  };
  return (
    <Router>
      <Sidebar musicPlayerState={musicPlayerState}></Sidebar>
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
      <MusicPlayer musicPlayerState={musicPlayerState} />
    </Router>
  );
}

export default App;
