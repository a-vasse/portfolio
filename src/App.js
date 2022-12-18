import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
    <Navbar />

    <main className="main">
      <Home />
    </main>
    </>
  )
}

export default App;
