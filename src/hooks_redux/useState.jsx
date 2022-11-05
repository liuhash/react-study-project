import React, {useState} from 'react';


function UseState() {
    const [count,setCount]=useState(0)
    const [money,setMoney]=useState(1000)
    return (
        <div>
            <div>我点击了{count}次</div>
            <div>我的金钱:{money}</div>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setMoney(money+100)}>加钱</button>

        </div>
    );
}


export default UseState;
