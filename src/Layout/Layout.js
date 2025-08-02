import React from "react";
import Navbar from "pages/Navbar";
import Sidebar from "pages/Sidebar";
import Footer from "pages/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="div-flex-column sub-page-layout">
        <div className="div-flex-row sub-page-layout">
          <Sidebar />
          <div className="main-content text-white">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
