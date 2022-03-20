import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@assets/css/styles.css";
import Home from "@pages/Home";
import CreditCheck from "@pages/CreditCheck";
import Header from "@components/include/Header";
import Footer from "@components/include/Footer";

function App() {
  return (
    <div className="sb-nav-fixed">
      <Header />
      <div id="layoutSidenav">
        <div id="layoutSidenav_content" style={{ paddingLeft: 0 }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CreditCheck" element={<CreditCheck />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
