// Display the data
// This data should be showed in your app:

// The chosen city
// Temperature

// How clowdy it is
// || city === null
// You decide how the data should be displayed.You could maybe be inspired by googling for "weather app ui".
const button = document.getElementById("btn");
const input = document.getElementById("inputs");
const cityWeather = () => {
    const cityName = input.value.toLowerCase();
    // const apiUrl =
    //     `https://api.openweathermap.org/data/2.5/weather?q=` +
    //     cityName +
    //     `&appid=918c19586c0498382c41bc29f26c27ad`;
    if (cityName !== "") {
        fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=` +
                cityName +
                `&appid=918c19586c0498382c41bc29f26c27ad`
            )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // The chosen city
                document.getElementById(
                    "city-selected"
                ).textContent = `${data.name} , ${data.sys.country} `;

                //Temprature
                const temperature = Math.floor(data.main.temp - 273);
                document.getElementById(
                    "temp"
                ).textContent = `Temprature: ${temperature}`;
                // Icon for the weather type

                // Wind speed
                document.getElementById(
                    "wind-speed"
                ).textContent = `Wind speed: ${Math.floor(
          (data.wind.speed * 10) / 36
        )} m/s`;
                // Cloudy cover
                document.getElementById(
                    "cloud-cover"
                ).textContent = `Cloud cover: ${Math.floor(data.clouds.all)} % `;
                // Sunrise
                const sunrise = new Date(data.sys.sunrise * 1000);
                document.getElementById("sunrise").textContent = `Sunrise: ${sunrise}`;
                // Sunset
                const sunset = new Date(data.sys.sunset * 1000);
                document.getElementById("sunset").textContent = `Sunset: ${sunset}`;
                // Map
                //key: AIzaSyBDmYf3hqrCMWDG9zR9AfbHoE7f8rGCLFk
                // Optional a map showing where the city is located

                //Input reseting part
                document.getElementById("inputs").addEventListener("input", (event) => {
                    location.reload();
                });
            });
    } else {
        document.getElementById("city-selected").innerText =
            "Invalid city name please check spelling ";
    }
};
//Function called when clicked
button.addEventListener("click", cityWeather);
//
// city Map
window.addEventListener("load", () => {
    function myPosition() {
        let lat;
        let long;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((myPosition) => {
                long = myPosition.coords.longitude.toFixed(2);
                lat = myPosition.coords.latitude.toFixed(2);
                console.log(lat, long);
                myMap();
            });
        }

        function myMap() {
            let mapProp = {
                center: new google.maps.latLong(lat, long),
                zoom: 7,
            };
            let mapRef = `https://maps.googleapis.com/maps/api/js`;
            let map = new google.maps.Map(mapRef, mapProp);
            console.log(map);
        }
    }
});
//?key=AIzaSyBDmYf3hqrCMWDG9zR9AfbHoE7f8rGCLFk