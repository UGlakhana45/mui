import { Box } from "@mui/material";
import React from "react";
import discount from "../assets/images/special-offer-sale-banner-besign-discount-label-and-sticker-for-media-promotion-product-free-vector.webp";
import { Link } from "react-router-dom";
import Contact from "./contact";
import ImageSwiper from "../components/swiper/swiper1";
const Home = () => {
  return (
    <div>
      <ImageSwiper />
        <Box component="img" src={discount} sx={{ width: "100%" }} mb={"-4px"}></Box>
      <Contact />
    </div>
  );
};

export default Home;
