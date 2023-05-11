import React from "react";
import ResponsiveAppBar from "../containers/navBar";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const tokenData = localStorage.getItem("tokenData");
  const token = JSON.parse(tokenData);

  const NavigatePerUser = () => {
    if (token) {
      return <Outlet />;
    } else {
      return <Navigate to={"/signin"} />;
    }
  };
  return (
    <div>
      <ResponsiveAppBar />
      {NavigatePerUser()}
    </div>
  );
};

export default MainLayout;
