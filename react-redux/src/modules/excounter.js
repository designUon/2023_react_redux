export const increase = () => ({ type : "INCREASE" });
export const decrease = () => ({ type : "DECREASE" });

// state의 기본값 작성
const initialState = 0;

// 액션과 state를 받아와서 state를 바꾸는 리듀서함수
// 매개변수에 = 을 통해서 값을 미리 넣어둘 수 있다
function excounter(state = initialState, action) {
    // switch를 통해 액션의 타입확인
    switch (action.type) {
        case  "INCREASE":
            return state+1;
        case  "DECREASE":
            return state-1;
        default :
            return state;
    }
}



export default excounter;