const val1 = 420
// console.log(typeof val1) // Number

const val2 = `andrew`
// console.log(typeof val2) // String (NB: backticks)

const val3 = "12386"
// console.log(typeof val3) // String (NB: double quotes)

const val4 = "This is a sentence that also has numbers and symbols 123097517812!@5!@%^!$%^"
// console.log(typeof val4) // String!

const val5 = "true"
// console.log(typeof val5) // String!!

const val6 = true
// console.log(typeof val6) // Boolean

const val7 = 'lol'
// console.log(typeof val7) // String (NB: single quotes)


/** 
 * Define a variable called myFavGame using let, and assign it the string value of your current favorite game. console.log this new variable
 */
let myFavGame = "Baldurs gate 3"
// console.log(myFavGame)

/**
 * Define a variable myLatestMeal using const, and assign it the value of whatever you ate last. console.log that value
 */
const myLatestMeal = "Salted licorice"
// console.log(myLatestMeal)

// Without template literals
let a = 10
let b = 3
let c = a + b

// This sucks to write.
const resultWOInterpolating = "The sum of" + a + "and" + b + "is the value" + c + "."
console.log(resultWOInterpolating)
// Prints out "The sum of10and3is the value13." > You would need to add spaces before and after the last character of each string to be combined.


// Use template literals instead, NB: backticks
const resultWithInterpolation = `The sum of ${a} and ${b} is the value ${c}.`
console.log(resultWithInterpolation)
// Prints "The sum of 10 and 3 is the value 13." > Natural language in play; easier to write.

const notJustVariables = `Adding 55 and 12 gives me ${55 + 12}.`
console.log(notJustVariables)

