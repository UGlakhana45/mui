import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimarySearchAppBar from "../containers/navBar";
import MainLayout from "../layouts/mainLayout";
import Home from "../containers/home";
import Products from "../containers/products";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
