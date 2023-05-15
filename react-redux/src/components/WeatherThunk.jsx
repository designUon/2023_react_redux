import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather } from '../modules/weatherThunk';

export default function WeatherThunk() {
  const weather = useSelector((state)=>(state.weatherThunk))

  const dispatch = useDispatch();

  useEffect(()=>{ dispatch(getWeather()) }, [])
  
  return (
    <div>
      {/* {weather.loading ? "로딩중" : "로딩중아님"} */}
      {weather.loading && "로딩중"}
      <p>{weather.weather && weather.weather}</p>
    </div>
  )
}
