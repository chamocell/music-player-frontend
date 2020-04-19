import { ReactComponent as SignalIcon } from './../../assets/icons/signal.svg';
import { Link } from 'react-router-dom';

import React from 'react';

function Sidebar(props) {
  function toggleMusicPlayer() {
    props.musicPlayerState.setActive(!props.musicPlayerState.active);
  }

  return (
    <nav className="sidebar">
      {props.title && <h3 className="sidebar-title">{props.title}</h3>}
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

function SidebarItemList(props) {
  return (
    <ul className="sidebar-nav">
      <h3 className="sidebar-heading">{props.heading}</h3>
      {props.children}
    </ul>
  );
}

function SidebarItem(props) {
  return (
    <li className="sidebar-item">
      <Link className="sidebar-link" to={props.href}>
        <span className="sidebar-icon">{props.icon}</span>
        {props.children}
      </Link>
    </li>
  );
}

export default Sidebar;
