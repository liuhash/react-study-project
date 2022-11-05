import React, {useEffect, useState} from 'react';


function UseEffect() {
    const [count,setCount]=useState(0)
    const [money,setMoney]=useState(1000)
    useEffect(()=>{
        document.title=`当前点击了${count}次`
    })
    return (
        <div>
            <div>我点击了{count}次</div>
            <div>我的金钱:{money}</div>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setMoney(money+100)}>加钱</button>

        </div>
    );
}
export default UseEffect