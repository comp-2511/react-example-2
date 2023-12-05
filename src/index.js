import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/profiles/:profileID" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
