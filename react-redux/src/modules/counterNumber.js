const initialState = {
    count : 0,
    num : 1
}

// 액션 생성 함수
export const increaseNumber = () => ({ type : "INCREASE_NUMBER"});
export const decreaseNumber = () => ({ type : "DECREASE_NUMBER"});
export const changeNumber = num => ({ type : "CHANGE_NUMBER", payload:num});

// 리듀서 작성
function counterNumber(state = initialState, action) {
    switch(action.type){
        case "INCREASE_NUMBER" :
            // state 값의 형태가 객체라면 그 형태를 계속 유지
            return {
                ...state,
                count : state.count + state.num
            }
        case "DECREASE_NUMBER" :
            return {
                ...state,
                count : state.count - state.num
            }
        case "CHANGE_NUMBER" :
            return {
                ...state,
                num : action.payload
            }
        default :
            return state
    }
}

export default counterNumber;