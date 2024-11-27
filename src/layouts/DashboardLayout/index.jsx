import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
