const URL = 'http://openweathermap.org/data/2.5/find?units=metric&appid=b1b15e88fa797225412429c1c50c122a1&q=';

function getTemp(cityName) {
    return fetch(URL + cityName)
        .then(res => res.json())
        .then(resJSON => resJSON.list[0].main.temp);
}

export default getTemp;
