// 작성한 리듀서 모듈 하나로 묶어서 사용
import { combineReducers } from "redux"

// 작성한 리듀서 가져옴
import counter from "./counter"
import counterNumber from "./counterNumber"
import memo from "./memo"
import counterThunk from "./counterThunk"
import weatherThunk from "./weatherThunk"

// 작성한 리듀서들을 객체로 묶어서 내보냄
const rootReduser = combineReducers({ counter, counterNumber, memo, counterThunk, weatherThunk })
// 위 객체에 추가하면 state.memo처럼 작성해서 사용가능

export default rootReduser