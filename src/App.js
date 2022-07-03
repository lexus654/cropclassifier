import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import Members from "./Members/Members";
import Plant from "./Plant/Plant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="members" element={<Members />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plant" element={<Plant />} />
      </Routes>
    </Router>
  );
}

export default App;
