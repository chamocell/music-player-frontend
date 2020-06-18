import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ icon: Icon, children, ...rest }) {
  return (
    <li className="sidebar-item">
      <NavLink {...rest} activeClassName="sidebar-link--active" className="sidebar-link">
        <Icon className="sidebar-icon" />
        {children}
      </NavLink>
    </li>
  );
}
