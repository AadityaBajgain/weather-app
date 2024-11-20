import React from 'react'
import "./Forcast.css"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
const week_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const Forcast = ({ data }) => {
    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15)
    }
    const dayInWeek = new Date().getDay();
    const forcastDays = week_days.slice(dayInWeek, week_days.length).concat(week_days.slice(0, dayInWeek));
    // console.log(forcastDays)
    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className='daily-item'>
                                        <img src={`weatherPNG/${item.weather[0].icon}.png`} alt="weather" className='icon-small' />
                                        <label className='day'>{forcastDays[index]}</label>
                                        <label className='description'>{item.weather[0].description}</label>
                                        <label className='min-max'>{kelvinToCelsius(item.main.temp_min)}°C / {kelvinToCelsius(item.main.temp_max)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='daily-details-grid'>
                                    <div className='daily-details-grid-item'>
                                        <label >Pressure</label>
                                        <label >{item.main.pressure} Pa</label>
                                    </div>
                                    <div className='daily-details-grid-item'>
                                        <label >Humidity</label>
                                        <label >{item.main.humidity} %</label>
                                    </div>
                                    <div className='daily-details-grid-item'>
                                        <label >Clouds</label>
                                        <label >{item.clouds.all} %</label>
                                    </div>
                                    <div className='daily-details-grid-item'>
                                        <label >Wind Speed</label>
                                        <label >{item.wind.speed} m/s</label>
                                    </div>
                                    <div className='daily-details-grid-item'>
                                        <label >Sea Level</label>
                                        <label >{item.main.sea_level} m</label>
                                    </div>
                                    <div className='daily-details-grid-item'>
                                        <label >Feels Like</label>
                                        <label >{kelvinToCelsius(item.main.feels_like)} °C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    )
}

export default Forcast
