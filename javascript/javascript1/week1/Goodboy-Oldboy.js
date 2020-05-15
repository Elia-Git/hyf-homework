const dogYearOfBirth = 2020; // value do not change
let dogYearFuture = 2055; // Value can change with the same variable name
let dogYear = dogYearFuture - dogYearOfBirth;

var shouldShowResultInDogYears = "true";

//To test if the else condition works
//var shouldShowResultInDogYears = "false";

if (shouldShowResultInDogYears == "true") {
    console.log(
        "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
    );
} else {
    console.log(
        "Your dog will be " + dogYear * 7 + " human years old in " + dogYearFuture
    );
}