import {Component } from'react'
class App extends Component{
    state={
        username:"hello",
        desc:"",
        city:0,
        agree:false
    }
    render() {
        return(
            <div>
                <h1>受控组件</h1>
                <h3>文本框</h3>
                <div>
                    姓名
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <h3>文本域</h3>
                <div>
                    <textarea name="desc" value={this.state.desc} onChange={this.handleChange} cols="30" rows="30"></textarea></div>
                <h3>
                    下拉框
                </h3>
                <div>
                    选择城市
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="1">背景</option>
                        <option value="2">一二</option>
                        <option value="3">三十</option>
                        <option value="4">物流</option>
                        <option value="5">七八</option>
                    </select>
                </div>
                <h3>复选框</h3>
                <div>是否同意协议？<input name="check" type="checkbox" checked={this.state.agree} onChange={this.handleChange} /></div>
            </div>
        )
    }
    // changeUsername=(e)=>{
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // changeDesc=(e)=>{
    //     this.setState({
    //         desc:e.target.value
    //     })
    // }
    // changeCity=(e)=>{
    //     this.setState({
    //         city:e.target.value
    //     })
    // }
    // changeCheckBox=(e)=>{
    //     this.setState({
    //         agree:e.target.checked
    //     })
    // }
    handleChange=(e)=>{
        const {name,type}=e.target
        this.setState({
            [name]:type==='checkbox'?e.target.value:e.target.checked
        })
    }
}