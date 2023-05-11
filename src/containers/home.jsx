import { Box, Container, Typography } from "@mui/material";
import React from "react";
import discount from "../assets/images/special-offer-sale-banner-besign-discount-label-and-sticker-for-media-promotion-product-free-vector.webp";
import Contact from "./contact";
import ImageSwiper from "../components/swiper/swiper1";
import CategoryGrid from "../components/catogoryGrid";
import { IMAGES } from "../utils/commonImages/catogoryImages";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <ImageSwiper />
      <img src={IMAGES.catogory} style={{ width: "100%" }} />
      <CategoryGrid />
      <Link to="/products/discount">
        <img src={discount} style={{width:'100%'}}/>
      </Link>
      <Contact />
    </>
  );
};

export default Home;

// <ImageSwiper />
//          <Box component="img" src={discount} sx={{ width: "100%" }} mb={"-4px"}></Box>
//        <Contact />
