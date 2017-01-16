import React, { PropTypes } from 'react'
import Header from './Header'
import Loading from './Loading'
import { mainStyles } from '../styles/index'

function WeatherForecast (props) {
  return props.isLoading === true
    ? (
      <div style={mainStyles.container}>
        <Header city={props.params.city} />
        <Loading />
      </div>)
    : (
    <div style={mainStyles.container}>
      <Header city={props.params.city} />
      <h1>Weather forecast component</h1>
    </div>
  )
}

WeatherForecast.propTypes = {
  params: PropTypes.object,
  isLoading: PropTypes.bool
}

export default WeatherForecast
