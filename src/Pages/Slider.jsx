import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://i.ibb.co/CSM8D3R/banner.jpg",
  "https://i.ibb.co/nNffCQ3T/banner2.jpg",
  "https://i.ibb.co/Cpx0GR8H/banner3.jpg",
  "https://i.ibb.co/8DV1TPXD/banner04.jpg",
];

const Slider = () => {
  return (
    <div className="w-10/12 mx-auto h-[75vh]">
      <Swiper
        loop={true}
        effect="coverflow"
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide className="flex justify-center items-center" key={index}>
            <img
              src={src}
              className="w-full object-cover max-h-[75vh]"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
