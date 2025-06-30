import React from "react";
import Navbar from "pages/Navbar";
import Sidebar from "pages/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="div-flex-row sub-page-layout">
        <Sidebar />
        <div className="main-content text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
