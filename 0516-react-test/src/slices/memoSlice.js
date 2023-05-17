// 제공받은 슬라이스를 통해서
// 이름, 초기값, 리듀서 작성
import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({
    name : "memo",
    initialState : [
        {
            id :1,
            text : "메모입니다",
            date : "2023-05-17",
            isLike : false
        },
        {
            id :2,
            text : "두번째 메모입니다",
            date : "2023-05-17",
            isLike : true
        },
    ],
    reducers : {
        addMemo : (state, action)=>{
            // 값을 컴포넌트에서 들고올때는 action을 통해서 들고옴
            // action의 payload로 들고올 값 지정 : text값을 가져옴
            // id, date, isLike는 reducer에서 값 고정
            const newMemo = {
                text : action.payload,
                id : id,
                date : "2023-05-17",
                isLike : false
            }
            id++;

            // 리덕스 툴킷은 값에 직접 접근해서 수정해도 
            // 값이 업데이트가 된다
            // push()는 원본 배열에 바로 추가
            // concat()은 원본은 그대로 있고 return 값에 추가
            state.push(newMemo);
        },
        deleteMemo : (state, action)=>{
            // action.payload : 배열의 인덱스의 값
            state.splice(action.payload, 1)
        },
        likeMemoRedux : (state, action)=>{
            // action.payload로 memo.id 값 가져와서 수정

            // 값을 수정할때, map을 이용하여 수정 후
            const newMemoList = state.map((memo)=>(memo.id === action.payload ? {...memo, isLike: !memo.isLike} : memo))
            // 새로운 배열 반환: state에 직접접근해서 값을 수정X
            // return해서 전체 값을 전달
            return newMemoList;
        },
        likeMemoToolkit : (state, action)=> {
            // toolkit에서 state에 직접접근해서 값 바꿀수 있다
            // splice 이용해서 값을 수정할 예정
            // splice(넣을 인덱스 위치, 삭제개수(1), 수정할 값) >> 요소값 대체
            // 필요한 값 : 인덱스값(payload.index), 수정할 값(payload.memo)
            
            // 수정할 값을 가져와서 isLike 값을 바꿔서 넣어준다
            const modifyMemo = {
                ...action.payload.memo,
                isLike : !action.payload.memo.isLike
            }
            state.splice(action.payload.index, 1, modifyMemo)
        }
    }
})

// 코드안에서 변수로 쓸 값
let id = 3;

export const { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit} = memoSlice.actions;
export default memoSlice.reducer