console.log("Number of selected movies : " + movies.length);

// Movies with short titles

const moviesWithShortTitle = movies
    .filter((movie) => movie.title.length < 7)
    .map((movie) => movie.title); // gives only the title
console.log("\nShort titled movies()\n------------");
console.log(moviesWithShortTitle);

// movies with long titles
const moviesWithLongTitle = movies
    .filter((movie) => movie.title.length > 20)
    .map((movie) => movie.title);
console.log("\nLong titled movies()\n------------");
console.log(moviesWithLongTitle);

//Movies produced between 1980 and 1989

let countMoviesProduced = 0;
const moviesOf1980s = movies.filter(
    (movie) => movie.year >= 1980 && movie.year <= 1989
);
countMoviesProduced++;
console.log("\nNumber of Movies from 1980s()\n------------");
console.log(moviesOf1980s.length);

//console.log(moviesOf1980s); // array of movies from 1980s

//Adding an extra tag

movies[5].key = "tag"; //To add a new key called Tag
movies[5].values = "newValue"; //To add a value pair based on rating

const moviesWithRating = movies.map((movie) => {
    if (movie.rating >= 7) return (movie.tag = "Good");
    else if (movie.rating >= 4 && movie.rating <= 7)
        return (movie.tag = "Medium");
    else movie.rating < 4;
    return (movie.tag = "Bad");
});
console.log("\nAdding Extra Tag based on rating()\n-------");
console.log(movies);

//Movies rated above 6

const ratingsForMovies = movies
    .filter((movie) => movie.rating > 6)
    .map((movie) => movie.rating);
console.log("\n Movies rated above 6()\n--------------");
console.log(ratingsForMovies);

//Count total movies containing "keywords: Surfer, Alien or Benjamin"

const moviesContainingKeywords = movies
    .filter(
        (movie) =>
        movie.title.includes(`Surfer`) ||
        movie.title.includes(`Alien`) ||
        movie.title.includes(`Benjamin`)
    )
    .map((movie) => movie.title);

console.log("\nMovies containing keywords()\n---------");
console.log(moviesContainingKeywords); // Case sensitivity not working

//Find deplicated word in a title

const wordDeplicatedTitles = (titleName) => {
    let titleArr = titleName.toLowerCase().split(" ");
    let wordsDeplicated = titleArr.filter(
        (title, index) => titleArr.indexOf(title) !== index
    );
    if (wordsDeplicated.length > 0) return true;
};
const movieTitlesWithDeplicatedWords = movies.filter((movie) =>
    wordDeplicatedTitles(movie.title)
);
console.log("\nTitles with deplicated word ()\n----------");
console.log(movieTitlesWithDeplicatedWords);

// Using regular Expression
/*
const wordDiplicatedTitles = movies
    .filter((movie, index) => movie.title.indexOf(movie.title) !== index)
    .map((movie) => movie.title);
console.log(wordDiplicatedTitles); */

// Calculate average rating "REDUCE method"

const reducer = (accumulator, currentValue) => accumulator + currentValue;
//reducer used to compute the total ratings
//It takes two argument, the total and the current value

const averageRating = (
    movies.map((movie) => movie.rating).reduce(reducer) / movies.length
).toFixed(1);
console.log("\nAverage rating ()\n----------");
console.log(averageRating);

//Counting number Good, Medium and Bad movies "using reduce"

const goodMovies = movies.map((movie) => movie.tag === "Good").reduce(reducer);
const mediumMovies = movies
    .map((movie) => movie.tag === "Medium")
    .reduce(reducer);
const badMovies = movies.map((movie) => movie.tag === "Bad").reduce(reducer);

console.log("\nQuality of movies()\n---------");

console.log({
    goodMovies: goodMovies,
    mediumMovies: mediumMovies,
    badMovies: badMovies,
}); // ?