import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();
export const MusicPlayerContext = React.createContext();

export default function Page({ children }) {
  const [user, setUser] = useState();
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);
  const [musicPlayerPlaying, setMusicPlayerPlaying] = useState(false);

  // TODO: Manage user login
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, []);

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
        {children}
      </MusicPlayerContext.Provider>
    </AuthContext.Provider>
  );
}
