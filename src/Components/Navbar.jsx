import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
      const storedTheme = localStorage.getItem("darkMode");
    return storedTheme === "true";
  });

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
        className={`fixed w-full py-3 top-0 z-50 transition-all duration-500
    ${isScrolled
      ? `border-b shadow-md ${darkMode ? "bg-[#0F172A] border-slate-800" : "bg-white border-gray-200"}`
      : "bg-transparent border-transparent"
    }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
          Osama Mahrous
        </h1>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300
                ${
                  darkMode
                    ? "text-slate-200 hover:bg-slate-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 text-xl p-2 rounded-full transition cursor-pointer
              ${darkMode ? "text-yellow-400 hover:bg-slate-700" : "text-gray-600 hover:bg-gray-100"}`}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-xl p-1 rounded-full transition
              ${darkMode ? "text-yellow-400 hover:bg-slate-700" : "text-gray-600 hover:bg-gray-100"}`}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={` text-purple-600 text-2xl focus:outline-none`}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-[max-height,opacity] duration-500 ease-in-out 
          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          ${darkMode ? "bg-[#0F172A] text-white" : "bg-white text-black"}`}
      >
        <div className="flex flex-col items-center py-4 space-y-3 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-indigo-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
