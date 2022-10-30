import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Father from "./father";

const {Provider,Consumer}=React.createContext()
export {Consumer}
class App extends Component{
    state={
        color:"red"
    }
    render() {
        return(
            <Provider value={this.state.color}>
                <div>
                    <h1>App组件</h1>
                    <Father></Father>
                </div>
            </Provider>
        )
    }
}