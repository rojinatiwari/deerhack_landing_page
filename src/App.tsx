import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  console.log('App component rendering');
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Footer />
    </div>
  );
};

export default App; 