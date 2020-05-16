const dogYearOfBirth = 2020; // value do not change
const dogYearFuture = 2055; // Value can change with the same variable name
const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = "true";

//To test if the else condition works

if (shouldShowResultInDogYears === "true") {
    console.log(
        "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
    );
} else {
    console.log(
        "Your dog will be " + dogYear * 7 + " human years old in " + dogYearFuture
    );
}