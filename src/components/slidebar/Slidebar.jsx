import React, { useState } from 'react';
// import "./Slidebar.css";

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'open' : ''}>
      <button type="button" className="burger sidebarTogglebutton" onClick={toggleSidebar}>
        <img className="burger-avatar" src="./assets/avatar.png" alt="Avatar" />
        <span className="burger-icon"></span>
      </button>
      <div className="overlay" onClick={toggleSidebar}></div>
      <aside className="sidebar">
        <img className="sidebar-avatar" src="./assets/avatar.png" alt="Sidebar Avatar" />
        <div className="sidebar-username">frontendjoe</div>
        <div className="sidebar-role">Frontend Developer</div>
        <nav className="sidebar-menu">
          <button type="button">
            <img src="./assets/icon-home.svg" alt="Home Icon" />
            <span>Home</span>
          </button>
          <button type="button">
            <img src="./assets/icon-settings.svg" alt="Settings Icon" />
            <span>Settings</span>
          </button>
          <button type="button">
            <img src="./assets/icon-accounts.svg" alt="Profile Icon" />
            <span>Profile</span>
          </button>
        </nav>
        <nav className="sidebar-menu bottom">
          <button type="button">
            <img src="./assets/icon-lock.svg" alt="Sign Out Icon" />
            <span>Sign Out</span>
          </button>
        </nav>
      </aside>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Slidebar;
