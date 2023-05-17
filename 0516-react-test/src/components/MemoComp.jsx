import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit } from '../slices/memoSlice';


export default function MemoComp() {

    // state = store.js의 전체리듀서 / memo = store.js의 리듀서이름
    const memolist = useSelector((state)=>(state.memo))
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    // memolist중에서 isLike가 true인 배열
    // filter() 사용
    const likeMemo = memolist.filter((memo)=>(memo.isLike))

    return (
        <div>
            <h2>MEMO</h2>
            <input
                type="text" value={input}
                onChange={(e)=>{setInput(e.target.value)}}
            />
            <button onClick={()=>{dispatch(addMemo(input)); setInput("");}}>추가</button>
            {
                memolist.map((memo, index)=>(
                    <div>
                        <h3>{memo.text}</h3>
                        <span>{memo.date}</span>
                        <button onClick={()=>{dispatch(likeMemoRedux(memo.id))}}>{memo.isLike ? "💚" : "🤍"}</button>
                        <button onClick={()=>{dispatch(likeMemoToolkit({index:index, memo:memo}))}}>{memo.isLike ? "💚" : "🤍"}</button>
                        <button onClick={()=>{dispatch(deleteMemo(index))}}>X</button>
                    </div>
                ))
            }

            <hr />

            <h3>즐겨찾기</h3>
            {
                likeMemo.map((memo)=>(
                    <h3>{memo.text}</h3>
                ))
            }


        </div>
    )
}
