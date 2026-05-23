const API_KEY = "95eddd9edebe392918e057c540e5402d";

const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";

function getWeather(city) {

    const url =
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(url)

        .then(function(response) {

            console.log(response.data);

            displayWeather(response.data);
        })

        .catch(function(error) {

            console.log(error);

            document.getElementById("weather-display").innerHTML =
                "<p>Could not fetch weather.</p>";
        });
}

function displayWeather(data) {

    const cityName = data.name;

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const iconUrl =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("weather-display").innerHTML = `
    
        <h2>${cityName}</h2>

        <img
            src="${iconUrl}"
            class="weather-icon"
        >

        <div class="temperature">
            ${temperature}°C
        </div>

        <p>${description}</p>
    `;
}

getWeather("Vellore");