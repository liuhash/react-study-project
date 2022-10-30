import {Component } from'react'
class App extends Component{
    state={
        count:0,
        list:['abc','efg','hij']
    }
    render() {
        return(
            <div>
                <div>count is {this.state.count}</div>
                <ul>{this.state.list.map((item)=>(<li key={item}>{item}</li>))}</ul>
                <button onClick={this.clickFn.bind(this)}>+1</button>
                <button onClick={this.add}>增加元素</button>
            </div>
        )
    }
    clickFn(){
        this.setState({count:this.state.count+1})
    }
    add=()=>{
        this.setState({
            list:[...this.state.list,'liu']
        })
    }
}