import React from 'react';
import "./home.css";
import Data from "./Intro";

const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home-container container grid">
          <div className="home-content grid">
            <div className="home-img"></div>
            <Data />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
