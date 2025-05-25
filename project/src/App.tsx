import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import CloudBadges from './components/CloudBadges';
import AIQuotes from './components/AIQuotes';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add grid pattern to body
    document.body.classList.add('bg-grid-pattern');
    
    // Clean up
    return () => {
      document.body.classList.remove('bg-grid-pattern');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 text-dark-900 dark:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Certifications />
      <CloudBadges />
      <AIQuotes />
      <Footer />
    </div>
  );
};

export default App;