function findDanishLetters(str) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "å" || str[i] == "Å") {
            countA += 1;
            total += 1;
        } else if (str[i] == "ø" || str[i] == "Ø") {
            countB += 1;
            total += 1;
        } else if (str[i] == "æ" || str[i] == "Æ") {
            countC += 1;
            total += 1;
        }
    }
    if (
        (str.toLowerCase().indexOf("å") === -1 ||
            str.toUpperCase().indexOf("Å") === -1) &&
        (str.toLowerCase().indexOf("ø") === -1 ||
            str.toUpperCase().indexOf("Ø") === -1) &&
        (str.toLowerCase().indexOf("æ") === -1 ||
            str.toUpperCase().indexOf("Æ") === -1)
    )
        return "Sorry, No danish letters found";
    else return { total: total, å: countA, ø: countB, æ: countC };
}
// works for both lower and upper case
console.log(findDanishLetters("Jeg har en blå bil Åå Øø ")); //{ total: 5, 'å': 3, 'ø': 2, 'æ': 0 }
console.log(findDanishLetters("Blå grød med røde bær Æ æ")); //{ total: 6, 'å': 1, 'ø': 2, 'æ': 3 }