import React from "react";
import Service from "./Service";
import Slider from "./Slider";
import Video from "./Video";
import Intro from "./Intro";
import ScrollToTop from "./ScrolltoTop";
import Aminities from "./Aminities";
import Feedback from "./Feedback";
import Contact from "./Contact";
import Imgalary from "./Imgalary";
import Herosection from "./Herosection";
import App from "./App";

function Home() {
  return (
    <>
      <Herosection />
      <Service />
      <Slider />
      <Video />
      <Aminities />
      <Intro />
      <ScrollToTop />
      <Feedback />
      <Contact />
      <Imgalary />
      <App/>
    </>
  );
}

export default Home;
