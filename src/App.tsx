import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@assets/css/styles.css";
import Home from "@pages/Home";
import Header from "@components/include/Header";
import Footer from "@components/include/Footer";

function App() {
  return (
    <div className="sb-nav-fixed">
      <Header />
      <div id="layoutSidenav" style={{ marginBottom: "4rem" }}>
        <div id="layoutSidenav_content" style={{ paddingLeft: 0 }}>
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
