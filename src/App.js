import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Button from './components/Button';
import Home from './components/Home';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import Message from './components/Message';
import ArtistContainer from './components/ArtistContainer';

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
      <Sidebar musicPlayerState={musicPlayerState} title="App Name"></Sidebar>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/artistas/:id">
            <ArtistContainer />
          </Route>
          <Route>
            <Message height={400} children='NO ENCONTRADO' status='404' />
          </Route>
        </Switch>
      </Main>
      <MusicPlayer musicPlayerState={musicPlayerState} />
    </Router>
  );
}

export default App;
