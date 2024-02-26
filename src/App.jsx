import { useState } from "react";
import React from "react";
import "./App.css";
import AboutT from "./pages/about/AboutMob";
import Contact from "./pages/contact/contact";
import Home_main from "./pages/home/Home_main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_main />} />
        <Route path="/aboutUs" element={<AboutT />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
