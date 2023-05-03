import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../containers/home";
import Discount from "../containers/products/discount";
import SignUp from "../containers/signUp";
import SignIn from "../containers/signIn";
import BlogList from "../containers/blogs";
import ProductList from "../containers/products/products";
import AllProducts from "../layouts/allProducts";
import Electronics from "../containers/products/electronics";
import HomeAppliances from "../containers/products/Home&Appliances";
import Offers from "../containers/products/offers";
import Profile from "../containers/profile";
import Contact from "../containers/contact";
import ProductDetails from "../containers/productDetail";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />}>
            <Route index element={<ProductList />} />
            <Route path="/products/discount" element={<Discount />} />
            <Route path="/products/:Electronics" element={<Electronics />} />
            <Route
              path="/products/Home&Appliances"
              element={<HomeAppliances />}
            />
            <Route path="/products/offers" element={<Offers />} />
            <Route
              path="/products/productDetails/:id"
              element={<ProductDetails />}
            />
            <Route
              path="/products/discount/productDetails/:did"
              element={<ProductDetails />}
            />
          </Route>
          <Route path="/Blogs" element={<BlogList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
