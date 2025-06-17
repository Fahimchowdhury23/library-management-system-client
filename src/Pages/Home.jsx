import React from "react";
import SectionTwo from "../Components/Sections/SectionTwo";
import SectionOne from "../Components/Sections/SectionOne";
import Slider from "./Slider";

const Home = () => {
  return (
    <section>
      <Slider></Slider>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </section>
  );
};

export default Home;
