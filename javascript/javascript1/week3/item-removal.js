const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
names.splice(1, 1); // Splice is special thing allows us add and remove an element;

// Options but not recomended!
// delete names[1]; This will return "empty" with 5 characters-I dont like it
// ['Peter', <empty>,'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// names[1]=null will return null with 4 characters
// ['Peter', null,'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']