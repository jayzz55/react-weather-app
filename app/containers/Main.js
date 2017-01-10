import React from 'react'
import Header from '../components/Header'
import { mainStyles } from '../styles/index'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container' style={mainStyles.container}>
        <Header />
        {this.props.children}
      </div>
    );
  },
});

export default Main
