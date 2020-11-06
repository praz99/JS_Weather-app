const getWeather = async () => {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&APPID=108f7da063795b7306e8b024f6068b48', {mode: 'cors'});
  const getData = await response.json();
  console.log(getData);
}

getWeather();