import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherAPI } from '../slices/weatherSlice';

// 비동기로 값을 호출하는 내용을 dispatch로 불러와서 사용
// 비동기의 내용은 '../slices/weatherSlice' 이곳으로 들어가서 확인
export default function WeatherComp() {

    const weather = useSelector((state)=>(state.weather))
    const dispatch = useDispatch();

    // 시작하자마자 dispatch를 이용하여 값을 가져옴
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
