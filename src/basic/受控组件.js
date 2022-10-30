import {Component } from'react'
class App extends Component{
    state={
        msg:"hello"
    }
    render() {
        return(
          <div>
              <h1>受控组件</h1>
              <input type="text" value={this.state.msg} onChange={this.handleChange}/>
          </div>
        )
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            msg:e.target.value
        })
    }
}