import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Additional sections will go here */}
    </div>
  );
}

export default App;