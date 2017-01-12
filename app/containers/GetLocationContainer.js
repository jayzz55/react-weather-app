import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import GetLocation from '../components/GetLocation'
import weatherApiHelper from '../utils/weatherApiHelper'

const GetLocationContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string,
    city: PropTypes.string
  },
  getInitialState () {
    return {
      city: this.props.city || ''
    }
  },
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity () {
    // console.log(this.state.city);
    // weatherApiHelper.getCurrentWeatherInfo(this.state.city)
    //   .then((info) => {console.log(info)})
    this.context.router.push('/forecast/' + this.state.city)
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
