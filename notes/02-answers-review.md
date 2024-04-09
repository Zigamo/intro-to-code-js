# Reviewing 02-Conditionals

## #2 - fiveCharacters

```
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
```

What are the parts of a ternary?

`<expression to evaluate that resolves to boolean> ? <expr if true> : <expr if false>`

This is the same as:

```
if (<expr to eval that resolves to boolean>) {
  <expr if true>
} else {
  <expr if false>
}
```

We have the following:

```js
// passes test, but not testing the correct thing
const isItFiveChars = notFiveChars ? "not 5 characters" : "it's 5 characters"
```

Right now, this expresssion is evaluating whether `notFiveChars` ITSELF is a truthy/falsy value. It evals to `true` b/c it's NOT an empty string, which is why the ternary still passes, even if the logic is incorrect.

### So how do we fix this to eval properly?

The way to fix this solution is to add .length to actually evaluate for length.
The reason we add `.length` is testing the length of the value instead ot testing the truthyness of the value itself.

```js
// correct
const isItFiveChars = notFiveChars.length ? "not 5 characters" : "it's 5 characters"
```

## #3 - numberOrString

### Question

```js
/**
 * #3: numberOrString
 *
 * numberOrString is a function that accepts one input, a value of any type.
 * numberOrString returns the following based on these conditions:
 *
 * - "This is a string" if the value is a string
 * - "This is a number" if the value is a number
 * - "This is not a string nor a number" if it's neither
 *
 * SEE:
 * - return statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 *
 * @category 02 - Conditionals
 * @function numberOrString
 * @param {unknown} value
 * @returns {string}
 */
```
 
### First Answer & Its Issues

- Chained ternaries; best practice NOT to do so
  - if-else statements are preferred

What the ternary below is actually doing is:
- test the string "string"
  - if truthy, return this is a string
  - else, return the number 5
  
There are other parts to the chain after the first 5 value, but they never get read because of incorrect syntax.

```js
function numberOrString(value) {
  return "string"
    ? "This is a string"
    : 5
      ? "This is a number"
      : 5
        ? "This is not a string nor a number"
        : true;
}
```

### So how do we fix this to eval properly?

We rewrite this to use proper `if---else-if---else` chained conditional syntax.
We also do typeof tests to check the data type of `value` and return the appropriate corresponding value.

```js
function numberOrString(value) {
  if (typeof value === "string") {
    return "This is a string"
  } else if (typeof value === "number") {
    return "This is a number"
  } else if (typeof value !== "string" || typeof value !== "number") {
    return "This is not a string nor a number"
  }
}
```

## #4 - truthyFalsy

### First Attempt

We do only one direct test for a boolean true and do NOT return a false, but rather just have it there by itself.

```js
function truthyFalsy(value) {
  if (value !== true)
  false;
}
```

### So how do we fix this?

We can chain values together into one giant connected logical conditional expression; OR
we can use a `switch` statement to more easily group connected conditions; OR
we can negate the incoming value which coerces that value into a Boolean one, either true or false.

## #5 - letsGoParty

### First Attempt

Correctly denies entry to a party if person fails any combination of 1, 2, or all 3 conditions

```js
function letsGoParty(legalAge, outfitType, hasCoverCharge) {
  if (legalAge <= 25)
  return "Go home, no partying for you tonight."
if (outfitType !== "pool party")
return "Go home, no partying for you tonight."
if (hasCoverCharge === false)
return "Go home, no partying for you tonight."
else return "Let's go party!";
}
```

### So how do we fix this?

You connect all three boolean tests with logical ORs to ensure that you need to pass ALL the conditions together at ONCE, and not just pass any combination of 1 or 2 at a time

```js
function letsGoParty(legalAge, outfitType, hasCoverCharge) {
  if (legalAge < 25 || outfitType !== "pool party" || !hasCoverCharge) {
    return "Go home, no partying for you tonight.";
  }
  // passed the if-block above, meaning that we have all the creds needed to party
  return "Let's go party!";
}
```

## #6 - testGrader

### First attempt

Incorrectly chained conditions.

```js
function testGrader(grade) {
  if (grade >= 90)
    return "A"
  if (grade >= 80 < 90)
    return "B"
  if (grade >= 70 < 80)
    return "C"
  if (grade >= 60 < 70)
    return "D"
  if (grade < 60)
    return "F";
}
```

### So how do we fix this?

First we need a guard clause to filter out invalid values and return the appropriate error.

Then, we connect various if and else-if statements with a final else because we have multiple different conditions to test, each with their own return statement.

```js
function testGrader(grade) {
  // guard clause: handle all invalid stuff
  if (grade < 0 || grade > 100 || typeof grade !== "number") {
    return "Not a valid grade.";
  }
  
  // now we can test values
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else if (grade >= 0) {
    return "F";
  }
}
```

## #7 - daysInTheMonth

### First Attempt

You cannot 'reuse' conditionals with commas.
Missing else to if statements, if decided to go that syntax route.


```js
function daysInTheMonth(month) {
  if (month === 1, 3, 5, 7, 8, 10, 12)
    return 31
  if (month === 4, 6, 9, 11)
    return 30
  if (month === 2)
    return 28
  if (month > 12 || month < 1)
    return "Not a valid month.";
}
```

### So how do we fix this?

Since a lot of the testing conditions all resolve to the same value, this is a great place for a switch statement.

```js
function daysInTheMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return "Not a valid month.";
  }
}
```