import React, { Component } from "react";
import styles from "./Navbar.module.css";
import logo from "../resource/imgs/logo.png";
import { Link, Router, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const home = () => {
    // 👇️ navigate to /contacts
    navigate("/");
  };
  return (
    <ul className={styles.container}>
      <li>
        <img onClick={home} className={styles.logo} alt="logo" src={logo}></img>
      </li>
      <li>
        <a href="/members">About Page</a>
      </li>
      <li>
        <a href="/plant">How to Plant</a>
      </li>
      <li>
        <a href="/">Soil Analysis</a>
      </li>
    </ul>
  );
}

export default Navbar;
