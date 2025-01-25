"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeroSection from "./components/StarBackgroud";
import { FaChevronCircleUp } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAsideExpanded, setIsAsideExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden dark:bg-gray-800">
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        screenWidth={screenWidth}
      />

      <div className="w-full h-full flex flex-col justify-between">
        <Header />

        <main className="max-w-full h-full flex relative overflow-y-hidden">
          <div className="h-full w-full flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll dark:bg-gray-800">
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-gradient-to-b from-blue-900 to-gray-800 text-white flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Section 1</h1>
            </div>

            <section className="py-16 bg-white dark:bg-gray-800 w-full">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                  Sub Section 1
                </h2>
              </div>
            </section>

            <div className="relative w-full h-screen bg-gradient-to-b from-blue-900 to-gray-800 text-white flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Section 2</h1>
            </div>

            <section className="py-16 bg-white dark:bg-gray-800 w-full">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                  sub Section 2
                </h2>
              </div>
            </section>

            <section className="py-16 bg-gray-800 dark:bg-gray-900 text-gray-300 w-full">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start">
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Your Brand
                    </h2>
                    <p className="text-gray-400">
                      The all-in-one multichain DEX where you can trade, earn,
                      and own crypto. Experience seamless DeFi integration with
                      top-notch security.
                    </p>
                  </div>

                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="hover:text-purple-400 transition"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-purple-400 transition"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-purple-400 transition"
                        >
                          How It Works
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-purple-400 transition"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Connect with Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M24 4.56c-.89.39-1.85.65-2.85.77 1.03-.62 1.82-1.61 2.19-2.78-.96.57-2.02.98-3.15 1.2-.91-.96-2.2-1.56-3.62-1.56-2.74 0-4.95 2.21-4.95 4.95 0 .39.04.76.12 1.12C7.69 8.09 4.07 6.13 1.64 3.16c-.43.73-.67 1.57-.67 2.48 0 1.71.87 3.22 2.19 4.11-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.84.17-1.29.17-.31 0-.62-.03-.91-.09.62 1.94 2.42 3.36 4.55 3.4-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.16-.07 2.15 1.38 4.7 2.18 7.45 2.18 8.94 0 13.83-7.41 13.83-13.83 0-.21 0-.42-.01-.63.95-.69 1.78-1.55 2.44-2.53z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M22.23 5.924c-.793.353-1.644.592-2.538.697.914-.548 1.61-1.418 1.94-2.446-.855.508-1.803.877-2.81 1.076-.806-.861-1.957-1.399-3.227-1.399-2.444 0-4.423 1.979-4.423 4.423 0 .346.038.684.113 1.008C7.69 8.094 4.066 6.131 1.64 3.163c-.379.649-.597 1.403-.597 2.208 0 1.522.774 2.868 1.945 3.656-.72-.023-1.398-.221-1.988-.552v.056c0 2.125 1.511 3.897 3.515 4.3-.368.1-.752.154-1.151.154-.28 0-.554-.027-.821-.08.556 1.729 2.161 2.988 4.064 3.023-1.49 1.166-3.362 1.862-5.399 1.862-.35 0-.696-.02-1.038-.061C2.29 19.288 4.98 20 7.84 20c9.413 0 14.552-7.803 14.552-14.552 0-.221-.005-.441-.015-.66C21.035 5.858 21.673 5.081 22.23 4.2z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.82 9.49.5.09.67-.22.67-.48 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.6c.85.004 1.71.115 2.52.337 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.17.59.68.48A9.97 9.97 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
                  <p>&copy; 2025 Your Brand. All rights reserved.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
