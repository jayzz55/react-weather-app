import axios from 'axios'

const apiKey = '9291b3a83ff7dd59f1e66df1c306d4fa',
      forecastDays = 5,
      currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather`,
      weatherForecastUrl = `http://api.openweathermap.org/data/2.5/forecast/daily`

const weatherApiHelper = {
  getCurrentWeatherInfo (city) {
    return axios.get(`${currentWeatherUrl}?q=${city}&type=accurate&APPID=${apiKey}&units=metric`);
  },
  getWeatherForecastInfo (city, forecastDays=5) {
    return axios.get(`${weatherForecastUrl}?q=${city}&type=accurate&APPID=${apiKey}&cnt=${forecastDays}&units=metric`);
  }
}

export default weatherApiHelper
