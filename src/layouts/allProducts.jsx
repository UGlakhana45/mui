import React from "react";
import PermanentDrawerLeft from "../containers/products/drawer";
import { Outlet } from "react-router-dom";

const AllProducts = () => {
  return (
    <div>
      <PermanentDrawerLeft />
      <Outlet />
    </div>
  );
};

export default AllProducts;
