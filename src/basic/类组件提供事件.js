import {Component } from'react'
class App extends Component{
    state={
        msg:'hello',
        count:0
    }
    render() {
        return(
            <div>
                <div>msg is {this.state.msg}</div>
                <div>count is {this.state.count}</div>
                <button onClick={this.clickFn.bind(this)}>+1</button>
            </div>
        )
    }
    clickFn(){
        // e.preventDefault()
        this.setState({count:this.state.count+1})
    }
}