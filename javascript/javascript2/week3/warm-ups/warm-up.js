//1. Script called 2.5 seconds after loaded

function logOut() {
    setTimeout(() => {
        console.log("Called after 2.5 seconds");
    }, 2500);
}
logOut();

// //2. A String to be logged out after a delay seconds

function logStiringOut(delay, stringTolog) {
    setTimeout(() => {
        console.log(stringTolog);
    }, delay * 1000);
}
logStiringOut(4, "The string to be logged out"); //gives out: The string to be logged out after 3 seconds
// // Works for different arguments

// //3. Log out a string after 5 seconds usin a button
const buttons = document.querySelectorAll("button");

function logOutAfter5Secs() {
    const button = document
        .getElementById("delay")
        .addEventListener("click", function() {
            setTimeout(() => {
                console.log("Called after 5 seconds");
            }, 5000);
        });
}
logOutAfter5Secs();

//4. Logging out Planets
const earthLogger = function() {
    console.log("Earth");
};
const saturnLogger = function() {
    console.log("Saturn");
};

function planetsLogger(functions) {
    return functions;
}

planetsLogger(earthLogger());
planetsLogger(saturnLogger());

//5.Log location'
const mapRef = document.getElementById("map");
let latitude;
let longitude;

function findMyLocation() {
    function myPosition(geolocationPositionInstance) {
        let coord = geolocationPositionInstance.coords; //representing a geographic position.
        console.log("Latitude : " + coord.latitude.toFixed(2));
        console.log("Longitude : " + coord.longitude.toFixed(2));
    }
    //myLocationOnMap();
    navigator.geolocation.getCurrentPosition(myPosition);
}
const button = document
    .getElementById("location")
    .addEventListener("click", findMyLocation);

//6. Show location on map using "Google maps Api"
//?????????
//7.

function runAfterDelay(delay, callback) {
    setTimeout(() => {
        console.log(callback);
    }, delay * 1000);
}
runAfterDelay(2, "Should log out after delay seconds");