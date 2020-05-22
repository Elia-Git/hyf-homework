// Global variable declaration
let firstName = "Bob";
let surName = "Marley";

function getFullname(firstName, surName, useFormalName) {
    let fullName = firstName + surName; // Fullname declaration(inner scope)
    if (useFormalName === true) {
        fullName = `Lord ${firstName} ${surName}`;
    } else {
        fullName = `${firstName} ${surName}`;
    }
    return fullName;
}

fullName1 = getFullname("Bob", "Marley", true);
fullName2 = getFullname("Bob", "Marley", false);

console.log("When user books a flight:" + fullName1); //Formal full name
console.log("When the ticket printed:" + fullName2); //Informal full name