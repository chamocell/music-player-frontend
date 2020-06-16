// import { ReactComponent as SignalIcon } from './../../assets/icons/signal.svg';
import { ReactComponent as HomeIcon } from './../../assets/icons/home.svg';
import { ReactComponent as PictureIcon } from './../../assets/icons/image.svg';
import { ReactComponent as UserIcon } from './../../assets/icons/user.svg';
import { ReactComponent as MusicIcon } from './../../assets/icons/music.svg';

import { MusicPlayerContext } from '../../containers/Page';

import { NavLink } from 'react-router-dom';
import Button from './../Button';

import React, { useContext } from 'react';

function Sidebar({ title }) {
  const { active, setActive } = useContext(MusicPlayerContext);

  function toggleMusicPlayer() {
    setActive(!active);
  }

  return (
    <nav className="sidebar">
      {title && <h3 className="sidebar-title">{title}</h3>}
      <SidebarItemList heading="General">
        <SidebarItem exact href="/" icon={HomeIcon}>
          Inicio
        </SidebarItem>
        <SidebarItem href="/albums" icon={PictureIcon}>
          Álbumes
        </SidebarItem>
        <SidebarItem href="/artists" icon={UserIcon}>
          Artistas
        </SidebarItem>
      </SidebarItemList>

      <SidebarItemList heading="Playlist">
        <SidebarItem href="/favourites" icon={MusicIcon}>
          Mis favoritas
        </SidebarItem>
      </SidebarItemList>
      <Button onClick={() => toggleMusicPlayer()}>Toggle Music Player</Button>
    </nav>
  );
}

function SidebarItemList({ heading, children }) {
  return (
    <ul className="sidebar-nav">
      <h3 className="sidebar-heading">{heading}</h3>
      {children}
    </ul>
  );
}

function SidebarItem({ href, icon: Icon, children, ...rest }) {
  return (
    <li className="sidebar-item">
      <NavLink
        {...rest}
        activeClassName="sidebar-link--active"
        className="sidebar-link"
        to={href}
      >
        <Icon className="sidebar-icon" />
        {children}
      </NavLink>
    </li>
  );
}

export default Sidebar;
