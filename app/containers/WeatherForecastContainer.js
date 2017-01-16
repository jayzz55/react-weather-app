import React, { PropTypes } from 'react'
import WeatherForecast from '../components/WeatherForecast'
import weatherApiHelper from '../utils/weatherApiHelper'

const WeatherForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      city: this.props.params.city,
      weatherForecasts: [],
    }
  },
  componentWillReceiveProps (nextProps) {
    this.fetchInfo(nextProps.params.city)
  },
  componentDidMount () {
    this.fetchInfo(this.state.city)
  },
  fetchInfo (city) {
    weatherApiHelper.getWeatherForecastInfo(city)
      .then((info) => (
        this.setState({
          isLoading: false,
          weatherForecasts: info.data.list.map((forecast) => (
            1
          ))
        }),
        console.log(info)
      ))
  },
  render () {
    return (
      <WeatherForecast
        params={this.props.params}
        weatherForecasts={this.state.weatherForecasts}
        isLoading={this.state.isLoading} />
    )
  }
})

export default WeatherForecastContainer
