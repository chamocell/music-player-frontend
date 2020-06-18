import React, { useState } from 'react';
import MusicPlayer from '../MusicPlayer';
import Main from './../Main';
import Sidebar from '../../containers/Sidebar';

import { Switch } from 'react-router-dom';
import useUser from '../../hooks/useUser';

export const MusicPlayerContext = React.createContext();

export default function Page({ children }) {
  const { isLoggedIn } = useUser(false);
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);

  return (
    <MusicPlayerContext.Provider
      value={{
        active: musicPlayerActive,
        setActive: setMusicPlayerActive,
        playing: musicPlayerPlaying,
        setPlaying: setMusicPlayerPlaying
      }}
    >
      {isLoggedIn && <Sidebar />}
      <Main>
        <Switch>{children}</Switch>
      </Main>
      {isLoggedIn && <MusicPlayer />}
    </MusicPlayerContext.Provider>
  );
}
