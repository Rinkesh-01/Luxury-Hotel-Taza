import React from "react";

function Service() {
  return (
    <>
      <div className="service-main">
        <div className="background-img">
          <img src="./img/bg-patten.png" alt="" />
        </div>
        <div className="container">
          <div className="service-main-inner">
            <div className="service-left"  data-aos="fade-right">
              <div className="img  ">
                <img
                  src="./img/about-left.jpg"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                  alt="Animated"
                />
              </div>
              <div className="small-img">
                <img
                  src="./img/about-small.jpg"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                  alt="Animated"
                />
              </div>
            </div>
            <div className="service-right" data-aos="fade-left">
              <div className="service-top">
                <div className="title">
                  <h6>RELAX IN ULTIMATE COMFORT</h6>
                </div>
                <div className="text-contact">
                  Experience Exceptional Comfort And Service During Your Stay
                </div>
              </div>
              <div className="service-bottom">
                <div className="service-bottom-left">
                  
                </div>
                <div className="service-bottom-right">
                  <div className="service-bottom-right-inner">
                    <h6>
                      Metus aenean eros integer donec ultricies efficitur quam.
                      Cursus volutpat vehicula dictumst sociosqu turpis libero.
                      Condimentum ultricies eros faucibus ultrices varius
                      nascetur curabitur sit.
                    </h6>

                    <div className="list">
                      <ul>
                        <li>
                          <a href="#">Dapibus tincidunt platea hac </a>
                        </li>
                        <li>
                          <a href="#">Feugiat viverra dictumst mattis</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Ultrices tellus imperdiet nisi </a>
                        </li>
                        <li>
                          <a href="#">Lobortis sem dictum maecenas</a>
                        </li>
                      </ul>
                    </div>
                    <div className="second">
                      <div className="sign">
                        <h2>-Viktor Hugo</h2>
                        <h5>Manager</h5>
                      </div>

                      <div id="about-btn">
                        <a href="#">More About Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
