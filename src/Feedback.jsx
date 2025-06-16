import React, { useState, useEffect } from "react";

const reviews = [
  {
    stars: 3,
    text: `Penatibus inceptos curae taciti congue hac sed nulla iaculis blandit tortor. Morbi faucibus eu eros at ultrices. Duis vestibulum congue metus, ut commodo felis commodo at. Proin finibus hendrerit sodales Nunc. Maecenas mollis tortor ut felis fringilla porttitor. Donec tincidunt eget est eu varius. Donec dictum tincidunt arcu ac ornare. Nulla posuere diam sed risus dictum, vitae auctor orci scelerisque. Praesent convallis at orci et finibus. Suspendisse condimentum sit amet elit vehicula bibendum.`,
    name: "Michael",
    location: "Australia",
    avatar: "./img/michel.jpg",
  },
  {
    stars: 4,
    text: `Penatibus inceptos curae taciti congue hac sed nulla iaculis blandit tortor. Morbi faucibus eu eros at ultrices. Duis vestibulum congue metus, ut commodo felis commodo at. Proin finibus hendrerit sodales Nunc. Maecenas mollis tortor ut felis fringilla porttitor. Donec tincidunt eget est eu varius. Donec dictum tincidunt arcu ac ornare. Nulla posuere diam sed risus dictum, vitae auctor orci scelerisque. Praesent convallis at orci et finibus. Suspendisse condimentum sit amet elit vehicula bibendum.`,

    name: "Richard",
    location: "Dubai",
    avatar:
      "./img/richard.jpg",
  },
  {
    stars: 5,
    text: `Luctus adipiscing nulla penatibus efficitur sodales diam. Pellentesque at blandit tortor. Morbi faucibus eu eros at ultrices. Duis vestibulum congue metus, ut commodo felis commodo at. Proin finibus hendrerit sodales Nunc. Maecenas mollis tortor ut felis fringilla porttitor. Donec tincidunt eget est eu varius. Donec dictum tincidunt arcu ac ornare. Nulla posuere diam sed risus dictum, vitae auctor orci scelerisque. Praesent convallis at orci et finibus. Suspendisse condimentum sit amet elit vehicula bibendum.`,
    name: "Laara",
    location: "NEW YORK",
    avatar:
      "./img/lara.jpg",
  },
];

const Feedback = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feedback-wrapper">
      <div className="review-left" data-aos="fade-down-right">
        <div className="review-content">
          {reviews.map((review, index) => (
            <div
              className={`slide ${index === current ? "active" : ""}`}
              key={index}
            >
              <div className="guest-rating">GUEST RATING</div>
              <h1 className="review-title">User Review Feedback</h1>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < review.stars ? "filled" : "empty"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="reviewer-info">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="reviewer-avatar"
                />
                <div className="reviewer-details">
                  <h3>{review.name}</h3>
                  <div className="reviewer-location">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="slider-dots">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="image-right" data-aos="fade-down-left">
        <img src="./img/si.jpg" alt="Room" className="feedback-image" />
      </div>
    </div>
  );
};

export default Feedback;
