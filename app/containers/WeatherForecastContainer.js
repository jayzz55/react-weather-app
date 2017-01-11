import React, { PropTypes } from 'react'
import WeatherForecast from '../components/WeatherForecast'
import weatherApiHelper from '../utils/weatherApiHelper'

const WeatherForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      weatherForecasts: [],
    }
  },
  componentDidMount () {
    const query = this.props.location.query
  },
  render () {
    <WeatherForecast />
  }
})

export default WeatherForecastContainer
