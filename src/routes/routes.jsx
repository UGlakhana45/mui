import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../containers/home";
import SignUp from "../containers/signUp";
import SignIn from "../containers/signIn";
import ProductList from "../containers/products/allProducts/products";
import AllProducts from "../layouts/allProducts";
import Offers from "../containers/products/offers";
import Contact from "../containers/contact";
import ProductDetails from "../containers/products/allProducts/productDetail";
import CartPage from "../containers/cart";
import Profile from "../containers/profile";
import Electronics from "../containers/products/electronics/electronics";
import ElectronicProductDetail from "../containers/products/electronics/electronicsProductDetails";
import WomenWearDetail from "../containers/products/Women's Wear/womenWearDetailed";
import WomenWear from "../containers/products/Women's Wear/womenWear";
import Cosmetics from "../containers/products/cosmetics/cosmetic";
import CosmeticsProductDetail from "../containers/products/cosmetics/cosmeticDetails";
import Footwear from "../containers/products/footwear/footwear";
import FootwearProductDetail from "../containers/products/footwear/footwearDetails";
import KidsWear from "../containers/products/kid's wear/kidsWear";
import KidsWearProductDetail from "../containers/products/kid's wear/kidsWearDetails";
import MensWear from "../containers/products/men's wear/mensWear";
import MensWearProductDetail from "../containers/products/men's wear/mensWearDetails";

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
            <Route path=":id" element={<ProductDetails />} />
            <Route path="electronics" element={<Electronics />}>
              <Route
                path=":electronics"
                element={<ElectronicProductDetail />}
              />
            </Route>
            <Route path="Women'swear" element={<WomenWear />}>
              <Route path=":womenWear" element={<WomenWearDetail />} />
            </Route>
            <Route path="Cosmetics" element={<Cosmetics />}>
              <Route path=":Cosmetics" element={<CosmeticsProductDetail />} />
            </Route>
            <Route path="Footwear" element={<Footwear />}>
              <Route path=":Footwear" element={<FootwearProductDetail />} />
            </Route>
            <Route path="kidsWear" element={<KidsWear />}>
              <Route path=":kidsWear" element={<KidsWearProductDetail />} />
            </Route>
            <Route path="mensWear" element={<MensWear />}>
              <Route path=":mensWear" element={<MensWearProductDetail />} />
            </Route>
            <Route path="offers" element={<Offers />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
