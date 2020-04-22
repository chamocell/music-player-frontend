import React, { useContext } from 'react';
import { AuthContext } from './../Page';
import Button from './../Button';

function Home() {
  const { user, setUser } = useContext(AuthContext);

  function handleClick() {
    setUser();
    localStorage.removeItem('user');
  }

  return (
    <div className="home">
      Welcome Back, {user.email}
      <Button onClick={handleClick}>Log out</Button>
    </div>
  );
}

export default Home;
