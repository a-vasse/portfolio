import React, { useState } from 'react';
import "./navbar.css";
import "./scrollup.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
  })

  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
  })

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div>
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">Vasse</a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" onClick={() => setActiveNav('#home')}
                className={activeNav === "#home" ? "nav-link active-link" : "nav-link"}>
                <i className="fa-solid fa-earth-asia nav-icon"></i>Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" onClick={() => setActiveNav('#about')}
                className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}>
                <i className="fa-solid fa-user nav-icon"></i>About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" onClick={() => setActiveNav('#skills')}
                className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}>
                <i className="fa-solid fa-screwdriver-wrench nav-icon"></i>Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" onClick={() => setActiveNav('#projects')}
                className={activeNav === "#projects" ? "nav-link active-link" : "nav-link"}>
                <i className="fa-solid fa-photo-film nav-icon"></i>Projects
              </a>
            </li>

            <li className="nav-item">
              <a href="#history" onClick={() => setActiveNav('#history')}
                className={activeNav === "#history" ? "nav-link active-link" : "nav-link"}>
                <i className="fa-solid fa-briefcase nav-icon"></i>History
              </a>
            </li>

            <li className="nav-item">
              <a href="#photos" onClick={() => setActiveNav('#photos')}
                className={activeNav === "#photos" ? "nav-link active-link" : "nav-link"}>
              <i className="fa-regular fa-image nav-icon"></i>Photos
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" onClick={() => setActiveNav('#contact')}
                className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"}>
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

    <div>
    <a href="#home" className="scrollup">
      <i onClick={() => setActiveNav('#home')} className="fa-solid fa-angles-up scrollup-icon"></i>
    </a>
    </div>
  </div>
  )
}

export default Header
