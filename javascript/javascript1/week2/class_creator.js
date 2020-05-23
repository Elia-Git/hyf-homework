// copy your homework solution here to make the webpage work!
const class07Students = ["Bob", "Jordi", "Klaus", "Jonas", "Mike", "Erik"];
let check;
let number;

function addStudentToClass(studentName) {
    // You write code here
    const queen = "queen";
    // for loop
    for (let x = 0; x < class07Students.length; ++x) {
        number = number + class07Students[x];
    }
    if (class07Students.length < 6) {
        check = class07Students.every(function(v) {
            return v != studentName;
        });
        if (check == true) {
            class07Students.push(studentName);
        } else if (studentName == queen);
        class07Students.push(queen);
    }
}

function getNumberOfStudents() {
    // You write code here

    for (let x = 0; x < 6; x++) {
        class07Students.length;
        if (class07Students.length === 6) {
            return "This Class is fully booked and only the Queen is has a place";
        } else if (check !== true) {
            return "This student name is already registered in the class";
        }
    }
    return class07Students.length;
}

console.log("List of students in the class:", class07Students);
console.log("Maximum number of students is:", class07Students.length);