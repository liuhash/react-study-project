import React, {Component} from 'react';

class App extends Component {
    state={
        isShowInput:false
    }
    inputRef=React.createRef()
    render() {
        return (
            <div>
                <h1>setstate练习</h1>
                {this.state.isShowInput? <button onClick={this.handleClick}>发表评论</button>:<input ref={this.inputRef} type="text" placeholder="请输入你的评论"/>}
            </div>
        );
    }
    handleClick=(e)=>{
        this.setState({isShowInput:true},()=>{
            this.inputRef.current.focus()
        })
    }
}

