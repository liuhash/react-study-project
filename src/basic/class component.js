import {Component} from "react";
import ReactDOM from "react-dom";
class Hello extends Component{
    render() {
        return <div>I'm hello Component</div>
    }
}
const element=(
    <div>
        <h1>class component</h1>
        <Hello></Hello>
        <Hello></Hello>
    </div>
)
