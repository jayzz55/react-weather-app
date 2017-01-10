import React from 'react'
import GetLocation from './GetLocation'
import { homeStyles } from '../styles/index'

function Home () {
  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.header}>Enter a City and State</h1>
      <GetLocation />
    </div>
  );
}

export default Home

