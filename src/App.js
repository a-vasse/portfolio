import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <>
    <Navbar />

    <main className="main">
      <Home />
      <About />
    </main>
    </>
  )
}

export default App;
