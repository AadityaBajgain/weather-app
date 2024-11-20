import React from 'react'
import "./CurrentWeather.css"
const currentWeather = ({data}) => {
  const kelvinToCelsius = (kelvin) => {
      return Math.round(kelvin - 273.15)
  }
  // console.log(data)

  return (
    <>
    
    {data &&  <div className='weather'>
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <img src={`weatherPNG/${data.weather[0].icon}.png`} alt="weather" className='weatherIcon'/>
      </div>
      <div className="bottom">
        <p className="temp">{kelvinToCelsius(data.main.temp)}°C</p>
        <div className="details">
          <div className='parameter-row'>
              <span className='parameter-detail'>Details</span>
          </div>
          <div className='parameter-row'>
              <span className='parameter-label'>Feels Like</span>
              <span className='parameter-value'>{kelvinToCelsius(data.main.feels_like)}°C</span>
          </div>
          <div className='parameter-row'>
              <span className='parameter-label'>Wind</span>
              <span className='parameter-value'>{data.wind.speed} m/s</span>
          </div>
          <div className='parameter-row'>
              <span className='parameter-label'>Humidity</span>
              <span className='parameter-value'>{data.main.humidity}%</span>
          </div>
          <div className='parameter-row'>
              <span className='parameter-label'>Pressure</span>
              <span className='parameter-value'>{data.main.pressure}Pa</span>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export default currentWeather
