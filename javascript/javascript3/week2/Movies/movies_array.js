//1. Create an array of bad movies

const moviesPromise = fetch(`https://tinyurl.com/y9zck5xx`);

moviesPromise
    .then((response) => response.json())
    .then((movies) => {
        //1. Create an array of bad movies
        const badMovies = movies.filter((movie) => movie.rating <= 4);
        console.log(badMovies);
        //2. Create an array of bad movies since year 2000
        const badMoviesSince2000 = movies.filter(
            (movie) => movie.rating <= 4 && movie.year > 2000
        );
        console.log(badMoviesSince2000);
    })
    .catch((error) => {
        console.error(error);
    });