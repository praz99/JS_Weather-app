import Weather from './logic';

const newForm = document.querySelector('[data-search-city-form]');
const cityInput = document.querySelector('[data-city-name-input]');

const showWeatherContainer = document.querySelector('[data-display-weather-container]');
const switchBtn = document.querySelector('[data-switch-unit]');

const LOCAL_STORAGE_CITY_NAME = 'weather.city';


const getUnit = () => {
  if(switchBtn.innerHTML === 'Celcius') {
    return 'imperial';
  } else {
    return 'metric';
  }
}

const toggleUnit = () => {
  switchBtn.addEventListener('click', e => {
    e.preventDefault();
    if(switchBtn.innerHTML === 'Celcius') {
      switchBtn.innerHTML = 'Fahrenheit';
    } else {
      switchBtn.innerHTML = 'Celcius';
    }
  
    Weather(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CITY_NAME)), getUnit());
  });
}

const getCity = () => {
  newForm.addEventListener('submit', e => {
    e.preventDefault();
    const cityName = cityInput.value;
    localStorage.setItem(LOCAL_STORAGE_CITY_NAME, JSON.stringify(cityName));
    Weather(cityName, getUnit());
    showWeatherContainer.style.display = 'flex';
    newForm.reset();
  });
};

export { getCity, toggleUnit };
