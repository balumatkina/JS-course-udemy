"use strict";

// FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//   const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return description;
// }
// const descriptionUkraine = describeCountry("Ukraine", 43.79, "Kyiv");
// const descriptionFinland = describeCountry("Finland", 6, "Helsinki");
// const descriptionJapan = describeCountry("Japan", 125.46, "Tokio");
// console.log(
//   `Welcome to Ukraine: ${descriptionUkraine}; Welcome to Finland: ${descriptionFinland}; Welcome to Japan: ${descriptionJapan}!`
// );

// FUNCTION DECLARATIONS AND EXPRESSIONS
// ARROW FUNCTIONS
// function percentageOfWorldDecl(population) {
//   return (population / 8000) * 100;
// }
// const percentPopulUkraine = percentageOfWorldDecl(43.79);
// const percentPopulFinland = percentageOfWorldDecl(6);
// const percentPopulJapan = percentageOfWorldDecl(125.46);
// console.log(`DECLARATION:
// Percents of population for Ukraine: ${percentPopulUkraine};
// Percents of population for Finland: ${percentPopulFinland};
// Percents of population for Japan: ${percentPopulJapan};`);
// const percentageOfWorldExpr = function (population) {
//   return (population / 8000) * 100;
// };
// const perPopulUkraine = percentageOfWorldExpr(43.79);
// const perPopulFinland = percentageOfWorldExpr(6);
// const perPopulJapan = percentageOfWorldExpr(125.46);
// console.log(`EXPRESSION:
// Percents of population for Ukraine: ${perPopulUkraine};
// Percents of population for Finland: ${perPopulFinland};
// Percents of population for Japan: ${perPopulJapan};`);
// const percentageOfWorldArr = (population) => (population / 8000) * 100;
// const pplUkraine = percentageOfWorldArr(43.79);
// const pplFinland = percentageOfWorldArr(6);
// const pplJapan = percentageOfWorldArr(125.46);
// console.log(`ARROW:
// Percents of population for Ukraine: ${perPopulUkraine};
// Percents of population for Finland: ${perPopulFinland};
// Percents of population for Japan: ${perPopulJapan};`);

// FUNCTIONS CALLING PTHER FUNCTIONS
// const percentageOfWorldArr = (population) => (population / 8000) * 100;
// const describePopulation = (country, population) =>
//   `${country} has ${population} million people, which is about ${percentageOfWorldArr(
//     population
//   )}% of the world.`;
// const descUkraine = describePopulation("Ukraine", 43.79);
// const descFinland = describePopulation("Finland", 6);
// const descJapan = describePopulation("Japan", 125.46);
// console.log(descUkraine, descFinland, descJapan);

//ARRAYS
// const pUkraine = 43.79;
// const pFinland = 6;
// const pJapan = 125.46;
// const pRand = 158;
// const populations = [pUkraine, pFinland, pJapan, pRand];
// if (populations.length == 4) console.log(`the array's length is 4`);
// else console.log(`the array's length isn't 4`);
// const percentageOfWorld = (population) => (population / 8000) * 100;
// const percentages = [
//   percentageOfWorld(pUkraine),
//   percentageOfWorld(pFinland),
//   percentageOfWorld(pJapan),
//   percentageOfWorld(pRand),
// ]; //want to use forEach but dunno how to
// console.log(percentages);

//ARRAY METHODS
// const neighbours = new Array(
//   "Poland",
//   "Slovakia",
//   "Hungary",
//   "Romania",
//   "Moldova"
// );
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop("Utopia");
// console.log(neighbours);
// if (!neighbours.includes("Genmany"))
//   console.log(`Probably not a central European country`);
// neighbours[neighbours.indexOf("Romania")] = "Land of Vampires";
// console.log(neighbours);
