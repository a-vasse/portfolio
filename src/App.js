import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import BasicSkills from './components/skills/BasicSkills';
import DetailSkills from './components/skills/DetailSkills';

const App = () => {
  return (
    <>
    <Navbar />

    <main className="main">
      <Home />
      <About />
      <DetailSkills />
      <BasicSkills />
    </main>
    </>
  )
}

export default App;
