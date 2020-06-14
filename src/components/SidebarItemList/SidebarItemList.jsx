import React from 'react';

export default function SidebarItemList({ heading, children }) {
  return (
    <ul className="sidebar-nav">
      <h3 className="sidebar-heading">{heading}</h3>
      {children}
    </ul>
  );
}
