import React from "react";
import PermanentDrawerLeft from "../containers/products/drawer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const AllProducts = () => {
  return (
    <div>
      <PermanentDrawerLeft />
      <Box ml={{ xs: "64px", sm: "64px", md: "240px" }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default AllProducts;
