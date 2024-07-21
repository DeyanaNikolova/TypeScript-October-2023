
import { Garden } from "./Garden";

const myGarden = new Garden(250);
myGarden.addPlant('apple', 20);
myGarden.addPlant('orange', 200);
myGarden.addPlant('rasberry', 10);
myGarden.ripenPlant('apple', 10);
myGarden.ripenPlant('orange', 1);
myGarden.harvestPlant('orange');

console.log(myGarden.generateReport());