import React from "react";

class App extends React.Component {
    state={
        user:"",
        content:"",
        list:[{"user":"刘德华","content":"冰雨"},
            {"user":"刘博严","content": "非常满意！"},
            {"user":"丁真","content": "鉴定为真！"}]
    }
    render() {
        return (
            <div className="app">
                <div>
                    <input className="user" type="text" placeholder="请输入评论人" onChange={this.handleChange}/>
                    <br />
                    <textarea
                        className="content"
                        cols="30"
                        rows="10"
                        placeholder="请输入评论内容"
                        onChange={this.handleChange}
                    />
                    <br />
                    <button onClick={this.handleCommit}>发表评论</button>
                    <button onClick={this.clearAllComment}>清空评论</button>
                </div>
                {
                    this.state.list.length===0?<div className="no-comment">暂无评论</div>:
                        <ul className="scroll">
                            {this.state.list.map(item=><li>
                                <h3>评论人：{item.user}</h3>
                                <p>评论内容：{item.content}</p>
                                <button name={item.user} onClick={this.deleteOneComment}>删除</button></li>)}
                        </ul>
                }
            </div>
        )
    }
    handleChange=(e)=>{
        const name=e.target.className
        this.setState({[name]:e.target.value})
    }
    handleCommit=()=>{
        if(this.state.user!=null && this.state.content!=null)
        {
            const user=this.state.user
            const content=this.state.content
            const newList=this.state.list
            newList.push({"user":user+"","content":content+""})
            this.setState({
                list:newList,
                user:"",
                content:""
            })
        }
    }
    clearAllComment=()=>{
        this.setState({
            list: []
        })
    }
    deleteOneComment=(e)=>{
        const name=e.target.name
        const newList=this.state.list
        for(let i=0;i<newList.length;i++)
        {
            if(newList[i].user===name)
            {
                newList.splice(i,1)
            }
        }
        this.setState({
            list:newList
        })
    }
}