import {PureComponent} from "react";
import Home from "./Home";
import Mine from "./mine";
import Friend from "./Friend";

class Router_self extends PureComponent{
    state={
        currentHash:""
    }
    componentDidMount() {
        window.addEventListener('hashchange',()=>{
            // console.log('hash变了',window.location.hash)
            this.setState({
                currentHash:window.location.hash.slice(1)
            })
        })
    }

    render() {
        const hash=this.state.currentHash
        console.log(hash)
        return (
            <div>
                <h1>App组件</h1>
                <ul>
                    <li><a href="#/home">首页</a></li>
                    <li><a href="#/my">我的</a></li>
                    <li><a href="#/friend">朋友</a></li>
                </ul>
                {hash==="/home"&&<Home></Home>}
                {hash==="/my"&&<Mine></Mine>}
                {hash==="/friend"&&<Friend></Friend>}
            </div>
        );
    }
}