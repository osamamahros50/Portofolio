import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scroll = () => {
      const current = window.scrollY;
      if (current > 0) {
        window.scrollTo(0, current - 50); // سرعة الصعود
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 z-50 
      transition-all duration-500 ease-in-out
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
    >
      <FaArrowUp />
    </button>
  );
}
