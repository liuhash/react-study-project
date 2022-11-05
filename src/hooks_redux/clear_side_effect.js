import React, {useEffect, useState} from 'react';

function ClearSideEffect() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <div>我点击了{count}次</div>
            <button onClick={()=>setCount(count+1)}>+1</button>
            {
                count<5?<Child count={count}></Child>:"好似好似喵！"
            }
        </div>
    );
}
function Child({count}){
    useEffect(()=>{
        let timer=window.setInterval(()=>{
            console.log("别打了喵")
        },1000)
        return ()=>{
            console.log("被销毁")
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            我是子组件--{count}
        </div>
    )
}
export default ClearSideEffect;