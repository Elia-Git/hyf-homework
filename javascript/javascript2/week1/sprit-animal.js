const button = document.getElementById("submit");
const input = document.getElementById("name");
const p = document.querySelector("p");
const animals = [
    "The strong Bear",
    "The patient Cat",
    "The joker Coyote",
    "The fearless Crow",
    "The innocent Deer",
    "The protective Dolphin",
    "The joyfull Dragonfly",
    "The angery Lion",
    "The peacefull Panda",
    "The driving force Horse",
    "The creative Spider",
    "The humble Turtle",
];
const users = [];
button.addEventListener("click", function(event) {
    const randomNumber = Math.floor(Math.random() * animals.length);
    let mySprit = "";
    if (input.value !== "") {
        mySprit = p.innerText = input.value + " :- " + animals[randomNumber];
        users.push(input);
    } else {
        mySprit = "Please enter your name to generate a spirit animal";
    }
    p.innerHTML = mySprit;
});