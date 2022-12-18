import React from 'react';
import "./home.css";
import Social from './Social';
import Intro from './Intro';

const Home = () => {
  return (
      <section className="home section" id="home">
        <div className="home-container container grid">
          <div className="home-content grid">
            <Social />
              <div className="home-img"></div>
            <Intro />
          </div>
        </div>
      </section>
  );
};

export default Home;
