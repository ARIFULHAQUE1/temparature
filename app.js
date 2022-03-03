const API_KEY = `76b4d4a61ff5db682a0e19112a6c4aa1`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
// displayTemperature
const displayTemperature = (tempeture) => {
    // console.log(tempeture)
    // city name
    setInnerText('city', tempeture.name)
    // city tempeture
    setInnerText('tempeture', tempeture.main.temp)
    // city cloud
    setInnerText('cloud', tempeture.weather[0].main)
    // set icon image
    const url = `http://openweathermap.org/img/wn/${tempeture.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src', url)
    console.log(tempeture)
}
