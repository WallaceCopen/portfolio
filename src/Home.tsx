import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Container from "./components/Container"
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/Projects";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/HomePage";
import './theme.css';

const App: React.FC = () => {
  const getInitialTheme = (): 'light' | 'dark' => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
      <Container>
        <Navbar />
        <Header />
        <AboutSection />
        <ProjectsSection />
      </Container>
    </>
  );
};


export default App
