import React, { PropTypes } from 'react'
import Radium from 'radium'
import { getLocationStyles } from '../styles/index'

function Button ({onSubmitCity, children}) {
  return (
    <button type='button'
      style={getLocationStyles.button}
      className='btn btn-success'
      onClick={onSubmitCity}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  children: PropTypes.node
}

function InputField ({onUpdateCity, city}) {
  return (
    <input
      className='form-control'
      onChange={onUpdateCity}
      placeholder='St. George, Utah'
      type='text'
      value={city} />
  )
}

InputField.propTypes = {
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

function GetLocation ({onUpdateCity, onSubmitCity, city, direction}) {
  const flexDirection = direction || 'column',
        containerStyle = [getLocationStyles.container, {flexDirection}]

  return (
    <div style={containerStyle}>
      <InputField
        onUpdateCity={onUpdateCity}
        city={city} />
      <Button
        onSubmitCity={onSubmitCity}>
        Get Weather
      </Button>
    </div>
  )
}

GetLocation.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default Radium(GetLocation)
