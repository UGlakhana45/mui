import { Box, Container } from "@mui/material";
import React from "react";
import discount from "../assets/images/special-offer-sale-banner-besign-discount-label-and-sticker-for-media-promotion-product-free-vector.webp";
import Contact from "./contact";
import ImageSwiper from "../components/swiper/swiper1";
const Home = () => {
  return (
    <Container>
      <ImageSwiper />
    </Container>
  );
};

export default Home;

// <ImageSwiper />
//          <Box component="img" src={discount} sx={{ width: "100%" }} mb={"-4px"}></Box>
//        <Contact />
