import React from 'react';
import "./home.css";
import "./icons.css";
import "./name.css";
import "./profile.css"
import "./icons.css";
import Intro from './Intro';

const Home = () => {
  return (
      <section className="home section" id="home">
        <div className="home-container container grid">
          <div className="home-content grid">
              <div className="home-img"></div>
            <Intro />
          </div>
        </div>
      </section>
  );
};

export default Home;
