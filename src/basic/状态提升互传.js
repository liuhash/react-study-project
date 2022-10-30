import {Component} from 'react'
import Jack from "./Jack";
import Rose from "./Rose";

class App extends Component{
    state={
        msg:"you jump i jump"
    }
    render() {
        return(<div>
            <h1>我是App组件</h1>
            <Jack say={this.changeMsg}></Jack>
            <Rose msg={this.state.msg}></Rose>
        </div>)
    }
    changeMsg=(msg)=>{
        this.setState({
            msg:msg
        })
    }
}
