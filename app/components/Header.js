import React from 'react'
import GetLocationContainer from '../containers/GetLocationContainer'
import { headerStyles } from '../styles/index'

const Header = React.createClass({
  render () {
    return (
      <div style={headerStyles.container}>
        <h2 style={{margin: 0}}>Weather App</h2>
        <GetLocationContainer direction={'row'} />
      </div>
    )
  }
})

export default Header
