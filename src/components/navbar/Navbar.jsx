import React, { useState } from 'react';
import "./navbar.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">Vasse</a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <i className="fa-solid fa-earth-asia nav-icon"></i>Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="fa-solid fa-user nav-icon"></i>About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="fa-solid fa-screwdriver-wrench nav-icon"></i>Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="fa-solid fa-toolbox nav-icon"></i>Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="fa-solid fa-photo-film nav-icon"></i>Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="fa-regular fa-envelope nav-icon"></i>Contact
              </a>
            </li>
          </ul>

          <i class="fa-solid fa-xmark nav-close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
