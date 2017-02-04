import React, { PropTypes } from 'react'
import Header from './Header'
import Loading from './Loading'
import DayItem from './DayItem'
import { mainStyles } from '../styles/index'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

function ForecastUI ({city, weatherForecasts, handleClick}) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>{city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
        {
          weatherForecasts.map((listItem, index) => (
            <DayItem
              key={listItem.dt}
              day={listItem}
              handleClick={handleClick.bind(null, index)}/>
          ))
        }
      </div>
    </div>
  )
}

ForecastUI.propTypes = {
  weatherForecasts: PropTypes.array
}

function WeatherForecast ({isLoading, city, weatherForecasts, handleClick}) {
  return (isLoading === true)
    ? (
      <div style={mainStyles.container}>
        <Header city={city} />
        <Loading />
      </div>)
    : (
    <div style={mainStyles.container}>
      <Header city={city} />
      <ForecastUI
      city={city}
      handleClick={handleClick}
      weatherForecasts={weatherForecasts} />
    </div>
  )
}

WeatherForecast.propTypes = {
  city: PropTypes.string,
  weatherForecasts: PropTypes.array,
  handleClick: PropTypes.func,
  isLoading: PropTypes.bool
}

export default WeatherForecast
