// src/components/FoodComponent.js

import { useState } from "react";

function FoodComponent(){

    const [state, setState] = useState({
        food:"",
        foods:[],
        index:0
    });

    return (
        <div>
            <h3>좋아하는 음식</h3>
            <input type="text" placeholder="음식 입력...." onChange={(e)=>{
                setState({
                    ...state,
                    food:e.target.value // 현재까지 입력한 음식 이름
                });
            }}/>
            <button onClick={()=>{
                // 입력한 음식 이름을 state.foods 에 추가하기
                setState({
                    ...state,
                    foods:[...state.foods, <li key={state.index}>{state.food}</li>],
                    index:state.index+1
                });
            }}>추가</button>
            <ul>
                {state.foods}
            </ul>
        </div>
    );
}

export default FoodComponent