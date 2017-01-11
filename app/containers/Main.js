import React, { PropTypes } from 'react'
import Header from '../components/Header'
import { mainStyles } from '../styles/index'

const Main = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired
  },
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
