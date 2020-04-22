import React from 'react';
import PrivateRoute from './../PrivateRoute';
import MusicPlayer from './../MusicPlayer';
import Main from './../Main';
import Sidebar from './../Sidebar';

function MainRoute({ component: Component, ...rest }) {
  return (
    <PrivateRoute {...rest}>
      <Sidebar />
      <Main>
        <Component />
      </Main>
      <MusicPlayer />
    </PrivateRoute>
  );
}

export default MainRoute;
