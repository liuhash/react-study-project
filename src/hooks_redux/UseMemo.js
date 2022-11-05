import React, { useMemo, useState} from 'react';

function UseMemo() {
    const total=useMemo(()=>Array.from(new Array(1000000))
        .map((item,index)=>index+1)
        .reduce((prev,item)=>prev+item,0),[])
    const [money,setMoney]=useState(1000)
    return (
        <div>
            <h1>根组件--{total}</h1>
            <h3>钱:{money}</h3>
            <button onClick={()=>{setMoney(money+100)}}>赚钱</button>
        </div>
    );
}


export default UseMemo;