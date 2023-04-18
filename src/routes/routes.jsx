import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimarySearchAppBar from "../containers/navBar";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimarySearchAppBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
