// VALUES AND VARIABLES
// let firstName = "Olha";
// console.log(firstName);
// let jonas_matilda = "JM";
// let $function = 27;
// let person = "johan";
// let PI = 3.1415;
// let myFirstJob = "programmer";
// let myCurrentJob = "teacher";
// console.log(myCurrentJob);

// DATA TYPES
// let booleanToChanhe = true;
// console.log(booleanToChanhe);
// console.log(typeof booleanToChanhe);
// booleanToChanhe = "changed";
// console.log(typeof booleanToChanhe);

// let randYear;
// console.log(randYear);
// console.log(typeof randYear);
// randYear = 1997;
// console.log(typeof randYear);

// console.log(typeof null);
// there's a JS error, typeof null here is object

// LET, CONST AND VAR
// let age = 30;
// age = 31;
// const birthYear = 1991;
// birthYear = 1990; //impossible. logical

// BASIC OPERATORS
// const currentYear = 2037;
// const ageJohan = currentYear - 1991;
// const ageSarah = currentYear - 2018;
// console.log(ageJohan, ageSarah);
// console.log(ageJohan * 2, ageJohan / 10, 2 ** 3);
// const firstName = "Olha";
// const lastName = "Balumatkina";
// console.log(firstName + " " + lastName);
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);
// console.log(ageJohan > ageSarah);
// console.log(ageSarah >= 20);
// const isFullAge = ageSarah >= 21;
// console.log(currentYear - 1991 > currentYear - 2018);

// OPERATOR PRECEDENCE
// const currentYear = 2037;
// const ageJohan = currentYear - 1991;
// const ageSarah = currentYear - 2018;
// console.log(currentYear - 1991 > currentYear - 2018);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageJohan + ageSarah) / 2; //works like in math
// console.log(ageJohan,ageSarah,averageAge);

// CHALLENGE #1
// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJonh = massJohn / heightJohn ** 2;
// let markHigherBMI = bmiMark > bmiJonh;
// console.log(markHigherBMI);

// STRINGS AND TEMPLATE LITERALS
// const firstName = "Olha";
// const lastName = "Balumatkina";
// const currentYear = 2038;
// const birthYear = 2002;
// const oldIntro =
//   "Hi, I'm " +
//   firstName +
//   " " +
//   lastName +
//   ", a " +
//   (currentYear - birthYear) +
//   "-year-old programmer :)";
// console.log(oldIntro);
// const modernIntro = `Hi, I'm ${firstName} ${lastName}, a ${
//   currentYear - birthYear
// }-year-old programmer :)`;
// console.log(modernIntro);

// IF/ELSE STATEMENTS
// const age = 19;
// if (age >= 18) {
//   console.log(`This person is able to take driving courses`);
// } else {
//   console.log(
//     `There's ${
//       18 - age
//     } more year(s) until this person can start taking driving courses`
//   );
// }
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(`${century} century`);

// CHALLENGE #2
// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJonh = massJohn / heightJohn ** 2;
// if (bmiMark > bmiJonh) {
//   console.log(`Mark's BMI (${bmiMark}) is higher that John's (${bmiJonh})`);
// } else {
//   console.log(`John's BMI (${bmiJonh}) is higher that Mark's (${bmiMark})`);
// }

//TYPE CONVERSION AND COERCION
//CONVERTION
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// const numb = Number(inputYear) + 1;
// console.log(numb);
// console.log(Number("jonah"));
// console.log(typeof NaN);
// console.log(String(2005), 2005);
// // COERCION
// console.log("I'm " + 55 + "-year-old meh");
// console.log("23" - "10" - 3); //10
// console.log("23" + "10" + 3); //23103
// console.log("23" * "2"); //46
// console.log("23" / "2"); //11.5
// let n = "1" + 1; //11
// n = n - 1; //10
// console.log(n);

//TRUTHY AND FALSY VALUES
// let money = 100;
// if (money) {
//   console.log(`Don't spend 'em all!`);
//   money -= 5;
//   console.log(`$${money} left`);
// } else {
//   console.log(`Looks like someone have to find a job..`);
//   money += 10;
//   console.log(`$${money} now`);
// }
// let height = 0;
// if(height == 0){
//   console.log(`height is defined`)
// } else {
//   console.log(`height is undefined`)
// }

//EQUALITY OPERATORS
// const age = 18;
// if (age === 18) console.log(`Grats! (strict)`);
// if (age == 18) console.log(`Grats! (loose)`);
// const favNumb = Number(prompt("What's your fav number?"));
// console.log(favNumb);
// console.log(typeof favNumb);
// if (favNumb % 2 === 0) console.log(`Great even number!`);
// else console.log(`Great odd number!`);

//LOGICAL OPERATORS
// const hasDriversLicence = false;
// const hasGoodVision = true;
// console.log(hasDriversLicence && hasGoodVision); //false
// console.log(hasDriversLicence || hasGoodVision); //true
// console.log(!hasDriversLicence); //true
// const isTired = true;
// console.log((hasDriversLicence && hasGoodVision) || isTired);
// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log(`Glad to announce, you are able to drive`);
// } else {
//   console.log(`Sadly you can't drive :(`);
// }

// CHALLENGE #3
// const dScore1 = 97;
// const dScore2 = 112;
// const dScore3 = 101;
// const kScore1 = 109;
// const kScore2 = 95;
// const kScore3 = 106;
// const dAverage = (dScore1 + dScore2 + dScore3) / 3;
// const kAverage = (kScore1 + kScore2 + kScore3) / 3;
// if (dAverage > kAverage && dAverage >= 100) {
//   console.log(`DOLPHINS are winners here!`)
// } else if (dAverage < kAverage  && kAverage >= 100) {
//   console.log(`KOALAS are winners here!`)
// } else if (dAverage === kAverage && dAverage >= 100 && kAverage >= 100) {
//   console.log(`DRAW!`)
// } else {
//   console.log(`looks like smth is broken`)
// }

//THE SWITCH STATEMENT
// const theDay = "monday";
// console.log(`SWITCH SYSTEM`);
// switch (theDay) {
//   case "monday":
//     console.log(`I'm planning course schedule`);
//     console.log(`I'm meeting with my coworkers`);
//     break;
//   case "tuesday":
//     console.log(`What a wonderful second day of a working week...`);
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log(`I'm preparing for my coding practice today!`);
//     break;
//   case "friday":
//     console.log(`Still working!`);
//     break;
//   case "saturday":
//   case "sunday":
//     console.log(`Having a deserved rest!`);
//     break;
//   default:
//     console.log(`the day isn't defined`);
// }
// console.log(`IF-ELSE SYSTEM`);
// if (theDay === "monday") {
//   console.log(`I'm planning course schedule`);
//   console.log(`I'm meeting with my coworkers`);
// } else if (theDay === "tuesday") {
//   console.log(`What a wonderful second day of a working week...`);
// } else if (theDay === "wednesday" || theDay === "thursday") {
//   console.log(`I'm preparing for my coding practice today!`);
// } else if (theDay === "friday") {
//   console.log(`Still working!`);
// } else if (theDay === "saturday" || theDay === "sunday") {
//   console.log(`Having a deserved rest!`);
// } else {
//   console.log(`the day isn't defined`);
// }

//TERNARY OPERATOR
// const age = 25;
// age <= 18
//   ? console.log(`I'm a water drinking fan 💧`)
//   : console.log(`I'm a wine drinking fan 🍷`);
// const ternAgeDrink = age <= 18 ? "water 💧" : "wine 🍷";
// console.log(ternAgeDrink);
// let ifAgeDrink;
// if (age <= 18) ifAgeDrink = "water 💧";
// else ifAgeDrink = "wine 🍷";
// console.log(ifAgeDrink);
// console.log(`I like to drink ${age <= 18 ? "water 💧" : "wine 🍷"}`);

// CHALLENGE #4
// const billValue = 430;
// const tip = billValue >= 50 && billValue <= 300 ? billValue*0.15 : billValue*0.2;
// console.log(`This bill was ${billValue}, the tip was ${tip}, the total is ${billValue + tip}`);
