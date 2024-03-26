# Conditionals: Booleans and equality

## WTF is a conditional and why do they matter?

- Conditionals enable a code segment to conditionally execute things.
- Conditionals allow us to represent decision making in a programming language.

## Equality: Loose vs Strict (spoilers: ALWAYS STRICT)

### Loose equality: when equal doesn't REALLY mean equal

- Loose equality is denoted by `==`, two connected equal signs.
  - this is kinda similiar to the IRL ~=
- This is different from the assignment operator, which is just a single `=`
- When using loose equality (==) you tell JS to convert both values to the same type BEFORE doing your comparison. Which leads to unexpected results.

```js
// With loose equality, two equals ==
console.log(7 == "7")     // true
console.log(0 == false)   // true
console.log(0 == "")      // true
console.log("0" == 0);    // true
console.log("0" == "");   // false
```

### Strict equality: rigidly equal

- Strict equality (===) differs in that it directly compares both values WITHOUT converting their types.
- Using strict equality is far more predictable, because you do NOT have to guess what JS will type-coerce a value into BEFORE comparison

```js
// With strict equality, three equals ===
console.log(7 === "7")     // false
console.log(0 === false)   // false
console.log(0 === "")      // false
console.log("0" === 0);    // false
console.log("0" === "");   // false
```

### Negation: when things are NOT equal

- We can append a single `!` (exclamation) BEFORE a testable boolean phrase to negate its value
- You place the ! in front of your statement 

```js
// Value negations 
!someValue  // where some value resolves to a boolean

// Operator negations
!==         // strictly NOT equal
!=          // loosely NOT equal
```

#### Double negation

- In JavaScript, the not operator (!) is used to invert a boolean value. When it is applied twice (!!), it effectively converts a value to its boolean equivalent without changing its truthiness. 
- This is known as double negation.

1. First ! converts the value to a boolean type, then inverts it.
2. Second ! again inverts the inverted value, so that we have a boolean conversion of the original value type

##### Use cases: using innate truthiness/falsiness of values

- In JS value is "Truthy" if it is considered `true` in a boolean context.
- All values in JS are "Truthy" EXCEPT for: 
  - false
  - 0
  - -0 (negative 0)
  - ""
  - null
  - undefined
  - NaN (not a number)
  - document.all (don't worry about this)

```js
const yourName = "Andrew"
const nameToBoolean = !!yourName  // true, b/c "Andrew" starts as a "truthy" value
console.log(nameToBoolean);

const testGrade = 0
const gradeToBool = !!testGrade   // false, b/c 0 starts as a 'falsy' value
console.log(gradeToBool);
```

## Conditionals: testing how equal things are and doing stuff based on that

### The basic one-and-done: the `if` statement

- The most basic of conditional testing statements.

```js
// Define a variable myFavGame and assign it some string value.
let myFavGame = "Baldur's gate 3"
let friendsGame = "Baldur's gate 3"

let otherFavGame = "Crash Bandicoot"

if (myFavGame === friendsGame) {
    console.log("WHOA we have the same taste!");
    // prints
}

if (myFavGame !== otherFavGame) {
    console.log("Nope we do not have the same taste");
    // with negation, prints
}
```

### The one-two: `if-else` statement

- If-else is a standard two choice flow, where else represents the last in a series of (in this case, two) connected testable conditions.
- Else always goes at the end of a chain and is sometimes optional to omit.

```js
// Define a var called foodIWantRightNow and assignIt
let foodIWantRightNow = "nothing"

// We connect these two console.logs with an if-else to tie them together.**EXAMPLES**
// Without the else, the second log would always print, since it's not being conditionall executed.
if (foodIWantRightNow !== "nothing") {
    console.log("Let's head out and look for a bite.");
} else {
    console.log("Guess I'm not that hungry")
}
```

### Chain'em together: additional `else-if`

- We use `else if` when we want to have more than two conditional flows we want to control.
- You chain `else if` after your initial `if` statement as many times as you have flows, before your final `else`
- Order matters: in cases where you have one or more statements that can pass with a certain set of values, the FIRST in the order of conditionals is executed, and all others are skipped.

```js
// Define a var called foodIWantRightNow and assignIt
let foodIWantRightNow = "steak"
let foodILike = "steak"

if (foodIWantRightNow !== "nothing") {
    console.log("Let's head out and look for a bite."); // true, so this prints
} else if (foodIWantRightNow === foodILike) {
    console.log("Let's go get some fucking steak!!!")   // this is skipped EVEN THOUGH it is also true
} else {
    console.log("Guess I'm not that hungry")
}
```

## Logic and some of its friends

- We can borrow the first of logical comparative operators from math class

```
GT  >
GTE >=
LT  <
LTE <=
```

The next set are logical boolean operators

```
AND   && (double ampersand)
OR    || (double pipe)
NOT   !  (negation)
```

### Order of operations

This builds off the OOO that we learned in math class, but includes these new JS concepts.

1. Logical NOT
2. Exponents
3. Mult/Div
4. Add/Sub
5. Num comparisons
6. Logical AND
7. Logical OR


#### Examples

##### With Math

```js
console.log(4 < 3 || 2 < 3); // false || true -> true b/c there's any true in the OR chain
console.log(5 * 3 > 10 && 4 + 6 === 11) // false b/c AND requires all to be true to resolve to true
```

##### With Variables

```js
// Define a var called foodIWantRightNow and assignIt
let foodIWantRightNow = "shakshuka"
let foodILike = "steak"

const otherFoodILike = "shakshuka"

if (foodIWantRightNow === foodILike || foodIWantRightNow === otherFoodILike) { // connected conditions, condenses conditional
    console.log(`Let's go get some fucking ${foodIWantRightNow}!!!`)
} else {
  console.log("Guess I'm not that hungry")
}

if (foodIWantRightNow === foodILike || otherFoodILike || thirdFood)  // THIS IS INVALID b/c you have only one conditional and two ORs (expected three chained conditions)

if (foodIWantRightNow === foodILike || foodIWantRightNow === otherFoodILike || foodIWantRightNow === thirdFood)  // THIS IS VALID b/c you have conditionals on EACH side of an OR
if (foodIWantRightNow === foodILike && foodIWantRightNow === otherFoodILike && foodIWantRightNow === thirdFood)  // THIS IS VALID b/c you have conditionals on EACH side of an AND
```

### Inline conditionals aka ternaries

- There's a way to conditional evaluations inline with a statement of some kind.
- This inline operator is called the ternary, `?`, a single question mark

```js 
// usage
// conditional expr ? true expression : false expression

const condition = 57 > 3

// We can use ternaries to assign values conditional inline
const hasPantsOn = condition ? "defo wearing pants" : "freeballing"
console.log(hasPantsOn)
```

### NEVER CHAIN TERNARIES

Just use a series of if-else-if-else statements, or a `switch` statement

```js
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

// which is equivalent to

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## Switching things up

- The `switch` statement evaluates an expression, matching the expression's value against a series of `case` clauses.
- You can group differing conditions that should lead to the same using a switch clause.
- You should always remember to add a `default` clause at the end of the `switch` statement.
- You also should add a `break` statement if you're NOT `return`ing a value to break out of the switch flow, which can and will try to match as many different vals as possible

### Examples

#### Individual Cases

```js
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

switch (carMake) {
    case "Ford":
        console.log("It's a Ford!")
        break;
    case "Toyota":
        console.log("It's a Toyota!")
        break;
    case "GM":
        console.log("It's a GM!")
        break;
    default:
        console.log("It's some other vehicle")
}
```

#### Grouped Cases

You can perform the same action for any number of cases by just grouping the cases

```js
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
```

## Ref Links
- https://education.launchcode.org/intro-to-professional-web-dev/chapters/booleans-and-conditionals/conditionals.html