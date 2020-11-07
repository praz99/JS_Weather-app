const showCity = document.querySelector('[data-show-city]');
const showCountry = document.querySelector('[data-show-country]');
const showWeatherMain = document.querySelector('[data-show-weather-main]');
const showWeatherDesc = document.querySelector('[data-show-weather-desc]');
const showTempMain = document.querySelector('[data-show-temp-main]');
const showTempFeel = document.querySelector('[data-show-temp-feel]');
const showTempMax = document.querySelector('[data-show-temp-max]');
const showTempMin = document.querySelector('[data-show-temp-min]');
const showWind = document.querySelector('[data-show-wind]');

const weatherContainer = document.querySelector('[data-display-weather-container]');

const api_key = '108f7da063795b7306e8b024f6068b48';

const getWeather = async(city) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric`, {mode: 'cors'});
    const getData = await response.json();
    showCity.innerText = getData.name;
    showCountry.innerText = getData.sys.country;
    showWeatherMain.innerText = getData.weather[0].main;
    showWeatherDesc.innerText = getData.weather[0].description;
    showTempMain.innerText = Math.round(getData.main.temp);
    showTempFeel.innerText = Math.round(getData.main.feels_like);
    showTempMax.innerText = Math.round(getData.main.temp_max);
    showTempMin.innerText = Math.round(getData.main.temp_min);
    showWind.innerText = getData.wind.speed;
    console.log(getData);
  } catch(err) {
    showCity.innerText = `No data available for ${city}`;
    showCountry.innerText = '';
    showWeatherMain.innerText = '';
    showWeatherDesc.innerText = '';
    showTempMain.innerText = '';
    showTempFeel.innerText = '';
    showTempMax.innerText = '';
    showTempMin.innerText = '';
    showWind.innerText = '';
  }
}

export default getWeather;
