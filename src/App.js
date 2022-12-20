import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import History from './components/history/History';
import Photos from './components/photos/Photos';

const App = () => {
  return (
    <>
    <Navbar />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <History />
      <Photos />
    </main>
    </>
  )
}

export default App;
