import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ href, icon: Icon, children, ...rest }) {
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
