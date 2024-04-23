# Methods/Functions & Scope

- [Methods/Functions \& Scope](#methodsfunctions--scope)
  - [What is a function?](#what-is-a-function)
    - [What makes an object first-class?](#what-makes-an-object-first-class)
  - [Anatomy of a Function](#anatomy-of-a-function)
  - [Types of Functions](#types-of-functions)
    - [Standard function declaration](#standard-function-declaration)
    - [Anonymous Function (usually assigned somewhere)](#anonymous-function-usually-assigned-somewhere)
    - [Named Function Expressions](#named-function-expressions)
  - [Arrow Functions](#arrow-functions)
  - [Invoking (calling) functions](#invoking-calling-functions)
  - [Scope: when things belong to some things, but some OTHER things](#scope-when-things-belong-to-some-things-but-some-other-things)
    - [Global scope](#global-scope)
    - [Local Scope](#local-scope)
    - [Function Scope](#function-scope)
    - [Block Scope](#block-scope)
  - [Hoisting](#hoisting)
    - [Why do we care about hoisting?](#why-do-we-care-about-hoisting)
    - [What JS concepts use these hoisting definitions?](#what-js-concepts-use-these-hoisting-definitions)
    - [Hoisting](#hoisting-1)
      - [Scopes and Local Declarations](#scopes-and-local-declarations)
      - [Functions](#functions)
  - [Reference Links](#reference-links)


## What is a function?

- A function is a reusable block of code that generally takes some input and returns some output.
- A function can optionally take no inputs and sometimes return no output.
- Functions are first-class objects where doing a `typeof` function returns `"function"` instead of `"object"`
- Functions have special properties, in that they are the only objects that can be "called" aka invoked, run, etc.

### What makes an object first-class?

- functions can be passed to other functions.
- functions can be returned from functions.
- functions can be assigned to variables or object properties.

## Anatomy of a Function

There are 4 main parts to a function:

- The function name (and optionally reserved function keyword)
- A set of function parameters aka "inputs", arguments
  - You can use predefined parameters to invoke a function with that have been assigned a value already, or you can define these invocation parameters in-line
  - Functions can have no input, one input, multiple inputs, or a variable number of inputs.
    - For variable inputs, see the reference for `arguments` at end of notes
- A block of code that is going to be run when the function is called
- A `return` statement which ends function execution and specifies a value to be returned, even if the value is `undefined`.
  - Returning a value is not the same as logging a value.
  - A returned value can be stored and re-used elsewhere versus a logged value which just appears in the terminal to show you the selected value.
  - Return statements are typically placed at the end of a branch of your function's control flow.
  - You can also use a return to interrupt the block of code and immediately break out of a function.
  - You can also return functions from functions (closures)

In addition to these facts, you typically name functions using `camelCaseNaming`, which is where the first letter of the function word is lowercase, and all subsequent words are Capitalised after it, no spaces allowed.

```js
// please dont ever
function canyoureadthisveryeasily() { }

// do this instead
function wellThisNameIsLongerButEasierToRead() { }
```

## Types of Functions

There are various types of function statements(declarations) and function expressions.

### Standard function declaration

- Function statements are standalone and do not need an intermediary to work

```js
function namedFunctionExpression() {
  // some functional code
}
```

### Anonymous Function (usually assigned somewhere)

- A function definition without a name.
  - Created as a function expression, typically assigned some named variable
```js
function() { 
  // some functional code
}
```

### Named Function Expressions

- Named function expressions are anonymous expressions that are assigned as values, typically to variables.


```js
// The following in English would read as:
// "The variable namedFunctionExpression is assigned an anonymous function which does XYZ" 

const namedFunctionExpression = function () {
  // some functional code
}
```

## Arrow Functions

- Arrow functions are another way to write a function definition in a compact way.
- Arrow functions do have some differences with function statements and expressions in a few ways, including how each handles `this`.
- Arrow functions should not be used as methods. 
- Arrow functions are called exactly the same way as another function.

```js
// no params
const helloThereArrow = () => { }

// three params
const threeParamArrow = (param1, param2, param3) => {}
```

## Invoking (calling) functions 

- Defining a function does not execute it; Calling a function actually preforms the specified function instructions.
- Functions can call themselves recursively.
  - Functional Recursion is when a function calls itself inside of its own definition.
  - To kill a call stack gone wild, `Ctrl-C`

```js
// THIS is a recursive definition, even though nothing is returned. All recursion requires is an invocation.
function recursionInAction() {
  console.log("I'm a recursive function.")
  recursionInAction()
}
// Call the function
recursionInAction()

// This is a recursive function with a return statement.
function recursionInAction() {
  console.log("I'm a recursive function.")
  return recursionInAction()
}
// Call the function
recursionInAction()
```

## Scope: when things belong to some things, but some OTHER things

- Scope refers to the current context of your code.
- This current contect determines where you can access certain variables and functions.
- Where you decide to define a variable or function impacts where you can access it from.

![how scope works](https://blog.hubspot.com/hs-fs/hubfs/JavaScript_Scope-1.webp?width=650&height=450&name=JavaScript_Scope-1.webp)

### Global scope

- If a function or variable is within global scope, it means that is available anywhere within your code.
- This is the default scope for variables or functions in JS.
  

```js
// Function definition at the top-level, global
function someNamedFunc(param1, param2) {
    console.log(`Hey, here's param1 and param2`, param1, param2)
    return [param1, param2]
}

// Two global variable definitions
const p1 = "forgetful"
const p2 = "very"


// Global defined things are available at ANY level, so all data present is defined, and thus can be evaluated.
someNamedFunc(p1, p2)

// Something defined globally will ALWAYS be available however deeply nested
function layer1() {
    layer2()
}

function layer2() {
    layer3()
}

function layer3() {
    someNamedFunc("does this", "print properly?")
}

layer1()
// prints: Hey, here's param1 and param2 does this print properly?
```

### Local Scope

- A function or a variable that is only available within the current code block.
- To create a local scope we can use curly braces `{}`
- Local scope is also sometimes block scope.
  
```js
{
    const otherAnimal = "banana"
}
console.log(otherAnimal)
// returns ReferenceError: otherAnimal is not defined
// otherAnimal is defined WITHIN a local scope, and our console.log cannot peek INTO that scope to access its value.
```

### Function Scope

- Function scope is similar to local scope in that variables and functions defined WITHIN A function are only available inside that function.
- Variables and functions defined this way are not available globally or to outer scopes.

```js
// In this example, only the `diffAnimal` inside the function block has a defined value, thus inside prints, and outside ReferenceError's
const printAnimal = () => {
  let diffAnimal = "Toyota"
  console.log("inside", diffAnimal)
  // prints "Toyota"
}
printAnimal()

console.log("outside", diffAnimal)
// returns ReferenceError: not defined
```

```js
// Here each console.log refers to the definition that is in its closest available scope.
// Inside has access to the functionally-scoped val
// Outside has access to the globally-scoped val
const printAnimal = () => {
  let diffAnimal = "Toyota"
  console.log("inside", diffAnimal)
  // prints "Toyota"
}
printAnimal()

const diffAnimal = "tiger"

console.log("outside", diffAnimal)
// prints "tiger"
```

```js
// Here inside has access to the outside functional scope and diffAnimal is defined there, so we don't need to go out any further.
// Outside is still using the global scope
const printAnimal = () => {
    let diffAnimal = "Toyota"
    if (true) {
        console.log("inside", diffAnimal)
    }
    // prints "Toyota"
}
printAnimal()

const diffAnimal = "tiger"

console.log("outside", diffAnimal)
// returns ReferenceError: not defined
```

### Block Scope

- Block scope allows us to create variables and functions only available within a code block
- Reminder block scopes are created anytime you use `{}`

```js
function printPet() {
    let pet = "Pepsi bottle"
    {
        let pet = "iguana"
        console.log("block", pet) //iguana
    }
    console.log("function", pet) // pepsi
}
printPet()
console.log("global", pet) // undefined
```

## Hoisting

- Hoisting is the concept that functions are always at the top of their scope.

### Why do we care about hoisting?

Here are some examples of hoisting in action:

- Value hoisting: Being able to use a variables value in its scope before the line is declared.
- Declaration hoisting: being able to reference a variable in its scope before the line is declared, without a reference error. Here values are always `undefined`
- #3: Declaration of a variable causing behavior changes in its scope before the line in which it's declared
- #4: Side effects of a declaration are produced before evaluating the rest of the code that contains it.

### What JS concepts use these hoisting definitions?

- Value hoisting: is something all function declarations (function keyword) follow; import declarations too
- Declaration hoisting: Variables using the `var` declaration keyword follows this type of hoisting; this is bad and the main reason we never use `var`
- Type 3: Declarations using let, const, and class 
- Type 4: Import declarations

### Hoisting

```js
// Not value hoisted

console.log(num); // returns ReferenceError, as it should
const num = "treefitty"; 

// let-declared variables also produce this reliable error
```

`var` is terrible.

```js
console.log(myNum) // undefined

var myNum = 421
console.log(myNum) // 421
```

And if there was a random assignment earlier in the code...

```js
myNum = "not a num"

// other random code

console.log(myNum) // "not a num"

var myNum = 421
console.log(myNum) // 421
```

#### Scopes and Local Declarations


```js
let z = 100;

{
  console.log(z); // returns ReferenceError, because there's a locally scoped DEFINITION
  // CANNOT use vars before assignment
  let z = 101 // local z declaration, different from outer z
}
```

#### Functions

```js
console.log(square(5)); // prints 25

function square(n) {
  return n * n;
}

// the compiler reads the above like this:

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

Does not work with function expression because you are storing the definition as a value in a variable. The variable is `const` declared, so it reference errors.

```js
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization

const square = function (n) {
  return n * n;
};
```
----

## Reference Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting