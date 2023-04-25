import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../containers/home";
import Discount from '../containers/products/discount'
import SignUp from "../layouts/signUp";
import SignIn from "../layouts/signIn";
import BlogList from "../containers/blogs";
import ProductList from "../containers/products/products";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />}>
           <Route path="products/home" element={<ProductList />} />
           <Route path="products/discount" element={<Discount />} />
          </Route>
          <Route path="/Blogs" element={<BlogList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
