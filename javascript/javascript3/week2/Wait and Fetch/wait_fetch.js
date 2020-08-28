//1.wait 3 seconds

const fetchData = () => {
    setTimeout(() => {
        //2.fetching data
        fetch(`https://tinyurl.com/y9zck5xx`) // Movies data url
            .then((response) => response.json())
            .then((moviesData) => {
                //3. log out the data fetched
                console.log(moviesData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, 3000);
};

fetchData();

//Async..await method

setTimeout(waitAndFetch, 3000); //Callback method

async function waitAndFetch() {
    try {
        const response = await fetch(`https://tinyurl.com/y9zck5xx`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}