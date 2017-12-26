import React from 'react'

import '../assets/weatherlist.css'
import WeatherList from '../components/WeatherList'
import InputCities from '../components/InputCities'

const weatherContainer = () => {
    return(
        <div className='container'>
            <InputCities/>
            <WeatherList/>
        </div>
    )
}

export default weatherContainer;

