import React, { Component } from "react";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import hand from "../resource/imgs/hand.png";

function Home(props) {
  return (
    <main className={styles.container}>
      <Navbar />
      <div className={styles.flexContainer}>
        <div className={styles.firstColumn}>
          <p className={styles.title}>
            DISCOVER WHAT SUITABLE<br></br> SOIL FOR YOUR CROPS
          </p>
          <p className={styles.info}>
            {" "}
            What is soil explain? Image result for what is soil Soil is the thin
            layer of material covering the earth's surface and is formed from
            the weathering of rocks. It is made up mainly of mineral particles,
            organic materials, air, water and living organisms—all of which
            interact slowly yet constantly
          </p>
        </div>
        <div className={styles.secondColumn}>
          <img className={styles.hand} alt="hand" src={hand}></img>
        </div>
      </div>
      <iframe src="https://test-app-ronald.herokuapp.com/"></iframe>
    </main>
  );
}

export default Home;
