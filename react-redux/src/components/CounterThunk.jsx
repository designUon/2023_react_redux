import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNum, addNumThunk } from '../modules/counterThunk';

export default function CounterThunk() {

    const counterThunk = useSelector((state)=>(state.counterThunk))

    const dispatch = useDispatch();

    return (
        <div>
            <hr />
            <h2>CounterThunk</h2>
            <p>{counterThunk.num},{counterThunk.thunkNum}</p>
            <button onClick={()=>{dispatch( addNum() )}}>
                REDUX ACTION
            </button>
            <button onClick={()=>{dispatch( addNumThunk() )}}>
                REDUX THUNK
            </button>
        </div>
    )
}
