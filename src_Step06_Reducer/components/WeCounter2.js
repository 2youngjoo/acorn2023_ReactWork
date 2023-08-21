// src/components/MyCounter.js

import { useReducer } from "react"

// 상수처럼 사용할 object 정의하기
const ACTION = {
    MINUS:0,
    PLUS:1
};


// reducer 함수 만들기
const reducer = (state, action) => {
    let newState;
    // 현재 상태값과 액션값이 전달 된다.
    if(action == ACTION.MINUS){
        newState = {
            ...state,
            count:state.count-1
        }
    }else if(action == ACTION.PLUS){
        newState = {
            ...state,
            count:state.count+1
        }
    }else{
        newState = state;
    }
    return newState;
}

// 함수형 component
function WeCounter2(){
    /*
        [ 상태값, 상태를 변결할 때 사용할 함수 ] = useReducer(reducer 함수, 초기값)
    */
    const [state, dispatch] = useReducer(reducer, {
        count:0
    });

    return (
        <div>
            <button onClick={()=>{
               // 카운타 값을 감소 시켜 달라는 액션을 발생(발행) 시킨다.
               dispatch(ACTION.MINUS); // 결과적으로 reducer 함가 호출 된다.
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick={()=>{
                // 카운타 값을 증가 시켜 달라는 액션을 발생(발행) 시킨다.
               dispatch(ACTION.PLUS);
            }}>+</button>
        </div>
    )
}

export default WeCounter2

