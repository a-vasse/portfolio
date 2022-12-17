import React, { useState } from 'react';
import "./header.css";

const Header = () => {
  const[Toggle, showMenu] = useState(false);
  const handleClick = () => {
    showMenu(!Toggle);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">Vasse</a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu" }>
          <ul className="nav-list grid">

            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
              <i className="fa-solid fa-earth-asia nav-icon"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
              <i className="fa-regular fa-user nav-icon"></i> About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
              <i className="fa-solid fa-gears nav-icon"></i> Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link">
              <i className="fa-solid fa-wrench nav-icon"></i> Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
              <i className="fa-regular fa-image nav-icon"></i> Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
              <i className="fa-solid fa-envelope nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i class="fa-regular fa-circle-xmark nav-close" onClick={handleClick}></i>
        </div>
        <div className="nav-toggle" onClick={handleClick}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
