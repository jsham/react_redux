import React, {Component} from "react";
import store from "../store";
export default class DisplayNumber extends Component {
    state = {number: store.getState().number} // store 의 값을 저장할 지역 변수 (state) 선언 

    // Constructor 를 이용하여 state 가 변경되었음을 통보 받는다.
    constructor(props) {
        super(props);  // constructor 이용하려면 반드시 Super method를 호출 해야함. 
        store.subscribe(function(){ // 구독 하도록 등록  
            this.setState({number: store.getState().number});
        }.bind(this));
    }
    render() {
        return (
            <div>
                <h1> Display Number</h1>
                <input type="text" value={this.state.number} readOnly></input>
            </div>
        )
    }
}