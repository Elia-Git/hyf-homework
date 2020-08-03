// array with functions as items
const arrayOfFunctions = [
    () => {
        console.log("Function as an array's item1");
    },
    () => {
        console.log("Function as an array's item2");
    },
    () => {
        console.log("Function as an array's item3");
    },
];
arrayOfFunctions.forEach((func) => {
    func();
});

// Function as a constant
const constFunction = () => {
    console.log("This is a Function declared a as a constant variable");
};
constFunction();

// Function in its normal way of writting
function normalFunction() {
    console.log("This is how a normal a function looks like");
    return 5;
}
normalFunction();

// Functions as an object values

const funObeject = {
    func: function() {
        console.log("Function as key pair value of an object");
    },
};
funObeject.func();