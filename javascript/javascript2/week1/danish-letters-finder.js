function findDanishLetters(str) {
    let countÅ = 0; // counts letters å
    let countØ = 0; // counts letters ø
    let countÆ = 0; // counts letters æ
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "å" || str[i] == "Å") {
            countÅ += 1;
            total += 1;
        } else if (str[i] == "ø" || str[i] == "Ø") {
            countØ += 1;
            total += 1;
        } else if (str[i] == "æ" || str[i] == "Æ") {
            countÆ += 1;
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
    else {
        return { total: total, å: countÅ, ø: countØ, æ: countÆ };
    }
}

// works for both lower and upper case

console.log(findDanishLetters("Jeg har en blå Åå Øø ")); //{ total: 5, 'å': 3, 'ø': 2, 'æ': 0 }
console.log(findDanishLetters("Blå grød med røde bær Æ æ")); //{ total: 6, 'å': 1, 'ø': 2, 'æ': 3 }