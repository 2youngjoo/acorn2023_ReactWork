import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
/*
function App() {
  return (
    <div className="container">
      <h1>인덱스 페이지 입니다.</h1>
    </div>
  );
}
*/

// 함수형 component 에서 클래스형 component 로 변경하기
class App extends Component{

  // 상태값(state) 관리하기
  state = {
    count:0
  };

  // 버튼을 눌렀을 때 실행할 함수
  buttonClicked = ()=>{
    /*
    this.state.count++
    console.log(this.state.count);
    */

    // 상태를 변화시켜야 UI 가 update 된다.
    this.setState({
      count: this.state.count + 1
    });
  }

  // render() 메소드에서 리턴해주는 jsx 를 활용해서 화면 구성이 된다.
  render(){
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다.</h1>
        <button onClick={this.buttonClicked}>{this.state.count}</button>
      </div>
    )
  }
}


// import 한 곳에 무엇을 리턴해줄지 결정하기
export default App;
