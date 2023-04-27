import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../containers/home";
import Discount from "../containers/products/discount";
import SignUp from "../layouts/signUp";
import SignIn from "../layouts/signIn";
import BlogList from "../containers/blogs";
import ProductList from "../containers/products/products";
import AllProducts from "../layouts/allProducts";
import Electronics from "../containers/products/electronics";
import HomeAppliances from "../containers/products/Home&Appliances";
import Offers from "../containers/products/offers";
import Profile from "../containers/profile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/products" element={<AllProducts />}>
            <Route index element={<ProductList />} />
            <Route path="/home/products/discount" element={<Discount />} />
            <Route
              path="/home/products/Electronics"
              element={<Electronics />}
            />
            <Route
              path="/home/products/Home&Appliances"
              element={<HomeAppliances />}
            />
            <Route path="/home/products/offers" element={<Offers />} />
          </Route>
          <Route path="/home/Blogs" element={<BlogList />} />
          <Route path="/home/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
