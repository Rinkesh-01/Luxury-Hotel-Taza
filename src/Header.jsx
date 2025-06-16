import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-container">
          <div className="header-top-inner">
            <div className="left-part">
              <div className="left-part-inner">
                <div className="content">
                  <div className="left-content">
                    <span>
                      <img id="fire" src="/img/fire.svg" alt="" />
                    </span>
                    <p>Book Now, Enjoy Exclusive savings</p>
                  </div>
                  <div className="right-content">
                    <a href="#">learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-part">
              <div className="right-part-inner">
                <div className="content">
                  <div className="left-content">
                    <p>
                      <MdEmail id="email" /> support@example.com
                    </p>
                  </div>
                  <div className="right-content">
                    <p>
                      <FaLocationDot id="location" /> No: 58 A, East Madison
                      Street, Baltimore, MD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-container">
          <div className="header-bottom-inner">
            <div className="all-item">
              <div className="logo">
                <div className="img">
                  <a href="#">
                    <img id="logo" src="./img/taza.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="navbar">
                <div className="navbar-inner">
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    
                    </li>
                    <li>
                                           <Link to="/about">about</Link>

                    
                    </li>
                    <li>
                      <a href="#">page</a>
                      <ul className="mega-menu">
                        <li>
                          <ul className="mega-item">
                            <li>
                              <a href="#">About-us</a>
                            </li>
                            <li>
                              <a href="#">faq</a>
                            </li>
                            <li>
                              <a href="#">plan-packages</a>
                            </li>
                            <li>
                              <a href="#">awards</a>
                            </li>
                            <li>
                              <a href="#">aminities</a>
                            </li>
                            <li>
                              <a href="#">hotel-staff</a>
                            </li>
                            <li>
                              <a href="#">gallery</a>
                            </li>
                            <li>
                              <a href="#">404 error page</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">offers</a>
                    </li>
                    <li>
                      <a href="#">blog</a>
                      <ul className="mega-menu">
                        <li>
                          <ul className="mega-item">
                            <li>
                              <a href="#">blog listing</a>
                            </li>
                            <li>
                              <a href="#">blog detail</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">contact us</a>
                      <ul className="mega-menu">
                        <li>
                          <ul className="mega-item">
                            <li>
                              <a href="#">help center</a>
                            </li>
                            <li>
                              <a href="#">restaurant</a>
                            </li>
                            <li>
                              <a href="#">local place</a>
                            </li>
                            <li>
                              <a href="#">login & ragister</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="button-part">
                <div className="button-part-inner">
                  <div id="butn">
                    <a href="#">book rooms</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
