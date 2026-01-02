import React, { useEffect } from 'react';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutContact from './components/AboutContact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-background-dark' : 'bg-background-light'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <WorkSection />
      <AboutContact />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
