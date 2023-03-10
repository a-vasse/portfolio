import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import History from './components/history/History';
import Photos from './components/photos/Photos';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
    <Navbar />

    <main className="main">
      <Home />
      <About />
      <Skills />
      <Projects />
      <History />
      <Photos />
      <Contact />
    </main>

    <Footer />
    </>
  )
}

export default App;
