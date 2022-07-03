// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./HomePage/Home";
import Members from "./Members/Members";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Plant from "./Plant/Plant";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<Members />} />
      <Route path="/home" element={<Home />} />
      <Route path="/plant" element={<Plant />} />
    </Routes>
  </BrowserRouter>
);
