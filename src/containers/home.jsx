import { Box, Container } from "@mui/material";
import React from "react";
import SwipeableTextMobileStepper from "../components/swipable";
import discount from "../assets/images/special-offer-sale-banner-besign-discount-label-and-sticker-for-media-promotion-product-free-vector.webp";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <SwipeableTextMobileStepper />

      <Link to="products/discount">
        <Box component="img" src={discount} sx={{ width: "100%" }}></Box>
      </Link>
    </div>
  );
};

export default Home;
