import React from 'react'
import GetLocationContainer from '../containers/GetLocationContainer'
import { homeStyles } from '../styles/index'

function Home () {
  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.header}>Enter a City and State</h1>
      <GetLocationContainer />
    </div>
  );
}

export default Home

