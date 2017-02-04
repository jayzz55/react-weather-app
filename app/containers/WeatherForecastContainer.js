import React, { PropTypes } from 'react'
import WeatherForecast from '../components/WeatherForecast'
import ForecastDetail from '../components/ForecastDetail'
import weatherApiHelper from '../utils/weatherApiHelper'
import { translateDay } from '../utils/timeHelper'

const WeatherForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      city: this.props.params.city,
      day: this.props.params.day,
      weatherForecasts: [],
    }
  },
  componentWillReceiveProps (nextProps) {
    this.fetchInfo(nextProps.params.city)
    this.setState({
      day: nextProps.params.day
    })
  },
  componentDidMount () {
    this.fetchInfo(this.state.city)
  },
  async fetchInfo (city) {
    try {
      const info = await weatherApiHelper.getWeatherForecastInfo(city);
      this.setState({
        isLoading: false,
        weatherForecasts: info.data.list.map((forecast) => (
          forecast
        ))
      })
    } catch (error) {
      console.log('Error in handleGetUser', error)
    }
  },
  handleClick: function (dayIndex) {
    this.context.router.push({
      pathname: '/forecast/' + this.props.routeParams.city + '/details/day-' + (dayIndex + 1)
    })
  },
  render () {
    if (this.state.day) {
      const dayIndex = translateDay(this.state.day) - 1;
      const weather = this.state.weatherForecasts[dayIndex] || {};

      return (
        <ForecastDetail
          city={this.props.params.city}
          weather={weather}
          isLoading={this.state.isLoading} />
      )
    } else {
      return (
        <WeatherForecast
          city={this.props.params.city}
          weatherForecasts={this.state.weatherForecasts}
          handleClick={this.handleClick}
          isLoading={this.state.isLoading} />
      )
    }
  }
})

export default WeatherForecastContainer
