import React, { PropTypes } from 'react'
import Header from '../components/Header'
import { mainStyles } from '../styles/index'

function WeatherForecast (props) {
  return (
    <div style={mainStyles.container}>
      <Header city={props.params.city} />
      <h1>Weather forecast component</h1>
    </div>
  )
}

WeatherForecast.propTypes = {
  params: PropTypes.object
}

export default WeatherForecast
