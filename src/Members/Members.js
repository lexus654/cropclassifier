import React, { Component } from "react";
import styles from "./Members.module.css";
import Navbar from "../Navbar/Navbar";
import toliao from "../resource/imgs/Toliao.png";
import masipag from "../resource/imgs/Masipag.png";
import laz from "../resource/imgs/Laz.png";
import ponciano from "../resource/imgs/Ponciano.png";

function Members(props) {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <main className={styles.flexcontainer}>
        <div className={`${styles.description} ${styles.margin}`}>
          <p> Project Members</p>
        </div>
        <div className={styles.members}>
          <li>
            <img className={styles.img} src={masipag} alt="masipag"></img>
            <p className={styles.name}> John Loyd Masipag</p>
            <p className={styles.position}> Research Writer</p>
          </li>
          <li>
            <img className={styles.img} src={ponciano} alt="ponciano"></img>
            <p className={styles.name}> Mary Grace Ponciano</p>
            <p className={styles.position}> Research Writer</p>
          </li>
          <li>
            <img className={styles.img} src={laz} alt="laz"></img>
            <p className={styles.name}> Ronald Laz</p>
            <p className={styles.position}> Programmer</p>
          </li>
          <li>
            <img className={styles.img} src={toliao} alt="toliao"></img>
            <p className={styles.name}> Kyla Trisha Toliao</p>
            <p className={styles.position}> Designer</p>
          </li>
        </div>
        <div className={styles.description}>
          <p>Students from Technological University of the Philippines</p>
        </div>
      </main>
    </div>
  );
}

export default Members;
