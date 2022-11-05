import React, {memo, useCallback, useState} from 'react';

function UseCallBack() {
    const [count,setCount]=useState(5)
    const [money,setMoney]=useState(1000)
    const help=useCallback(()=>{
        setCount(count+1)
    },[count])
    return (
        <div>
            <h1>根组件--{count}</h1>
            <h3>钱:{money}</h3>
            <button onClick={()=>{setCount(count-1)}}>打豆豆</button>
            <button onClick={()=>{setMoney(money+100)}}>赚钱</button>
            <hr/>
            {count>0?<DouDou count={count} help={help}></DouDou>:"豆豆被打死了！"}
        </div>
    );
}
const DouDou=memo(({count,help})=>{
    console.log("豆豆更新了")
    return (
        <div>
            <h3>豆豆被打了--{count}次</h3>
            <button onClick={help}>续命</button>
        </div>
    )
})

export default UseCallBack;