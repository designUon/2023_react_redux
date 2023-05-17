import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherAPI } from '../slices/weatherSlice';

export default function WeatherComp() {

    const weather = useSelector((state)=>(state.weather))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getWeatherAPI())
    },[])

    return (
        <div>
            <h3>WeatherComp</h3>
            <p>{weather.loading ? "로딩중입니다" : "로딩이 끝났습니다"}</p>
            <p>{weather.weather && weather.weather}</p>
        </div>
    )
}
