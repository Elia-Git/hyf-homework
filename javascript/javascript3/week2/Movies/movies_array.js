//1. Create an array of bad movies
const apiUrl = `https://tinyurl.com/y9zck5xx`;
// Bad movies rated for <=4
async function badMoviesArray() {
    //a.fetching the movies data
    fetch(apiUrl)
        .then((response) => response.json())
        .then((movies) => {
            //b.filtering bad movies accrotding to ratings
            const badMovies = movies
                .filter((movie) => movie.rating <= 4)
                .map((movie) => movie);
            console.log(badMovies);
        })
        .catch((error) => {
            //b.Throw an error if above condition failed
            console.log(error);
        });
}
badMoviesArray();

//2. Create an array of bad movies since year 2000

const badMoviesSince2000 = () => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((movies) => {
            //a.Check both if movies are bad & are produced since 2000
            const badMoviesAfter2000 = movies
                .filter((movie) => movie.rating <= 4 && movie.year > 2000)
                .map((movie) => movie);
            console.log(badMoviesAfter2000);
        })
        .catch((error) => {
            //b.Throw an error if above condition failed
            console.error(error);
        });
};
badMoviesSince2000();