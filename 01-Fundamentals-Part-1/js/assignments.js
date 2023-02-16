// // VALUES AND VARIABLES
// const country = "Ukraine";
// const continent = "Europe";
// let population = 43.75;
// console.log(country);
// console.log(continent);
// console.log(population);

// // DATA TYPES
// const isIsland = false;
// let language;
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);
// language = "Ukrainian";

// // BASIC OPERATORS
// const splitPopulation = population / 2;
// console.log(splitPopulation);
// population++;
// console.log(population);
// population--;
// console.log(population > 6);
// console.log(population > 33);
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// // IF/ELSE STATEMENTS
// if (population > 33) {
//   console.log(
//     `${country}'s population is ${population - 33} million above average`
//   );
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// //TYPE CONVERSION AND COERCION
// console.log(`'9' - '5' = ${"9" - "5"}`);
// console.log(`'19' - '13' + '17' = ${"19" - "13" + "17"}`);
// console.log(`'19' - '13' + 17 = ${"19" - "13" + 17}`);
// console.log(`'123' < 57 = ${"123" < 57}`);
// console.log(`5 + 6 + '4' + 9 - 4 - 2 = ${5 + 6 + "4" + 9 - 4 - 2}`);

// //EQUALITY OPERATORS
// const numNeighbours = Number(prompt(
//   "How many neighbour countries does your country have?"
// ));
// if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

//LOGICAL OPERATORS
// const country = "Ukraine";
// const language = "Ukrainian"
// const isIsland = false;
// const population = 43.75;
// if (language==="English" && population < 50 && isIsland ===false) {
//   console.log(`Welcome to ${country}!`)
// } else {
//   console.log(`Looks like ${country} isn't for you :c`)
// }

//THE SWITCH STATEMENT
// const language = "Ukrainian";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log(`MOST number of native speakers!`);
//     break;
//   case "spanish":
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case "english":
//     console.log(`3rd place`);
//     break;
//   case "hindi":
//     console.log(`number 4`);
//     break;
//   case "arabic":
//     console.log(`5th most spoken language`);
//     break;
//   default:
//     console.log(`Your ${language} language is the best ever!`);
// }

//TERNARY OPERATOR
// const population = 43.75;
// const country = "Ukraine";
// console.log(
//   `${country}'s ${
//     population > 33
//       ? "population is above average"
//       : "population is below awerage"
//   }`
// );
