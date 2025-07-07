import React, { Suspense } from "react";
import SectionTwo from "../Components/Sections/SectionTwo";
import SectionOne from "../Components/Sections/SectionOne";
import Slider from "./Slider";
import BookCategory from "./BookCategory/BookCategory";
import Spinner from "../Components/Spinner/Spinner";
import { motion, useScroll } from "motion/react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          background: "linear-gradient(to right, #00f6ff, #03a791, #00f6ff)",
          borderRadius: "0 8px 8px 0",
          boxShadow: "0 0 10px #03a79188",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      <motion.h1
        animate={{ rotateY: [0, 180, 0] }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="bg-gradient-to-r from-accent to-neutral bg-clip-text text-transparent md:text-2xl lg:text-3xl pt-3 font-bold text-center"
      >
        Empowering Minds, One Page at a Time
      </motion.h1>
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
