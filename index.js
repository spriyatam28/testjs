let animals = [
    {name: "Tom", species: "dog"},
    {name: "Mike", species: "dog"},
    {name: "Jerry", species: "mouse"},
    {name: "Clara", species: "cat"},
    {name: "Amu", species: "snake"},
    {name: "Makima", species: "bat"}
];

let dogs = animals.filter(animal => animal.species === "dog").map(animal => animal.name);

let otherAnimals = animals.filter(animal => animal.species !== "dog").map(animal => animal.name);

console.log(dogs);
console.log(otherAnimals);
