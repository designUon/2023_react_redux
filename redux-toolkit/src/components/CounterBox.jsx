import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from '../slices/counterSlice'

export default function CounterBox() {

    const counter = useSelector((state)=>(state.counter.value))
    
    //임의로 증가할 값을 useState
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    
    const dispatch = useDispatch();

    const inputNum1=(e)=>{
        // setNum1(Number(e.target.value));
        setNum1(parseInt(e.target.value));
    }

    const inputNum2=(e)=>{
        setNum2(Number(e.target.value));
        // value("");
    }

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={()=>{dispatch(increment())}}>
                +1
            </button>
            <button onClick={()=>{dispatch(decrement())}}>
                -1
            </button>
            <hr />
            {/* num값을 바꾸기위한 input 태그 작성 */}
            <input type="number" onChange={inputNum1}/>
            <button onClick={()=>{
                //매개변수로 전달되는 값은 payload로 사용할 수 있다
                dispatch(incrementByAmount(num1))
                }}>
                {num1}만큼 증가
            </button>
            <hr />
            <input type="number" onChange={inputNum2}/>
            <button onClick={()=>{
                //매개변수로 전달되는 값은 payload로 사용할 수 있다
                dispatch(decrementByAmount(num2))
                }}>
                {num2}만큼 감소
            </button>
        </div>
    )
}
