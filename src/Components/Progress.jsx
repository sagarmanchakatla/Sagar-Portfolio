import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-1 w-full">
      <div
        className="h-full bg-blue-500 transition-all ease-out"
        style={{ width: `${scrollPosition}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
