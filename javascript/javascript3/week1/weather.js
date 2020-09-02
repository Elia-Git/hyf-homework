//Weather application
const button = document.getElementById("btn");
const input = document.getElementById("inputs");
const cityWeather = () => {
    const cityName = input.value.toLowerCase();
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
                //Map

                let img = document.getElementById("map");
                img.setAttribute(
                    "src",
                    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                );
            });

        //Input reseting part
        document.getElementById("inputs").addEventListener("input", (event) => {
            location.reload();
        });
    } else {
        document.getElementById("city-selected").innerText =
            "Invalid city name please check spelling ";
    }
};

//Function called when clicked
button.addEventListener("click", cityWeather);