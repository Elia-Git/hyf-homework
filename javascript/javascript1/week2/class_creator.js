const class07Students = ["Bob", "Jordi", "Klaus", "Jonas", "Mike", "Erik"];
let number;
let x;

function addStudentToClass(studentName) {
    // You write code here
    for (let x = 0; x < class07Students.length; x++) {
        number += class07Students[x];
    }
    if (class07Students.includes(studentName)) {
        console.log("\n if else conditions output()\n---------");
        console.log("This student name " + studentName + " is already registered in the class");
    } else if (studentName === "") {
        console.log("You can not add an empty string to the class");
    } else if (studentName === "queen") {
        class07Students.push(studentName);
    } else if (class07Students.length = 6) {
        console.log("This Class is fully booked and only the Queen is has a place");
    } else {
        return class07Students.length;
    }
}

function getNumberOfStudents() {
    // You code here
    return class07Students.length;
}
// It works for all this conditions bellow
addStudentToClass("Erik"); // if we can add twice
addStudentToClass(""); // if it can add an empty string
addStudentToClass("Tom"); // if we can add more than 6
addStudentToClass("queen"); // what if we add the queen any time*/


console.log("\n function output()\n---------");
console.log("List of students in the class:", class07Students);
console.log("Maximum number of students is:", class07Students.length);