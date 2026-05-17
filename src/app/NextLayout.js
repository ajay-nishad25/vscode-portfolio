"use client";
import React from "react";
import Navbar from "views/Navbar";
import Sidebar from "views/Sidebar";
import Footer from "views/Footer";

export default function NextLayout({ children }) {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="div-flex-column sub-page-layout">
        <div className="div-flex-row sub-page-layout">
          <Sidebar />
          <div className="main-content text-white">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
