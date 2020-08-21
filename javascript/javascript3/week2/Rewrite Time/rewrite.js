// REWRITE
// SetTimeout a promise
const promiseTimeOut = () => {
    const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        })
        .then(() => console.log("Called after 3 seconds"))
        .catch((error) => console.error(error));
};
promiseTimeOut();

// GET CURRENT LOCATION(POSITION)

// function getCurrentLocation() {
//     return new Promise((resolve) => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             resolve(position);
//             // reject(position);
//         });
//     });
// }
function getCurrentLocation() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            try {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position);
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

//Promise way
getCurrentLocation().then((response) => {
    console.log("\n Promise way()\n-------------");
    console.log(
        "Latitude " +
        response.coords.latitude.toFixed(4) +
        "\nLongitude " +
        response.coords.longitude.toFixed(4)
    );
});

// Using async wait
async function getCurrentLocationAsync() {
    const result = await getCurrentLocation();
    console.log("\nAsync way()\n-------------");
    console.log(
        "Latitude : " +
        result.coords.latitude.toFixed(3) +
        "\nLongitude : " +
        result.coords.longitude.toFixed(3)
    );
}
getCurrentLocationAsync();