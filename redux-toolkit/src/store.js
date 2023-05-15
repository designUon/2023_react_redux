// 리덕스 툴킷을 사용해서 작성한 리덕스들을 묶어서 store로 내보냄

// redux에서 createStore 작성하는 부분
import { configureStore } from '@reduxjs/toolkit'

// 작성한 리듀서를 가져와서 연결
// export default로 가져온 값은 오직 하나이므로
// 아래와 같이 이름을 바꿔서 들고 올 수 있다
import counterReducer from './slices/counterSlice';
// counterReducer와 counterSlice는 동일한 내용!
import counterSlice from './slices/counterSlice';

// combineReducer를 이용하여 묶어주고 store로 내보내는 부분
export default configureStore({
    reducer : {
        counter : counterReducer,
    },
})