"use client"
import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
        <button
            onClick={scrollToTop}
            className={`fixed z-10 flex btn btn-accent justify-center top-8 left-10 pt-1 border-0 w-8 h-8 rounded-full shadow-md  text-white text-lg font-semibold transition-colors duration-300 ${isVisible ? 'block' : 'hidden'}`}
        >
            ⬆
        </button>
        <button
            onClick={scrollToBottom}
            className={`fixed z-10 flex btn btn-neutral justify-center top-8 left-30 pt-1 border-0 w-8 h-8 rounded-full shadow-md  text-white text-lg font-semibold transition-colors duration-300 ${isVisible ? 'block' : 'hidden'}`}
        >
            ⬇
        </button>
    </>
  );
};

export default ScrollToTopBtn;