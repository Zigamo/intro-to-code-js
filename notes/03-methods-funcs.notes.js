function someNamedFunc(param1, param2) {
    console.log(`Hey, here's param1 and param2`, param1, param2)
    return [param1, param2]
}

// Using in-line values directly as params
// someNamedFunc(1, 2)

// Define two variables and assign them some values. Call someNamedFunc with these variables.
const p1 = "forgetful"
const p2 = "very"
// someNamedFunc(p1, p2)

// Define a function helloThere. helloThere accepts no inputs, and just returns "Hello There!".
// console.log your helloThere call.


function helloThere() {
    return "Hello There!"
}
// helloThere()

function canyoureadthisveryeasily() { }

function wellThisNameIsLongerButEasierToRead() { }

// Create an arrow that does what helloThere does. Call it and log it.

const helloThereArrow = () => { }

const threeParamArrow = (param1, param2, param3) => { }

// function recursionInAction() {
//     console.log("I'm a recursive function.")
//     recursionInAction()
// }

// recursionInAction()


function layer1() {
    layer2()
}

function layer2() {
    layer3()
}

function layer3() {
    someNamedFunc("does this", "print properly?")
}

// layer1()

{
    const otherAnimal = "banana"
}
// console.log(otherAnimal)

const printAnimal = () => {
    let diffAnimal = "Toyota"
    if (true) {
        console.log("inside", diffAnimal)
    }
    // prints "Toyota"
}
// printAnimal()

const diffAnimal = "tiger"

// console.log("outside", diffAnimal)
// returns ReferenceError: not defined

function printPet() {
    let pet = "Pepsi bottle"
    {
        let pet = "iguana"
        console.log("block", pet) //iguana
    }
    console.log("function", pet) // pepsi
}
// printPet()
// console.log("global", pet) // undefined
