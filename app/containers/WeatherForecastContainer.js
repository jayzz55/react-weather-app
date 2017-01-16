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
    weatherApiHelper.getWeatherForecastInfo(this.state.city)
      .then((info) => (
        this.setState({
          isLoading: false
        }),
        console.log(info)
      ))
  },
  render () {
    return (
      <WeatherForecast
        params={this.props.params}
        isLoading={this.state.isLoading} />
    )
  }
})

export default WeatherForecastContainer
