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
        style={{ height:screenSize.height/1.2,width:screenSize.width*0.9925 }}
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
          <SwiperSlide>
            <img src={image.imgPath} alt="Image" style={{resize:'contain'}}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
