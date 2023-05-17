import { createSlice } from "@reduxjs/toolkit";

// 날씨API를 통해서 값을 가져옴, >>  비동기함수
// loading은 fetchAPI를 사용할 때 걸리는 시간동안 true
// startLoading, endLoading, getWeather(가져온 값을 할당)

// 값이 바로바로 바뀌는 경우 => reducer에 작성
// 값을 서버에서 받아오는 경우 => 시간이 걸리기때문에 thunk에 작성

export const weatherSlice = createSlice({
    name : "weather",
    initialState : {
        weather : null,
        loading : false
    },
    reducers : {
        startLoading : (state)=>{state.loading = true},
        endLoading : (state)=>{state.loading = false},
        getWeather : (state,action)=>{
            // action.payload는 날씨 API에서 받아온 값
            state.weather = action.payload
        }
    }
})

// thunk를 사용한 액션생성함수 작성
export const getWeatherAPI = () => async(dispatch) => {

    dispatch(startLoading())

    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=f9ac14b8d4f9432cb6c305630fac6b25&lang=kr')
        const data = await response.json()
        console.log(data.weather[0].description);
        dispatch(getWeather(data.weather[0].description));
    }
    catch {
        // 오류가 났을 때 실행할 내용을 아래 작성
        dispatch(getWeather("없음"));
    }
    dispatch(endLoading())


}

export const { startLoading, endLoading, getWeather } = weatherSlice.actions;
export default weatherSlice.reducer