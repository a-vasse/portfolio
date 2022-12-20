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
import ScrollUp from './components/scrollup/ScrollUp';

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
      <Contact />

    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
