import React, { useState } from 'react';
import MusicPlayer from '../MusicPlayer';
import Main from './../Main';
import Sidebar from '../../containers/Sidebar';

import { Switch } from 'react-router-dom';
import useUser from '../../hooks/useUser';

import MusicPlayerProvider from '../../context/MusicPlayer';

export default function MusicApp({ children }) {
  const { isLoggedIn } = useUser(false);

  return (
    <MusicPlayerProvider>
      {isLoggedIn && <Sidebar />}
      <Main>
        <Switch>{children}</Switch>
      </Main>
      {isLoggedIn && <MusicPlayer />}
    </MusicPlayerProvider>
  );
}
