console.log("Make it double");

//Doubling an Odd number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const output = numbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 2);
console.log("The doubled numbers are = ", output);