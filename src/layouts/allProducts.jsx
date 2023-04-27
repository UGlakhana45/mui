import React from "react";
import PermanentDrawerLeft from "../containers/products/drawer";
import { Outlet } from "react-router-dom";

const AllProducts = () => {
  return (
    <div>
      <PermanentDrawerLeft />
      <h1>hii</h1>
      <Outlet />
    </div>
  );
};

export default AllProducts;
