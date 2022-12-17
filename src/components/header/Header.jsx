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
        <a href="index.html" className="nav__logo">Vasse</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu" }>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
              <i className="fa-solid fa-earth-asia nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
              <i className="fa-regular fa-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
              <i className="fa-solid fa-gears nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
              <i className="fa-solid fa-wrench nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
              <i className="fa-regular fa-image nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i className="fa-solid fa-envelope nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i class="fa-regular fa-circle-xmark nav__close" onClick={handleClick}></i>
        </div>
        <div className="nav__toggle" onClick={handleClick}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
