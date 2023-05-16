import React from "react";
import ResponsiveAppBar from "../containers/navBar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const {token} = useSelector((state) => state.auth)

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
