import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoSplice } from '../slices/memoSlice';

export default function MemoComp() {

    const memo = useSelector((state) => (state.memo))

    const dispatch = useDispatch();

    const [memolist, setMemoList] = useState();

    const inputMemo =(e)=>{
        setMemoList(e.target.value);
    }

    return (
        <div>
            <hr />
            <input type="text" onChange={inputMemo}/>
            <br/>
            {/* <button onClick={()=>{dispatch(addMemoRedux({text:"추가", date:"2023-05-15"}))}}> */}
            <button onClick={()=>{dispatch(addMemoRedux({text:memolist, date:"2023-05-15"}))}}>
                메모추가
            </button>
            <button onClick={()=>{dispatch(addMemoToolkit({text:memolist, date:"2023-05-15"}))}}>
                Toolkit 형태로 추가
            </button>
            {
                // memo 배열의 index 값을 전달하여 splice를 이용하여 삭제
                // 다양한 삭제 방법 중 하나
                memo.map((m, index) => (
                    <div key={m.id}>
                        <h3>{m.text} <button onClick={()=>{dispatch(deleteMemoRedux(m.id))}}>X</button> </h3>
                        <p>{m.date}</p>
                        <button onClick={()=>{dispatch(deleteMemoSplice(index))}}>index-X</button>
                    </div>
                ))
            }
            
            {/* <h3>{memo[0].text}</h3>
            <p>{memo[0].date}</p> */}

        </div>

    )
}
