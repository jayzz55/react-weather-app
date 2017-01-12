import React, { PropTypes } from 'react'
import GetLocationContainer from '../containers/GetLocationContainer'
import Header from '../components/Header'
import { homeStyles } from '../styles/index'
import { mainStyles } from '../styles/index'

function Home (props) {
  return (
    <div style={mainStyles.container}>
      <Header city={props.params.city} />
      <div style={homeStyles.container}>
        <h1 style={homeStyles.header}>Enter a City and State</h1>
        <GetLocationContainer city={props.params.city} />
      </div>
    </div>
  );
}

Home.propTypes = {
  params: PropTypes.object
}

export default Home
