import React, { useState, useEffect } from 'react';
import MusicPlayer from './../MusicPlayer';
import Main from './../Main';
import Sidebar from './../Sidebar';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

export const AuthContext = React.createContext();
export const MusicPlayerContext = React.createContext();

export default function Page({ children }) {
  const [user, setUser] = useState();
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);

  // TODO: Manage user login
  useEffect(() => {
    if (user) return;
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <MusicPlayerContext.Provider
        value={{
          active: musicPlayerActive,
          setActive: setMusicPlayerActive,
          playing: musicPlayerPlaying,
          setPlaying: setMusicPlayerPlaying
        }}
      >
        <Router>
          {user && <Sidebar />}
          <Main>
            <Switch>{children}</Switch>
          </Main>
          {user && <MusicPlayer />}
        </Router>
      </MusicPlayerContext.Provider>
    </AuthContext.Provider>
  );
}
