import "./App.css";
import React from "react";
import WorkPage from "../WorkPage/WorkPage";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import LandingPage from "../LandingPage/LandingPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MyWork" element={<WorkPage />} />
        <Route path="/AboutMe" element={<AboutPage />} />
        <Route path="/ContactMe" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
