// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 


let firstNum = 1;
let secondNum = 2;

function twoNumbers (a, b) {
    if (typeof a === 'number' || typeof b === 'number') {
    console.log("Both inputs are numbers");

      } else { console.log("Either one or both of the inputs are not numbers");
}

    let twoNumberResult = 1;
    let value = "";

 for (i = 0; i < b; i++) {

    twoNumberResult *= a;
    value += twoNumberResult + " ";
    }
    console.log(value);
 

};

twoNumbers(5, 6);

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.


////WTF 


// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 


const myFaveFruit = "Pear";

function printFaveFruit () {
    var myFaveFruit = "Apple";
    console.log("My fave fruit is..." + myFaveFruit);
};

printFaveFruit();


// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent (a, b) {
    let timesBy = 0;
    let multiplierResult = a * a;
    for (i = 0; i < b; i++) {
        timesBy += multiplierResult
    }
    console.log(a + " times " + a + " "+ b + " times is " + timesBy);
}

exponent(2, 10);
