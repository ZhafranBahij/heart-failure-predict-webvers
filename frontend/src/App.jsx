import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./route/Home";
import About from "./route/About";
import OurTeam from "./route/OurTeam";
import Prediction from "./route/Prediction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="our" element={<OurTeam />} />
        <Route path="predict" element={<Prediction />} />
      </Routes>
    </>
  );
}

export default App;
