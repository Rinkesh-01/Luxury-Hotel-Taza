import React from "react";
import { FaCar } from "react-icons/fa";
import { GiEmbrassedEnergy } from "react-icons/gi";
import { FaTruckPickup } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlinePool } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";

function Aminities() {
  return (
    <div className="aminities">
      <div className=" aminities-container">
        <div className="aminities-inner">
          <div className="aminities-title" data-aos="zoom-in-up">
            <h6>ELEVATE YOUR STAY</h6>
            <p>
              Stay in Luxury with Top- <span>Rated Amenities</span>
            </p>
          </div>
          <div className="aminities-all-block" data-aos="fade-left">
            <div className="block">
              <div className="icon">
                <FaCar />
              </div>
              <div className="content">
                <h2>Parking Facility </h2>
                <p>
                  Libero libero sem egestas donec tincidunt turpis platea
                  facilisis morbi dis duis cras
                </p>
              </div>
            </div>
            <div className="block">
              <div className="icon">
                <GiEmbrassedEnergy />
              </div>
              <div className="content">
                <h2>Wellness & Relaxation </h2>
                <p>
                  Eros justo consequat lobortis euismod est erat amet fei sociosqu vel magna purus gravida
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <FaTruckPickup />
              </div>
              <div className="content">
                <h2>Pick-Up Service </h2>
                <p>
                  Orci quam turpis viverra primis cursus per taciti hendrerit ginibus per etsi
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <MdOutlineHomeWork />
              </div>
              <div className="content">
                <h2>Clothing Cleaning Service </h2>
                <p>
                 Sociosqu finibus ultrices ex amet praesent lacus platea at onsectetur condimentum
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <IoWifi />
              </div>
              <div className="content">
                <h2>Free High-Speed WiFi </h2>
                <p>
                  Accumsan sodales condimentum duis metus purus volutpat penatibus mattis sem
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <IoRestaurantOutline />
              </div>
              <div className="content">
                <h2>Morning Refreshment </h2>
                <p>
                Dapibus nullam ac et augue augue leo vel dictum eociosqu cursus elementum conubia
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <MdOutlinePool />
              </div>
              <div className="content">
                <h2>Outdoor Pool </h2>
                <p>
                  Euismod posuere consequat leo congue penatibus potenti idio sociosqu et dictum volutpat
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <GiCctvCamera />
              </div>
              <div className="content">
                <h2>Security Camera </h2>
                <p>
                  Sem purus placerat iaculis posuere odio consectetur vel torquent consectetur dis penatibus
                </p>
              </div>
            </div>{" "}
            <div className="block">
              <div className="icon">
                <RiCustomerService2Line />
              </div>
              <div className="content">
                <h2>Room Services </h2>
                <p>
                 Elit euismod mi quis urna iaculis platea mauris sed sociosqu primis nibh taciti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aminities;
