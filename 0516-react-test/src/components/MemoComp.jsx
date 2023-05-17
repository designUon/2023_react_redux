import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMemo, deleteMemo, likeMemoRedux, likeMemoToolkit } from '../slices/memoSlice';
import { toggleLike } from '../slices/likeMemoSlice';

export default function MemoComp() {
  const memolist = useSelector((state)=>(state.memo))
  const likememolist = useSelector((state)=>(state.likeMemo))
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  // memolist중에서 isLike가 true인 배열
  // filter() 사용
  const likeMemo = memolist.filter((memo)=>(memo.isLike))

  return (
    <div>
        <h2>메모장입니다</h2>
        <input type="text" 
            value={input} 
            onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=>{dispatch(addMemo(input))}}>
            추가
        </button>
        {
            memolist.map((memo,index)=>(
                <div key={memo.id}>
                    <h3>{memo.text}</h3>
                    <span>{memo.date}</span>
                    <button onClick={()=>{dispatch(likeMemoRedux(memo.id))}}>
                        {memo.isLike ? "찜완료" : "찜하기"}
                    </button>
                    <button onClick={()=>{dispatch(likeMemoToolkit({index, memo}))}}>
                        {memo.isLike ? "찜완료" : "찜하기"}
                    </button>
                    <button onClick={()=>{dispatch(toggleLike(memo))}}>
                        {likememolist.find((likememo)=>(likememo.id === memo.id)) ? "🖤" : "🤍"}
                    </button>
                    <button 
                    onClick={()=>{
                            dispatch(deleteMemo(index))
                            // 삭제할때, id값이 있다면 , toggle도 함께 실행하기
                            // likeMemo에서 값 제거
                            if(likememolist.find((likememo)=>(likememo.id === memo.id))) {
                                dispatch(toggleLike(memo))
                            }
                        }}>
                        X
                    </button>
                </div>
            ))
        }
        <hr />
        <h3>likeMemo로 확인</h3>
        {
            likememolist.map((memo)=>(
                <h4>{memo.text}</h4>
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
