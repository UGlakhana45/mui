import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { SwipableImages } from "../../utils/commonImages/swipeimages";

export default function ImageSwiper() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwipableImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.imgPath}
              alt="Image"
              style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
