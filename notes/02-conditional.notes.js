// Define a variable myFavGame and assign it some string value.
let myFavGame = "Baldur's gate 3"
let friendsGame = "Baldur's gate 3"

let otherFavGame = "Crash Bandicoot"

// if (myFavGame === friendsGame) {
//     console.log("WHOA we have the same taste!");
//     // prints
// }

// if (myFavGame !== otherFavGame) {
//     console.log("Nope we do not have the same taste");
//     // with negation, prints
// }

const yourName = "Andrew"
const nameToBoolean = !!yourName  // true, b/c "Andrew" starts as a "truthy" value
// console.log(nameToBoolean);

const testGrade = 0
const gradeToBool = !!testGrade   // false, b/c 0 starts as a 'falsy' value
// console.log(gradeToBool);

// Define a var called foodIWantRightNow and assignIt
let foodIWantRightNow = "shakshuka"
let foodILike = "steak"

// if (foodIWantRightNow !== "nothing") {
//     console.log("Let's head out and look for a bite.");
// } else if (foodIWantRightNow === foodILike) {
//     console.log("Let's go get some fucking steak!!!")
// } else {
//     console.log("Guess I'm not that hungry")
// }


// console.log(4 < 3 || 2 < 3); // false || true -> true b/c there's any true in the OR chain
// console.log(5 * 3 > 10 && 4 + 6 === 11) // false b/c AND requires all to be true to resolve to true


const otherFoodILike = "shakshuka"

// if (foodIWantRightNow === foodILike || foodIWantRightNow === otherFoodILike) {
//     console.log(`Let's go get some fucking ${foodIWantRightNow}!!!`)
// } else {
//     console.log("Guess I'm not that hungry")
// }


const condition = 57 > 3

// We can use ternaries to assign values conditional inline
const hasPantsOn = condition ? "defo wearing pants" : "freeballing"
// console.log(hasPantsOn)


// syntax for switch
// switch (valueYoureTesting) {
//   case someVal:
//     do stuff
//   case otherVal:
//     do diffStuff
//   default:
//     do defaultStuff
// }

const carMake = "GM"

// switch (carMake) {
//     case "Ford":
//         console.log("It's a Ford!")
//         break;
//     case "Toyota":
//         console.log("It's a Toyota!")
//         break;
//     case "GM":
//         console.log("It's a GM!")
//         break;
//     default:
//         console.log("It's some other vehicle")
// }

const fruit = "Pineapple"

switch (fruit) {
    case "Apples":
    case "Pears":
    case "Avocadoes":
        console.log("Apples, pears, and avocadoes are on sale until the end of the week!");
        break;
    case "Pineapple":
        console.log("Ooooo, nice choice.");
        break;
    default:
        console.log("Sorry, looks like we don't have the fruit you're looking for.")

}