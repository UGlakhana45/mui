import React from "react";
import discount from "../assets/images/beerDiscount.png";
import Contact from "./contact";
import ImageSwiper from "../components/swiper/swiper1";
import CategoryGrid from "../components/catogoryGrid";
import { IMAGES } from "../utils/commonImages/catogoryImages";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <ImageSwiper />
      <img
        src={IMAGES.catogory}
        style={{ objectFit: "contain", height: "150px", width: "100%" }}
        alt="Shop By catogory"
      />
      <CategoryGrid />
      <Link to="/products/discount"></Link>
      <Contact />
    </>
  );
};

export default Home;

// <ImageSwiper />
//          <Box component="img" src={discount} sx={{ width: "100%" }} mb={"-4px"}></Box>
//        <Contact />
