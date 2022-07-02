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
    {
      plantName: "Apple",
      plantImg: AppleI,
      instructions: [
        "Remove apple seeds from the cores of several apples.",
        "Dry the seeds on a paper towel.",
        "Mix the seeds with peat moss.",
        "Put the seeds and peat moss in a bag and refrigerate.",
        "Weed your garden plot. Locate an area of your yard or garden where you intend to plant the apple seeds.",
        "After weeding, spread a one inch (2.54 cm) layer of compost over the soil.",
        "Using your hands or a garden spade to create an inch-deep (2.54 cm) furrow, or small trench, in the soil.",
        "After you dig the furrows, plant the apple seeds in the ground, spacing each seed 12 inches (30.4 cm) apart from the next.",
        "After planting the sprouted seeds, brush a thin layer of soil over the furrows to protect them. Then sprinkle on a one inch (2.54 cm) layer of sand on top of the soil you brushed over.",
      ],
    },
    {
      plantName: "Banana",
      plantImg: BananaI,
      instructions: [
        "Prepare. Put seeds in a seed tray indoors. Use potting soil with lots of organic compost and more than half sandy/airy loam. As the seed sprouts and matures, it will need the nutrients provided by the compost.",
        "Sow. Sow seeds .25 inches deep in the tray. Sowing seeds outdoors in a bed is not possible unless the soil temperature remains above 68 degrees Fahrenheit.",
        "Water. Water the tray so that the soil becomes moist, but not soggy. Take care not to drown the seed, only maintain conditions that are damp as the seed settles in and begins to germinate. Soil that is too wet can cause the seed to rot.",
        "Pay attention to temperature. Use a heat mat on a timer to maintain an indoor soil temperature of at least 60 degrees Fahrenheit. Depending on the variety of the banana, it may need as much as 19 hours of cool temperatures and only 5 hours of warm, but research your seed to maintain the correct ratio.",
      ],
    },
    {
      plantName: "Coconut",
      plantImg: CoconutI,
      instructions: [
        "Soak the coconut in water for three days.",
        "Fill a 12-inch container with a well-draining potting soil that has some extra vermiculite or sand mixed in.",
        "Dry them in a shady place.",
        "Plant your coconut with the pointy side down, and the top ⅓ of your coconut should remain uncovered.",
        "Place the container in a spot that’s warm and well-lit—at least 70°F.",
        "Water frequently, but don’t let the soil get soggy and waterlogged. It’s much easier to avoid soggy soil—if you follow step 2 and make sure the soil is extra sandy and fast-draining!",
      ],
    },
    {
      plantName: "Coffee",
      plantImg: CoffeeI,
      instructions: [
        "Use ripe coffee cherries when possible. ",
        "Sow the seeds. Fill a 2 oz (60 ml) container with agricultural sand or vermiculite.",
        "Keep the seeds moist. ",
        "Transfer the germinated seed to a larger container. ",
        "Watch over the seed until it turns into a seedling. You should continue to water the seedling once each day.",
        "Choose the best possible location outdoors with deep, porous soil that the roots can easily move through.",
        "Clear the area and improve the soil. ",
        "Plant the seedlings. plant your trees in rows spaced 3 yards (3 meters) apart. Dig holes roughly that are 20 inches (50 cm) in depth, width, and length.",
        "Cover the soil. To preserve the moisture and nutrients in the soil, you should cover the soil with a loose, light layer of grass mulch or rotting leaves.",
        "Water regularly until the tree is established. ",
      ],
    },
    {
      plantName: "Corn",
      plantImg: CornI,
      instructions: [
        "Sow the corn seeds 1 to 2 inches deep.",
        "Space the seeds to 12 inches apart in a row, with the rows set 24 inches apart.",
        "Water the bed until the top 6 inches of soil are moist, then continue to water as needed so the soil doesn't dry out during the germination period.",
      ],
    },
    {
      plantName: "Cotton",
      plantImg: CottonI,
      instructions: [
        "Pick a sunny location for your cotton bed. Cotton seeds like plenty of heat and sun for optimal growing conditions.",
        "Add 1 cubic foot (0.3 cubic meters) bag of fertilizer for every 6 square feet (0.56 m2) of soil.",
        "Dampen the soil before planting.",
        "Mold the soil into small rows. Each hill should be about 3 to 4 inches (7.6 to 10.2 cm) tall, and aim for hills that are about 3 feet (0.91 m) apart from each other.",
        "Dig a hole every 1.5 feet (0.46 m).[8] Go to a depth of 0.5 to 0.7 inches (1.3 to 1.8 cm).",
        "Drop 2-3 seeds in every hole you've dug.",
        "Water the plants about once a week. Cotton likes the heat and won't take kindly to overwatering. Even in hot, dry weather, it will generally still do fine.",
      ],
    },
    {
      plantName: "Grapes",
      plantImg: GrapesI,
      instructions: [
        "Soak the seeds in tepid water for 24 hours before planting. ",
        "Then put them in a small container with some damp peat moss.",
        " Use about 50 seeds per tablespoon of peat moss. ",
        "Put a lid on the container and keep it in your refrigerator at 35 to 40 degrees Fahrenheit for three months.",
      ],
    },
    {
      plantName: "Jute",
      plantImg: JuteI,
      instructions: [
        "Plant jute in a hot, humid climate and it cannot tolerate freezing temperatures",
        "Fill a planting pot with rich potting soil.",
        "Sow the jute seeds on top of the soil, separating them by at least 1 inch. Cover the seeds with the thinnest possible layer of soil.",
        "Place the pot in a warm, sunny location. A southern window is frequently the best choice for growing jute indoors.",
        "Remove all the jute seedlings from the pot except the tallest one when it reaches 6 to 8 inches in height.",
        "Place the jute plant outside in full sun whenever the outside temperature is above room temperature.",
      ],
    },
    {
      plantName: "Mango",
      plantImg: MangoI,
      instructions: [
        "Cut open mango to remove seed. The seed will be inside a husk.",
        "Clean the seed husk",
        "Using a pair of strong scissors, such as kitchen shears, carefully cut the edge of the seed husk, allowing you to open the husk and remove the seed. The seed will be slippery, so proceed with caution. Sometimes the seed may have a papery coat, as seen in the photo below. Remove this before proceeding to the next step.",
        "Soak the seed in a cup of water for 24 hours.",
        "Moisten a paper towel. Make sure it is damp throughout, but not soaking wet. Wrap the seed in the paper towel. ",
        "Place the seed and paper towel inside a sandwich bag and store the seed in a warm place.",
        "Monitor the seed’s progress every few days, watching for sprouts. Germination time will depend on air temperature and the mango’s ripeness when the seed was extracted.",
        "Plant the seed in potting soil, making sure not to cover the new leaves.",
      ],
    },
    {
      plantName: "Mungbean",
      plantImg: MungbeanI,
      instructions: [
        "Loosen the top 6 inches of the planting site's soil. Sprinkle 4 inches of compost on top, applying 1.2 cubic yards of compost per 100 square feet. Till the compost into the top 4 inches of soil.",
        "Soak the mung bean seeds in a cup of water for two to four hours. Put a few tablespoons of an inoculant formulated for peas in a resealable plastic bag.",
        "Drain the water from the cup, then put the damp seeds in the bag of inoculant. Seal the bag tightly. Shake the bag until the seed is evenly coated with the inoculant.",
        "Water the planting site's soil until it is evenly moist. Plant seed 1 to 2 inches deep in the damp soil. Sow the seeds in 30-inch rows, spacing seeds two inches apart. Set rows two feet apart.",
        "Keep the soil evenly moist and free from weeds until germination.",
      ],
    },
    {
      plantName: "Muskmelon",
      plantImg: MuskmelonI,
      instructions: [
        " Sow seeds 1 inch deep in rows, or hills spaced 6 feet apart. ",
        "after 2-3 weeks, thin to 2 plants per hill. ",
        "To prevent insect problems and encourage early strong growth, cover muskmelon seedlings with row cover tunnels until they begin to blossom flower.",
      ],
    },
    {
      plantName: "Orange",
      plantImg: OrangeI,
      instructions: [
        "Save your orange seeds. Immediately wash them in tepid water and begin the planting process. You can use the paper towel method for germination, but the soil method, described here, is more effective.",
        "Prepare a container with sterile potting soil. Before filling it with soil, create drainage holes. Paper cups tend to dry out sooner, so if you are punching holes in the bottom of the container for drainage, do about four for plastic and two for paper.",
        "Plant the seeds 1/2 inch under the potting soil. Add enough water to moisten the soil, but don't let it get soggy.",
        "Cover the cup with either a plastic bag or plastic wrap. Keep checking to make certain that it remains moist.",
        "Store the pot in a warm place. Sunlight is not necessary at this time. Directly in front of a radiator is not a good idea because of the drying effect.",
        "Move to a sunny area and remove the plastic once the seed has sprouted. Maintain moisture. Transplant to a more permanent container when the seedling is large enough.",
      ],
    },
    {
      plantName: "Papaya",
      plantImg: PapayaI,
      instructions: [
        "Wash the seeds from a ripe papaya.",
        "Squeeze the seeds from the jelly bag that covers each seed. The seeds will only grow if you remove the bag.",
        "Dry them in a shady place.",
        "Store in a tightly closed container and keep them until December.",
        "Plant the seeds in December. Put 5 seeds to a hole. Do not put any compost or manure into the holes.",
        "Keep the small plants moist.",
        "You can only tell which trees are female and which are male when the trees start to flower. Therefore, you should always have more than one tree per hole, because then you can select the female trees.",
      ],
    },
    {
      plantName: "Rice",
      plantImg: RiceI,
      instructions: [
        "Remove apple seeds from the cores of several apples.",
        "Dry the seeds on a paper towel.",
        "Mix the seeds with peat moss.",
        "Put the seeds and peat moss in a bag and refrigerate.",
        "Weed your garden plot. Locate an area of your yard or garden where you intend to plant the apple seeds.",
        "After weeding, spread a one inch (2.54 cm) layer of compost over the soil.",
        "Using your hands or a garden spade to create an inch-deep (2.54 cm) furrow, or small trench, in the soil.",
        "After you dig the furrows, plant the apple seeds in the ground, spacing each seed 12 inches (30.4 cm) apart from the next.",
        "After planting the sprouted seeds, brush a thin layer of soil over the furrows to protect them. Then sprinkle on a one inch (2.54 cm) layer of sand on top of the soil you brushed over.",
      ],
    },
    {
      plantName: "Watermelon",
      plantImg: WatermelonI,
      instructions: [
        " Amend your soil with at least 1-2 inches of compost before planting your watermelon seeds.",
        " 7-14 days after your last frost date, sow seeds 1/2″ deep in the soil in small hills or rows spaced 36″ apart. In the hills, plant 6-8 seeds; in the rows, plant 2-3 seeds every 36″.",
        "Once the seedlings have started to grow and the true leaves are formed (not the initial leaves that came up with the seedling), use small snips to thin the seedlings to 2-3 per hill or one plant every 36″ in a row.",
      ],
    },
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
        {instructions[num].instructions.map((list, index) => {
          return <li className={styles.instructionsBody}>{list}</li>;
        })}
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
