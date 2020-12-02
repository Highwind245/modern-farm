let theField = [];

export const addPlant = (seed) => {
    Array.isArray(seed);
    theField.push(seed);
};

export const usePlants = () => { return theField; };