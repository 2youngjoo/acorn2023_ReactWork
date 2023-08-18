// src/components/MenuComponent.js

import { Component } from "react";


class MenuComponent extends Component{

    render(){
        // 체크박스를 출력할 데이터를 담은 배열
        let menu=[
            {id:1, name:"국밥"},
            {id:2, name:"치킨"},
            {id:3, name:"피자"},
            {id:4, name:"중국집"},
            {id:5, name:"양식"}
        ];
        
        const checkList = menu.map((item, index)=>{
            return (
                <label key={item.id}>
                    <input type="checkbox" /> {item.name}
                </label>
            )
        });
        return (
            <div>
                <h3>먹고 싶은 메뉴를 체크 하세요</h3>
                {checkList}
                <h3>선택된 메뉴 목록입니다.</h3>
                <ul>

                </ul>
            </div>
        )
    }
}

export default MenuComponent