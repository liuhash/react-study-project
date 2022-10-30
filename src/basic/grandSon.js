import React, {Component} from 'react';
import {Consumer} from "./index";
class GrandSon extends Component {
    render() {
        return (
            <div>
                <Consumer>{ (value)=><h5 style={{color:value}}>我是孙组件--{value}</h5> }</Consumer>
            </div>
        );
    }
}

export default GrandSon;