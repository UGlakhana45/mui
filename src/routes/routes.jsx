import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../containers/home";
import ProductsList from "../containers/products";
import SignUp from "../layouts/signUp";
import SignIn from "../layouts/signIn";
import BlogList from "../containers/blogs";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<ProductsList />} />
          <Route path="/Blogs" element={<BlogList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
