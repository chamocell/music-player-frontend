import React, { useState } from 'react';
import MusicPlayer from '../MusicPlayer';
import Main from './../Main';
import Sidebar from '../../containers/Sidebar';
import Search from '../../components/Search/Search';
import Grid from '@material-ui/core/Grid';
import { Menu, MenuItem } from '@material-ui/core';
import CardTalent from '../../components/Cards/CardTalent';
import UserNav from '../../components/UserNav/UserNav';

import { Switch } from 'react-router-dom';
import useUser from '../../hooks/useUser';

import { MusicPlayerProvider } from '../../context/MusicPlayer';

export default function MusicApp({ children }) {
  const { isLoggedIn } = useUser(false);

  return (
    <MusicPlayerProvider>
      {isLoggedIn && <Sidebar />}
      <Main>
        {isLoggedIn && <UserNav />}
        <Switch>{children}</Switch>
      </Main>
      {isLoggedIn && <MusicPlayer />}
    </MusicPlayerProvider>
  );
}
