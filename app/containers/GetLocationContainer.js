import React, { PropTypes } from 'react'
import GetLocation from '../components/GetLocation'
import weatherApiHelper from '../utils/weatherApiHelper'

const GetLocationContainer = React.createClass({
  getDefaultProps () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState () {
    return {
      city: ''
    }
  },
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity () {
    console.log(this.state.city);
    weatherApiHelper.getCurrentWeatherInfo(this.state.city)
      .then((info) => {console.log(info)})
  },
  render () {
    return (
      <GetLocation
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city} />
    )
  }
});

export default GetLocationContainer
