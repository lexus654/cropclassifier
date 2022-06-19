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

  const click = true;

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.flexContainer}>
        <div className={styles.imgContainer}>
          {plants.map((plant) => {
            return (
              <div className={styles.plantsBtns}>
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

        {/* create a function of this  */}
        {/* add a state  */}
        {/* state will update the function that will display the image on the left */}
        {click ? (
          <p style={{ color: "white" }}>hello</p>
        ) : (
          <p style={{ color: "white" }}> not hello</p>
        )}
      </div>
    </>
  );
}

export default Plant;
