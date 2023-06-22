

const apikey = "79fca5d00ecbf71a766a7b681fad81f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector('.search')
const searchbtn = document.querySelector('.btn')
const icon = document.querySelector('.icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    var data = await response.json()

    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " ℃";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humid').innerHTML = data.main.humidity + " %";
    document.querySelector('.cloud').innerHTML = data.clouds.all;
    document.querySelector('.speed').innerHTML = data.wind.speed + "km/hr";


    if (data.weather[0].main == 'Haze') {
        icon.src = 'haze.svg'
    }
    else if (data.weather[0].main == 'Clouds') {
        icon.src = 'cloudy.svg'
    }
    else if (data.weather[0].main == 'Clear') {
        icon.src = 'clear.svg'
    }
    else if (data.weather[0].main == 'Rain') {
        icon.src = 'rain.svg'
    }
    else if (data.weather[0].main == 'Drizzle') {
        icon.src = 'drizzle.svg'
    }
    else if (data.weather[0].main == 'Mist') {
        icon.src = 'mist.svg'
    }
    else if (data.weather[0].main == 'Smoke') {
        icon.src = 'smoke.svg'
    }

}

searchbtn.addEventListener('click', () => {
    checkWeather(search.value)
})