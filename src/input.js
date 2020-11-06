import Weather from './logic';

const newForm = document.querySelector('[data-search-city-form]');
const cityInput = document.querySelector('[data-city-name-input]');

const getCity = () => {
  newForm.addEventListener('submit', e => {
    e.preventDefault();
    const cityName = cityInput.value;
    Weather(cityName);
    newForm.reset();
  });
};

export default getCity;
