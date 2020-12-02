import { usePlants } from "./field.js";

    const seedObjects = [];

export const harvestPlants = (plants) => {
    for (const product of plants) {
        if (Array.isArray(product) === true) {
            for (const corn of product) {
            seedObjects.push(corn);
            }
        } else {
        seedObjects.push(product);
        }
    };
    return seedObjects;
};