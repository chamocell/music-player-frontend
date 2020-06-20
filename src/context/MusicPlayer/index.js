import React, { useState } from 'react';

export const MusicPlayerContext = React.createContext();

export default function MusicPlayerProvider({ children }) {
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);

  function togglePlaying() {
    setMusicPlayerPlaying((playing) => !playing);
  }

  function toggle() {
    togglePlaying();
    setMusicPlayerActive((active) => !active);
  }

  function play(song) {
    setMusicPlayerActive(true);
    setMusicPlayerPlaying(true);
  }

  function pause() {
    setMusicPlayerPlaying(false);
  }

  function stop() {
    setMusicPlayerPlaying(false);
    setMusicPlayerActive(false);
  }

  const contextValue = {
    active: musicPlayerActive,
    playing: musicPlayerPlaying,
    play,
    pause,
    stop,
    toggle,
    togglePlaying
  };

  return <MusicPlayerContext.Provider children={children} value={contextValue} />;
}
