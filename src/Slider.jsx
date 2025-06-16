import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const rooms = [
  {
    title: "Luxury Suite",
    guests: "4 Guest Room",
    img: "./img/img1.jpg",
    icons: ["🚗", "🍽️", "🛏️", "🚿"],
  },
  {
    title: "Studio Apartment",
    guests: "5 Guest Room",
    img: "./img/img2.jpg",
    icons: ["🛋️", "🚗", "🍽️", "🌐"],
  },
  {
    title: "Suit Room With Pool",
    guests: "9 Guest Room",
    img: "./img/img3.jpg",
    icons: ["🛏️", "🚿", "🍹", "🏊"],
  },
  {
    title: "Family Deluxe",
    guests: "6 Guest Room",
    img: "./img/img4.jpg",
    icons: ["👨‍👩‍👧‍👦", "🍽️", "🛏️", "🚗"],
  },
  {
    title: "Family Deluxe",
    guests: "2 Guest Room",
    img: "./img/img5.jpg",
    icons: ["👨‍👩‍👧‍👦", "🍽️", "🛏️", "🚗"],
  },
  {
    title: "Family Deluxe",
    guests: "3 Guest Room",
    img: "./img/img6.jpg",
    icons: ["👨‍👩‍👧‍👦", "🍽️", "🛏️", "🚗"],
  },
];

const Slider = () => {
  return (
    <div className="slider-section">
      <div className="slider-header" data-aos="flip-left">
        <p>EXPLORE YOUR ROOM</p>
        <h2>Find Rooms Based On Interests</h2>
      </div>

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {rooms.map((room, idx) => (
          <SwiperSlide key={idx}>
            <div className="room-card">
              <img src={room.img} alt={room.title} className="room-image" />
              <h3>{room.title}</h3>
              <p>{room.guests}</p>
              <div className="icon-row">
                {room.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
              <a href="#">Discover More</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
