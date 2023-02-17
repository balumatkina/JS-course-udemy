"use strict";

// FUNCTIONS
// function juiceProcessor(apples, oranges) {
//   const madeJuice = `Juise with ${apples} apple(s) and ${oranges} orange(s).`;
//   return madeJuice;
// }
// const appleJuice = juiceProcessor(10, 0);
// const orangeJuice = juiceProcessor(0, 10);
// const appleOrangeJuice = juiceProcessor(10, 10);
// console.log(
//   `Apple juice: ${appleJuice}, Orange juice: ${orangeJuice}, Apple Orange juice: ${appleOrangeJuice}`
// );

// FUNCTION DECLARATIONS AND EXPRESSIONS
// ARROW FUNCTIONS
// const ageDecl = calcAgeDeclaration(2042, 2002);
// //can be called before initializing
// function calcAgeDeclaration(currentYear, birthYear) {
//   return currentYear - birthYear;
// }
// const calcAgeExpression = function (currentYear, birthYear) {
//   return currentYear - birthYear;
// };
// const ageExpr = calcAgeExpression(2042, 2002);
// const calcAgeArrow = (currentYear, birthYear) => currentYear - birthYear;
// const ageArrow = calcAgeArrow(2042, 2002);
// console.log(
//   `Declaration result: ${ageDecl}, expression result: ${ageExpr}, arrow result: ${ageArrow}.`
// );
// const yearsUntilRetirement = (personName, personBirthYear, currentYear) => {
//   // const personAge = currentYear - personBirthYear;
//   // const yearsToRetirement = 65 - personAge;
//   // return `${personName} will have to retire in ${yearsToRetirement} year(s).`;
//   return `${personName} will have to retire in ${
//     65 - (currentYear - personBirthYear)
//   } year(s).`;
// };
// const retireBob = yearsUntilRetirement("Bob", 2003, 2056);
// const retireJonh = yearsUntilRetirement("John", 1998, 2056);
// console.log(retireBob, retireJonh);

// FUNCTIONS CALLING OTHER FUNCTIONS
// const cutFruitPieces = (fruit) => fruit * 4;
// function juiceProcessor(apples, oranges) {
//   const applePeices = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   return `Juise with ${applePeices} pieces of apple and ${orangePieces} pieces of orange.`;
// }
// const appleJuice = juiceProcessor(10, 0);
// const orangeJuice = juiceProcessor(0, 10);
// const appleOrangeJuice = juiceProcessor(10, 10);
// console.log(appleJuice, orangeJuice, appleOrangeJuice);

// CODING CHALLENGE #1
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2)
//     console.log(
//       `THE WINNERS are Dolphins! (Dolphins: ${avgDolphins} VS Koalas: ${avgKoalas})`
//     );
//   else if (avgKoalas >= avgDolphins * 2)
//     console.log(
//       `THE WINNERS are Koalas! (Dolphins: ${avgDolphins} VS Koalas: ${avgKoalas})`
//     );
//   else console.log(`no winner.`);
// };
// const clacAverage = (a, b, c) => (a, b, c) / 3;
// let testScoresD = clacAverage(44, 23, 71);
// let testScoresK = clacAverage(65, 64, 49);
// checkWinner(testScoresD, testScoresK);
// testScoresD = clacAverage(85, 54, 41);
// testScoresK = clacAverage(23, 34, 27);
// checkWinner(testScoresD, testScoresK);
// checkWinner(300, 150);

//ARRAYS
// const friends = ["Abby", "Petro", "Steven"];
// console.log(friends);
// console.log(friends[0]); //abby
// console.log(friends[2]); //steven
// console.log(friends.length);
// friends[2] = "Mike";
// console.log(friends);
// const firstName = "Olha";
// const OB = [firstName, "Balumatkina", 2057 - 2002, friends];
// console.log(OB);
// console.log(OB.length);
// const calcAge = (birthYear) => 2057 - birthYear;
// const years = new Array(1991, 1984, 2008, 2020, 2040);
// console.log(calcAge(years[2]));
// console.log(calcAge(years[years.length - 1]));
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
//   calcAge(years[4]),
// ]; //forEach?
// console.log(ages);

//ARRAY METHODS
// const friends = ["Mike", "Dany", "Hellen"];
// const newLength = friends.push("Kate");
// console.log(newLength);
// console.log(friends);
// friends.unshift("Jake");
// console.log(friends);
// const lastFriend = friends.pop();
// console.log(lastFriend);
// const firstFriend = friends.shift();
// console.log(firstFriend);
// console.log(friends.indexOf("Dany"));
// if (friends.includes("Hellen")) console.log(`You have a friend named Hellen`);
// friends.push(23);
// console.log(`includes "23": ${friends.includes("23")}
// includes 23: ${friends.includes(23)}`);

// CODE CHALLENGE #3
// const calcTip = (billValue) =>
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(`bills: ${bills}
// tips: ${tips}
// total: ${total}`);

