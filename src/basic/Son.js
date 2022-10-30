import React, {Component} from 'react';
import GrandSon from "./grandSon";

class Son extends Component {
    render() {
        return (
            <div>
                <h3>我是子组件</h3>
                <GrandSon></GrandSon>
            </div>
        );
    }
}

export default Son;