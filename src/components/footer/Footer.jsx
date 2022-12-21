import React from 'react';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-social">
          <ul className="footer-icon-wrapper">
            <a href="http://www.linkedin.com/in/alexandervasse" rel="noopener noreferrer" target="_blank">
            <li className="footer-icon">
              <i className="fab fa-linkedin"></i>
            </li></a>
            <a href="http://www.github.com/a-vasse" rel="noopener noreferrer" target="_blank">
              <li className="footer-icon">
              <i className="fab fa-github"></i>
            </li></a>
            <a href="http://www.instagram.com/usagishashin" rel="noopener noreferrer" target="_blank">
              <li className="footer-icon">
              <i className="fab fa-instagram"></i>
            </li></a>
          </ul>
        </div>
        <span className="footer-copy">
        <i className="fa-regular fa-copyright"></i>{" "}Alexander Vasse. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
