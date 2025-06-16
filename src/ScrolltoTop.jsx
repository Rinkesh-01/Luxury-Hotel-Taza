import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopSlow = () => {
    const scrollStep = -window.scrollY / 50; // smaller number = slower
    const interval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(interval);
      }
    }, 10); // smaller = smoother
  };

  return (
    <div style={{  padding: "-10px", fontFamily: "Arial" }}>

      {showScrollButton && (
        <button
          onClick={scrollToTopSlow}
          style={{
            position: "fixed",
            bottom: "35px",
            right: "25px",
            padding: " 10px 20px",
            fontWeight:"700",
            fontSize: "30px",
            backgroundColor: "#c4ad8c",
            color: "white",
            border: "none",
            zIndex:"1",
            cursor: "pointer",
          }}
        >
          ↑ 
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
