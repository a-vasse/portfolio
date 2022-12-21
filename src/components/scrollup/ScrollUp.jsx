import React from 'react';
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
  })
  return (
    <div>
      <a href="#" className="scrollup">
        <i className="fa-solid fa-angles-up scrollup-icon"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
