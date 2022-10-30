import {Component} from "react";
import Child from "./child";

class Parent extends Component{
    state={
        name:"",
        Son_wife:""
    }
    render() {
        return(
            <div>
                配偶:
                <input placeholder="请输入配偶名字" onChange={this.handleChange}/>
            <Child name={this.state.name}></Child>
                <div>儿媳的名字:{this.state.Son_wife}</div>
                <Child changeName={this.changeName}></Child>
            </div>

        )
    }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changeName=(name)=>{
        console.log("接收到了",name)
        this.setState({Son_wife:name})
    }
}