# 01 - Values and Types

## Basic Basics

### Variables and Values

**What is a variable?**

- A named container for a stored value.

**What is a value?**

- A value is some data, typically stored in a variable. All data has a type.
- Some values contain nested data types based on their structure.

### Data Types

**What is a data type?**

- Programming languages all have built-in data structures, but they differ from language to language.
- Data types are the building blocks of any language; 
- javasript programs and functions manipulate values and these values all belong to a type.

**What are some examples of data types in JS?**

### Primitives, the simple ones

Some of the most common types in JS are:

- Number: All number values whether integer or floating point (whole vs stuff with decimals)
- String: Used to store text
  - You create strings by wrapping text in single quotes, double quotes, or backticks (`).
- Boolean: True/False

```js
const val1 = 420
console.log(typeof val1) // Number

const val2 = `andrew`
console.log(typeof val2) // String (NB: backticks)

const val3 = "12386"
console.log(typeof val3) // String (NB: double quotes)

const val4 = "This is a sentence that also has numbers and symbols 123097517812!@5!@%^!$%^"
console.log(typeof val4) // String!

const val5 = "true"
console.log(typeof val5) // String!!

const val6 = true
console.log(typeof val6) // Boolean

const val7 = 'lol'
console.log(typeof val7) // String (NB: single quotes)
```

### Primitives, the tricky ones

- Undefined: A variable has been declared but has not yet been assigned a value aka an empty waiting for value
- Null: an assignment value that is the representation of no value.

### The Object types

All other data types are forms of objects. Object can store various keyed collections and more compex entities.

- Function: objects that can be "called" aka "invoked" aka "run"
  - Functions are first-class objects; functions can be passed to other functions
  - A function is composed of a sequence of statements known as "the function body"
  - Values can be passed to a function as parameters, and the function will return a value, even if the value is `undefined`
- Array
- Date

### Some leftover types (good to know, rarely used)

There are 8 total data types in JS. These two are useful in specific cases.

- Symbol
- BigInt 

## Keywords

**What is a keyword?**

- Special reserved words the trigger certain actions in JS

**Examples**

```js
export   // Module related
function

const // Variable 
let
var

if else // Conditional
```

### Using keywords with variables

- A variable definition consists of four parts
  - the declaration keyword
  - the variable name
  - the assignment operator aka `=` (single equal sign)
  - and the value to be assigned to the variable, if the variable type requires it.**Examples**

```js
const // Variable 
let
var
```

### Types of variables

- `let`: Create a LOCAL variable where you can freely reassign its value, including having no value, aka undefined, at creation time
- `const`: Creates a variable where the value is constant(**) and cannot be changed by a reassignment (=)
- `var`: Create a FUNCTION-level or GLOBAL-level variable where you can freely reassign its value, including having no value, aka undefined, at creation time
  - NEVER USE VAR EVER
  - LIKE EVER

**EXAMPLES**

```js
/** 
 * Define a variable called myFavGame using let, and assign it the string value of your current favorite game. console.log this new variable
 */
let myFavGame = "Baldurs gate 3"
// console.log(myFavGame)

/**
 * Define a variable myLatestMeal using const, and assign it the value of whatever you ate last. console.log that value
 */
const myLatestMeal = "Salted licorice"
console.log(myLatestMeal)
```

## Combining values of many types into a string aka Template Literal (Template Strings)

When other data types need to be used within a string, template literals are a very useful method of interpolating and formatting data for proper output. You can use variables and their values in strings by defining a string using backticks, `, and interpolating values using a dollar sign followed open curly brace, your value(s), and a close curly brace, `${}`.

```js
// Define some numbers for use.
let a = 10
let b = 3
let c = a + b

// This sucks to write.
const resultWOInterpolating = "The sum of" + a + "and" + b + "is the value" + c + "."
console.log(resultWOInterpolating)
// Prints out "The sum of10and3is the value13." 
// > You would need to add spaces before and after the last character of each string to be combined.


// Use template literals instead, NB: backticks
const resultWithInterpolation = `The sum of ${a} and ${b} is the value ${c}.`
console.log(resultWithInterpolation)
// Prints "The sum of 10 and 3 is the value 13." 
// > Natural language in play; easier to write.

// Template literals can also evaluate expressions, not just static variables.
const notJustVariables = `Adding 55 and 12 gives me ${55 + 12}.`
console.log(notJustVariables)
```

## Math, speedrun edition

Basic math operators are present here:

- addition: +
- subtraction: -
- division: /
- multiplication: \* (single asterisk, ignore formatting-fslash \ )

There are also some additional operators that are very useful

- Exponentiation (raise num to power): \*\* (double asterisk, ignore formatting-fslashes \ )
- Modulo (remainder): %

```js
const whatIsMath = 3 ** 3; // assigns val of 27 >> 3 to the power 3
const mathAgain = 27 % 5; // assigns val of 2 >> 27 / 5 = 5R2, remainder is 2 
```

## Questions To Get Answers

1. Your question here
   1. My answer here

## Further Reading

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals