console.log("Welcome to the main module");

import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const plantUsage = usePlants();

console.log(harvestPlants(plantUsage))