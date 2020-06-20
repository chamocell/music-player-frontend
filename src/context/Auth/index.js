import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  // data = {
  //   access_token: 'token', (not yet)
  //   user: { email: 'john@example.com' }
  // };
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserString = localStorage.getItem('user');
    let storedUser;

    try {
      storedUser = JSON.parse(storedUserString);
    } catch (error) {
      storedUser = null;
    }

    if (storedUser) setData({ user: storedUser });
    setLoading(false);
  }, []);

  // TODO: Return a loading icon
  if (loading) return null;

  function logIn(user) {
    setData({ user });
    const storeduser = JSON.stringify(user);
    localStorage.setItem('user', storeduser);
  }

  function logOut() {
    setData({});
    localStorage.clear();
  }

  const contextValue = { user: data.user, logIn, logOut, isLoggedIn: !!data.user };

  return <AuthContext.Provider children={children} value={contextValue} />;
}
