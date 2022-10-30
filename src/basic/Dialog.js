import React, {Component} from 'react';

class Dialog extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <h3>我是标题</h3>
                </div>
                <div className="content">我是内容{this.props.children}</div>
                <div>
                    <button>关闭</button>
                    <button>确定</button>
                </div>
            </div>
        );
    }
}

export default Dialog;