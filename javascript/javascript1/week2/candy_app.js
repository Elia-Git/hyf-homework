// creating a function add candy

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    // if else loop
    if (candyType === "Sweet") {
        boughtCandyPrices.push(0.5 * weight);
    } else if (candyType === "chocolate") {
        boughtCandyPrices.push(0.7 * weight);
    } else if (candyType === "chewing-gum") {
        boughtCandyPrices.push(0.03 * weight);
    } else if (candyType === "toffee") {
        boughtCandyPrices.push(1.1 * weight);
    } else {
        let a = "Candy category not found";
        console.log(a);
    }
}
addCandy("sweet", 7);
addCandy("chocolate", 10);
addCandy("chewing-gum", 8);
addCandy("toffee", 6);
console.log(boughtCandyPrices);

// If I buy more candies?
const amountTospend = Math.random() * 100;
console.log(amountTospend);

function canBuyMoreCandy() {
    let amountSpent = 0;
    let x = 0;
    while (x < boughtCandyPrices.length) {
        amountSpent += boughtCandyPrices[x];
        ++x;
        console.log("Shoping done" + amountSpent);
        return amountSpent < amountTospend;
    }
    if (canBuyMoreCandy()) {
        console.log("You can buy more, so go ahead!");
    } else {
        console.log("Enough candy for you");
    }
}