import React,{useState} from 'react'
import Search from './components/search/Search'
import CurrentWeather from "./components/currentWeather/CurrentWeather"
import { weatherUrl,WEATHER_API_KEY, forcastUrl } from './Api'
import Forcast from './components/forcast/Forcast'


const App = () => {
  const [currentWeather,setCurrentWeather] = useState(null);
  const [forcast,setForcast] = useState(null);

  const onSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
  
    const currentWeatherFetch = fetch(
      `${weatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
  
    const forcastFetch = fetch(
      `${forcastUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
  
    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (responses) => {
        const [weatherResponse, forecastResponse] = await Promise.all(
          responses.map((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
        );
  
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err.message);
      });
  };
  
  console.log(currentWeather)
  console.log(forcast)
  return (
    <div className='container'>
      <Search onSearchChange={onSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forcast && <Forcast data={forcast}/>} 
    </div>
  )
}

export default App

