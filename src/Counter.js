import React from "react";

// 1. counter 기본 구성 셋팅 
const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff}) => {
    const onChange = e => {
        // e.target.value의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
        onSetDiff(parseInt(e.target.value, 10))
    };

    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;