import {Component} from 'react'
import React from "react";
class App extends Component{
    txtRef=React.createRef()
    render() {
        return(
            <div>
                <h1>常见的受控组件</h1>
                <h3>文本框</h3>
                <input type="text" ref={this.txtRef}/>
                <button onClick={this.clickFn}>获取值</button>
            </div>
        )
    }
    clickFn=()=>{
        console.log(this.txtRef.current.value)
    }
}