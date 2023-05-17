// 제공받은 슬라이스를 통해서 이름, 초기값, 리듀서 작성
import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({

    name : "memo",

    initialState : [
        {
            id : 1,
            text : "첫번째 메모입니다",
            date : "2023-05-17",
            isLike : false
        },
        {
            id : 2,
            text : "두번째 메모입니다",
            date : "2023-05-17",
            isLike : false
        },
    ],

    reducers : {

        addMemo : (state, action)=>{
            const newMemo = {
                text : action.payload,
                // payload = MemoComp.jsx의 input value={input}값
                // id : 3,
                id : id,
                date : "2023-05-17",
                isLike : false
            }
            id++;
            state.push(newMemo);
        },
        deleteMemo : (state, action)=>{
            // action.payload : 배열의 인덱스 값
            state.splice(action.payload, 1)
        },
        likeMemoRedux : (state, action)=>{
            //action.payload로 memo.id 값 가져와서 수정

            //값을 수정할 때, map을 이용하여 수정 후
            const newMemoList = state.map((memo)=>(memo.id === action.payload ? {...memo, isLike : !memo.isLike} : memo))
            //새로운 배열 반환 : state에 직접 접근해서 값을 수정 X
            //return해서 전체 값을 전달
            return newMemoList;
        },
        likeMemoToolkit : (state, action) => {
            // toolkit에서 state에 직접 접근해서 값 바꿀 수 있다
            // splice를 이용해서 값을 수정할 예정
            // splice(넣을 인덱스 위치, 삭제개수(1), 추가할 값) >> 요소값 대체
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

export const { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit } = memoSlice.actions;
export default memoSlice.reducer