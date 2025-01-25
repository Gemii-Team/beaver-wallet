"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAsideExpanded, setIsAsideExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden dark:bg-gray-800">
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isAsideExpanded={isAsideExpanded} setIsAsideExpanded={setIsAsideExpanded} screenWidth={screenWidth} />   

      <div className="w-full h-full flex flex-col justify-between">
        <Header />

        <main className="max-w-full h-full flex relative overflow-y-hidden">
          <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll dark:bg-gray-800">

          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;