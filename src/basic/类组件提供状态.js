// class Person{
//     // constructor() {
//     //     this.name='zs'
//     //     this.age=19
//     // }
//     name='zs'
//     age=19
// }
// const p=new Person()
// console.log(p)
import {Component } from'react'
import ReactDom from 'react-dom'
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
                {/*<button onClick={()=>this.setState(this.state.count++)}></button>*/}
            </div>
        )
    }
}

