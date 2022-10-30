import React, {Component} from 'react';

class SetState extends Component {
    state={
        count:0
    }
    render() {
        return (
            <div>
               <div>点击次数--{this.state.count}</div>
               <button onClick={this.handleClick}>加1</button>
            </div>
        );
    }
    handleClick=()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
    }
}

export default SetState;