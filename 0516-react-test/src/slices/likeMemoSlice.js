import { createSlice } from '@reduxjs/toolkit'

export const likeMemoSlice = createSlice({
    name : "likeMemo",
    initialState : [
        {
            id :2,
            text : "두번째 메모입니다",
            date : "2023-05-17",
            isLike : true
        },
    ],
    reducers : {
        toggleLike : (state, action)=>{
            // action.payload로 memo값을 받아와 넣기
            if (state.find((like)=>(like.id === action.payload.id))) {
                // 버튼을 클릭했을 때 값이 있다면 삭제
                return state.filter((like)=>(like.id !== action.payload.id))
            } else {
                // 버튼을 클릭했을때 값 가져와서 넣기
                state.push(action.payload)
            }
        },
    }
})
export const { toggleLike } = likeMemoSlice.actions;
export default likeMemoSlice.reducer