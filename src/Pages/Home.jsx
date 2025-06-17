import React, { Suspense } from "react";
import SectionTwo from "../Components/Sections/SectionTwo";
import SectionOne from "../Components/Sections/SectionOne";
import Slider from "./Slider";
import BookCategory from "./BookCategory/BookCategory";
import Spinner from "../Components/Spinner/Spinner";

const Home = () => {
  return (
    <section>
      <Slider></Slider>

      <Suspense fallback={<Spinner></Spinner>}>
        <BookCategory></BookCategory>
      </Suspense>

      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </section>
  );
};

export default Home;
