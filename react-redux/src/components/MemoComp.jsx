import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemo, delMemo } from '../modules/memo';

export default function MemoComp() {

    const memo = useSelector((state) => (state.memo));
    // console.log(memo)

    const [input, setInput] = useState("");

    const [memoinput, setMemoinput] = useState("");

    const dispatch = useDispatch();

    // const onAddMemo =()=>{ dispatch(addMemo( {text : "추가한 메모입니다", date : "2023-05-12"} )) }
    const onAddMemo =()=>{
        dispatch(addMemo({
            text : input,
            date : "2023-05-12"
        }));
        setInput("");
    }

    // const onDelMemo =()=>{
    //     dispatch(delMemo({
    //         text : input,
    //         date : "2023-05-12"
    //     }));
    // }

    const onSubmitMemo =()=>{
        dispatch(addMemo({
            text : memoinput,
            date : "2023-05-12"
        }));
        setMemoinput("");
    }

    return (
        <div>
            <br />
            <hr />
            <br />
            <h2>MemoComp</h2>

            
            {/* form으로 작성하면 새로고침 기능이 포함되어있음 */}
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                // 이벤트에 바로 작성할 때는 함수자체를 넣어야하기때문에
                // onAddMemo()로 넣고,
                // onSubmit에서 ()=>{} 안에 작성되고있기때문에
                // onSubmitMemo()만 작성해서 함수실행이 가능
                onSubmitMemo();
            }}>
                <input type="text" onChange={(e)=>{setMemoinput(e.target.value)}} value={memoinput}/>
                <input type="submit" value="+"/>
            </form>

            <br />

            <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
            {/* memo.js파일 내용 중
            export const addMemo = (memo) => ({ type : "ADD_MEMO", payload : memo }); 참고하기! */}
            <button onClick={ onAddMemo }>메모추가</button>
            {
                memo.map((m) => (
                    //map을 사용하면 key값 필수!
                    <div key={m.id}>
                        {/* <p>{memo[0].id}</p>
                        <h4>{memo[0].text}</h4>
                        <p>{memo[0].date}</p> */}
                        <p>{m.id}</p>
                        <h4>
                            {m.text}
                            <button
                                //클릭했을 때, m.id를 액션생성함수로 전달하여
                                //리듀서에서 filter를 통해 새 배열만들기
                                //memo.js에 작성
                                onClick={ ()=>{ dispatch( delMemo(m.id) )} }
                            >X</button>
                        </h4>
                        <p>{m.date}</p>

                    </div>
                ))
            }
        </div>
    )
}
