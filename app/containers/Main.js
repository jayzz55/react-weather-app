import React, { PropTypes } from 'react'

const Main = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired
  },
  render () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    );
  },
});

export default Main
