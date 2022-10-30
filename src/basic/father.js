import React, {Component} from 'react';
import Son from "./Son";

class Father extends Component {
    state={
        color:"red"
    }
    render() {
        return (
            <div>
             <h2>我是父组件</h2>
                <Son></Son>
            </div>
        );
    }
}

export default Father;