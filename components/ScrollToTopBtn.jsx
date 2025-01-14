"use client"
import { useState, useEffect } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

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
    <div className="fixed z-10 h-1/4 top-6 left-2 flex flex-col space-around">
        <button
            onClick={scrollToTop}
            className={`btn btn-ghost h-16 w-16 transition-colors duration-300 hover:bg-transparent ${isVisible ? 'block' : 'hidden'}`}
        >
            <IoMdArrowDropupCircle className='h-16 w-16 text-accent hover:text-accent-focus'/>
        </button>
        <button
            onClick={scrollToBottom}
            className={`btn btn-ghost h-16 w-16 transition-colors duration-300 hover:bg-transparent ${isVisible ? 'block' : 'hidden'}`}
        >
            <IoMdArrowDropdownCircle className='h-16 w-16 text-primary hover:text-primary-focus'/>
        </button>
    </div>
  );
};

export default ScrollToTopBtn;