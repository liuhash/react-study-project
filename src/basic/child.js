import {Component} from "react";

export default class Child extends Component
{
    state={
        wife:""
    }
    render() {

        return (<div>
            <h3>子组件</h3>
            <div>母亲的名字是：{this.props.name}</div>
            <div>配偶的名字是:<input value={this.state.wife} onChange={this.handleChange}/></div>
        </div>)
    }
    handleChange=(e)=>{
        this.setState({wife:e.target.value})
        this.props.changeName(e.target.value)
    }
}