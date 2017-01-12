import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import GetLocationContainer from '../containers/GetLocationContainer'
import { headerStyles } from '../styles/index'

const Header = React.createClass({
  propTypes: {
    city: PropTypes.string
  },
  render () {
    const linkStyle = {color: 'white', textDecoration: 'none'}
    return (
      <div style={headerStyles.container}>
        <Link to='/' style={linkStyle}>
          <h2 style={{margin: 0}}>Weather App</h2>
        </Link>
        <GetLocationContainer
          direction={'row'}
          city={this.props.city} />
      </div>
    )
  }
})

export default Header
