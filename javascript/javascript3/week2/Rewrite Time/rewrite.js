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

// Get position
let lat;
let long;
async function getCurrentLocation(postion) {
    fetch(
        `https://www.openstreetmap.org/#map=18/${lat}/${long}`
    ).then((response) => response.json());
    try {
        let lat = postion.coords.latitude;
        let long = postion.coords.longitude;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                long = position.coords.longitude.toFixed(2);
                lat = position.coords.latitude.toFixed(2);
            });
            console.log(lat, long);
        }
    } catch (error) {
        console.log("error");
    }
}
getCurrentLocation();