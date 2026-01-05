import React, { useRef } from 'react';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutContact from './components/AboutContact';
import ThemeToggle from './components/ThemeToggle';
import { SkillsShowcase } from './components/skills';

function App() {
  const { theme, toggleTheme } = useTheme();
  const projectref = useRef(null)
  const contactref = useRef(null)
  const skillref = useRef(null)
  const aboutref = useRef(null)
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-background-dark' : 'bg-background-light'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} projectref={projectref} />
      <section ref={aboutref}><Hero /></section> 
      <section ref={skillref}> <SkillsShowcase></SkillsShowcase></section>
      <section ref={projectref}><WorkSection /></section> 
      <section ref={contactref}><AboutContact /></section>  
     
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
