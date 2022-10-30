import React, {Component} from 'react';

class Friend extends Component {
    render() {
        return (
            <div>
                我的朋友---<button onClick={this.handleClick}></button>
            </div>
        );
    }
    handleClick=()=>{
        console.log("我需要登录")
        this.props.history.push('/home')


    }
}

export default Friend;