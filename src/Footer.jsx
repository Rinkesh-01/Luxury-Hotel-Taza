import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-inner">
            <div className="all-footer-item">
              <div className="footer-item" data-aos="flip-up">
                <div className="footer-item-inner">
                  <div className="img">
                    <img src="./img/logo.svg" alt="" />
                  </div>
                  <p>
                    Aliquet ullamcorper consequat aptent faucibus; iaculis odio.
                    Ut felis at class viverra diam ultrices ut tellu penatibus.
                  </p>
                  <div className="icon">
                    <FaFacebookSquare id="ioc" />
                    <FaLinkedin id="ioc" />
                    <FaTwitterSquare id="ioc" />
                    <FaYoutubeSquare id="ioc" />
                  </div>
                </div>
              </div>
              <div className="item" data-aos="flip-up">
                <div className="footer-item-inner">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                      <FaLocationDot id="iocn-location" />
                      No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                    </li>
                    <li>
                      <FaPhoneVolume id="iocn-phone" />
                      +00 123 456 789
                    </li>
                    <li>
                      <IoMdMail id="icon-mail" />
                      support@example.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item" data-aos="flip-up"> 
                <div className="footer-item-inner">
                  <h2> Information</h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Rooms</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item" data-aos="flip-up">
                <div className="footer-item-inner">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#"> Terms</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#"> FAQ</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-item" data-aos="flip-up">
                <div className="footer-item-inner">
                  <h2> Our Newsletter</h2>
                  <ul>
                    <li>
                      <p>
                        Parturient vel per id venenatis venenatis litora.
                        Conubia mauris leo metus eros tincidunt.
                      </p>
                    </li>

                    <li>
                      <input type="checkbox" name="" id="" />
                      Your email is safe with us, we don't spam. privacy policy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
