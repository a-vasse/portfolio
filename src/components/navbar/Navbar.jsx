import React, { useState } from 'react';
import "./navbar.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
  })

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
              <a href="#portfolio" className="nav-link">
                <i className="fa-solid fa-photo-film nav-icon"></i>Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#history" className="nav-link">
                <i className="fa-solid fa-briefcase nav-icon"></i>History
              </a>
            </li>

            <li className="nav-item">
              <a href="#photos" className="nav-link">
              <i className="fa-regular fa-image nav-icon"></i>Photos
              </a>
            </li>

            <li className="nav-item">
              <a href="#photos" className="nav-link">
                <i className="fa-regular fa-envelope nav-icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="fa-solid fa-xmark nav-close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
