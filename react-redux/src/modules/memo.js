/* 액션함수,

memo.js
1.메모 추가
2. 메모 수정
3. 메모 삭제
state : [] 여러개 / text, date(내용)
action : "ADD_MEMO", "MODIFY_MEMO", "DELETE_MEMO"

*/

// state의 초기값
const initialState = [
    {
        id : 1,
        text : "첫번째 메모입니다",
        date : "2023-05-12"
    },
    {
        id : 2,
        text : "두번째 메모입니다",
        date : "2023-05-12"
    }
]

// 화면에 출력될 때 수정되어서 출력되지않는 내용
let id = 3;

// 액션 생성 함수
// addMemo는 메모의 값을 추가하기위해 함수를 통해 memo의 값을 가져옴
// : {text, date}을 가져와야함 >> dispatch 사용할때 확인
export const addMemo = (memo) => ({ type : "ADD_MEMO", payload : memo });
// id는 메모의 id값을 가져옴
export const delMemo = (id) => ({ type : "DEL_MEMO", payload : id });

// 리듀서
function memo(state = initialState, action) {
    switch(action.type){

        case "ADD_MEMO" :
            // return [
            //     ...state,
            //     {
                    
            //     }
            // ]

            // 위 방법으로 배열을 작성해도되지만, concat으로 작성!
            // return위에 자바스크립트 작성가능

            // 새로운 메모작성
            const newMemo = {
                ...action.payload,
                // id : 3
                id : id
            }

            id++

            // 새 메모리스트를 만들고
            const newMemoList = state.concat(newMemo)
            
            // 새 메모리스트를 return
            return newMemoList;
        
        case "DEL_MEMO" :
            // filter를 통해서 id를 제외(!==)하고 새로운 배열
            const delMemoList = state.filter( (memo)=> memo.id !== action.payload)
            return delMemoList;


        default :
            return state;
            
    }
}

export default memo