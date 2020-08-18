const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium", "æ"];

// Finding the shortest Danish word

// My code is not smartenough to determine the(can only pick one) shortest even though
//when I have two words with the same number of characters like ø & æ
// I need help for that

function getShortestDanishWord(danishWords) {
    let shortestDanishWord = danishWords[0];
    for (let i = 0; i < danishWords.length; i++) {
        if (shortestDanishWord.length > danishWords[i].length) {
            shortestDanishWord = danishWords[i];
        }
    }
    return shortestDanishWord;
}

console.log("\nShortest Danish word outPut() \n----------");
console.log(getShortestDanishWord(danishWords));

// Not asked but optional

function getLongestString(danishWords) {
    let word = 0;
    let longestDanishWord = danishWords[0];
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length > word) {
            word = danishWords[i].length;
            longestDanishWord = danishWords[i];
        }
    }
    return longestDanishWord;
}
console.log("\nLongest Danish word outPut() \n----------");
console.log(getLongestString(danishWords));