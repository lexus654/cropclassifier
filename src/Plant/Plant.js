// PLANT IMAGES
import Apple from "../resource/imgs/plants/Apple.png";
import Banana from "../resource/imgs/plants/Banana.png";
import Coconut from "../resource/imgs/plants/Coconut.png";
import Coffee from "../resource/imgs/plants/Coffee.png";
import Corn from "../resource/imgs/plants/Corn.png";
import Cotton from "../resource/imgs/plants/Cotton.png";
import Grapes from "../resource/imgs/plants/Grapes.png";
import Jute from "../resource/imgs/plants/Jute.png";
import Mango from "../resource/imgs/plants/Mango.png";
import Mungbean from "../resource/imgs/plants/Mungbean.png";
import Muskmelon from "../resource/imgs/plants/Muskmelon.png";
import Papaya from "../resource/imgs/plants/Papaya.png";
import Rice from "../resource/imgs/plants/Rice.png";
import Watermelon from "../resource/imgs/plants/Watermelon.png";
import Orange from "../resource/imgs/plants/Orange.png";
import Navbar from "../Navbar/Navbar";
// instructions
import AppleI from "../resource/imgs/instructions/AppleI.png";
import BananaI from "../resource/imgs/instructions/BananaI.png";
import CoconutI from "../resource/imgs/instructions/CoconutI.png";
import CoffeeI from "../resource/imgs/instructions/CoffeeI.png";
import CornI from "../resource/imgs/instructions/CornI.png";
import CottonI from "../resource/imgs/instructions/CottonI.png";
import GrapesI from "../resource/imgs/instructions/GrapesI.png";
import JuteI from "../resource/imgs/instructions/JuteI.png";
import MangoI from "../resource/imgs/instructions/MangoI.png";
import MungbeanI from "../resource/imgs/instructions/MungbeanI.png";
import MuskmelonI from "../resource/imgs/instructions/MuskmelonI.png";
import PapayaI from "../resource/imgs/instructions/PapayaI.png";
import RiceI from "../resource/imgs/instructions/RiceI.png";
import WatermelonI from "../resource/imgs/instructions/WatermelonI.png";
import OrangeI from "../resource/imgs/instructions/OrangeI.png";
import { useState } from "react";

// stylesheet
import styles from "./Plant.module.css";

function Plant(props) {
  const plants = [
    { plantName: "Apple", plantImg: Apple },
    { plantName: "Banana", plantImg: Banana },
    { plantName: "Coconut", plantImg: Coconut },
    { plantName: "Coffee", plantImg: Coffee },
    { plantName: "Corn", plantImg: Corn },
    { plantName: "Cotton", plantImg: Cotton },
    { plantName: "Grapes", plantImg: Grapes },
    { plantName: "Jute", plantImg: Jute },
    { plantName: "Mango", plantImg: Mango },
    { plantName: "Mungbean", plantImg: Mungbean },
    { plantName: "Muskmelon", plantImg: Muskmelon },
    { plantName: "Orange", plantImg: Orange },
    { plantName: "Papaya", plantImg: Papaya },
    { plantName: "Rice", plantImg: Rice },
    { plantName: "Watermelon", plantImg: Watermelon },
  ];
  const instructions = [
    { plantName: "Apple", plantImg: AppleI },
    { plantName: "Banana", plantImg: BananaI },
    { plantName: "Coconut", plantImg: CoconutI },
    { plantName: "Coffee", plantImg: CoffeeI },
    { plantName: "Corn", plantImg: CornI },
    { plantName: "Cotton", plantImg: CottonI },
    { plantName: "Grapes", plantImg: GrapesI },
    { plantName: "Jute", plantImg: JuteI },
    { plantName: "Mango", plantImg: MangoI },
    { plantName: "Mungbean", plantImg: MungbeanI },
    { plantName: "Muskmelon", plantImg: MuskmelonI },
    { plantName: "Orange", plantImg: OrangeI },
    { plantName: "Papaya", plantImg: PapayaI },
    { plantName: "Rice", plantImg: RiceI },
    { plantName: "Watermelon", plantImg: WatermelonI },
  ];
  const [count, setCount] = useState("");
  const [click, setClick] = useState(false);

  const show = (num) => {
    setCount(
      <div>
        <p className={styles.intructionsTitle}>{instructions[num].plantName}</p>
        <div className={styles.intructions}>
          <img
            className={styles.intructionsImg}
            src={instructions[num].plantImg}
            alt={`${instructions[num].plantName}`}
          ></img>
        </div>
        <p className={styles.instructionsHeadings}>Instructions</p>
        <li className={styles.instructionsBody}>
          lilan around the rice-growing season. The olitimal growing season for
          rice is from March through October, and the rice will take roughly six
          months to grow until its ready to be harvested.
        </li>
        <li className={styles.instructionsBody}>
          Purchase seeds from a local nursery or gardening store.
        </li>
        <li className={styles.instructionsBody}>
          Prepare your soil and area for planting
        </li>
        <li className={styles.instructionsBody}>
          Plant the seeds. Plant your soaked and germinated seeds in the soil
          roughly a half-inch deep and with around 6 inches of space between
          each seed.
        </li>
        <li className={styles.instructionsBody}>
          Flood your area. Fill your growing area with water until the soil has
          saturated and there is at least 2 inches of water above the soil. Your
          growing area needs to be constantly wet for the seeds to grow, so make
          sure your water isn’t draining too quickly.
        </li>
      </div>
    );
    setClick(true);
  };

  return (
    <main className={styles.bg}>
      <Navbar></Navbar>
      <p className={styles.number}>Total of 15 crops to choose from</p>
      {click ? (
        <div className={styles.flexContainer}>
          <div className={styles.imgContainer}>
            {plants.map((plant, index) => {
              return (
                <div onClick={() => show(index)} className={styles.plantsBtns}>
                  <img
                    className={styles.plantsImgs}
                    src={plant.plantImg}
                    alt={`${plant.plantName}`}
                  ></img>
                  <p>{plant.plantName}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.modalContainer}>{count} </div>
        </div>
      ) : (
        <div className={styles.flexContainer}>
          <div className={styles.imgContainer} style={{ width: "100%" }}>
            {plants.map((plant, index) => {
              return (
                <div onClick={() => show(index)} className={styles.plantsBtns}>
                  <img
                    className={styles.plantsImgs}
                    src={plant.plantImg}
                    alt={`${plant.plantName}`}
                  ></img>
                  <p>{plant.plantName}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}

export default Plant;
