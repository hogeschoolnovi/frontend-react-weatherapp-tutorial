import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenu() {
  return (
    <nav className="tab-bar">
      <ul>
        <li>
          <a className="active" href="/">
            Vandaag
          </a>
        </li>
        <li>
          <a href="/">
            Komende week
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TabBarMenu;
