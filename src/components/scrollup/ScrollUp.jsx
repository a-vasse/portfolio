import React, { useState } from 'react';
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
  })
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div>
      <a href="#home" className="scrollup">
        <i onClick={() => setActiveNav('#home')} className="fa-solid fa-angles-up scrollup-icon"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
