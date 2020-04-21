import { ReactComponent as SignalIcon } from './../../assets/icons/signal.svg';
import { Link } from 'react-router-dom';

import React from 'react';

function Sidebar({ musicPlayerState, title }) {
  function toggleMusicPlayer() {
    musicPlayerState.setActive(!musicPlayerState.active);
  }

  return (
    <nav className="sidebar">
      {title && <h3 className="sidebar-title">{title}</h3>}
      <SidebarItemList heading="Explore music">
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
      </SidebarItemList>

      <SidebarItemList heading="Explore music">
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
        <SidebarItem href="/" icon={<SignalIcon />}>
          Text
        </SidebarItem>
      </SidebarItemList>
      <button onClick={() => toggleMusicPlayer()}>Toggle Music Player</button>
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

function SidebarItem({ href, icon, children }) {
  return (
    <li className="sidebar-item">
      <Link className="sidebar-link" to={href}>
        <span className="sidebar-icon">{icon}</span>
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
