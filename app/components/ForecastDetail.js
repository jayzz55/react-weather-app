import React, { PropTypes } from 'react'
import DayItem from './DayItem'
import Header from './Header'
import Loading from './Loading'
import { mainStyles } from '../styles/index'

const styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function ForecastDetail ({city, weather, isLoading}) {
  return (isLoading === true)
    ? (
      <div style={mainStyles.container}>
        <Header city={city} />
        <Loading />
      </div>)
    : (
      <div style={styles.container}>
        <Header city={city} />
        <DayItem day={weather} />
        <div style={styles.descriptionContainer}>
          <p>{city}</p>
          <p>{weather.weather[0].description}</p>
          <p>min temp: {weather.temp.min} °C</p>
          <p>max temp: {weather.temp.max} °C</p>
          <p>humidity: {weather.humidity}</p>
        </div>
      </div>
  )
}

ForecastDetail.propTypes = {
  city: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
}

export default ForecastDetail
