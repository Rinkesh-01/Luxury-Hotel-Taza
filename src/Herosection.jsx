import React from "react";

function Herosection() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="img">
            <img
              src="./img/img.png"
              alt="Animated"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </div>
          <div className="text" data-aos="flip-left">
            <h2>luxury and comfort, redefined daily</h2>
            <a href="#">explore more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
