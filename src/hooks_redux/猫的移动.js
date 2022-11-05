import React, {useEffect, useState} from 'react';
import img from "../assets/ex.jfif"
function useMouse()
{
    const [position,setPosition]=useState({
        x:0,
        y:0
    })
    useEffect(()=>{
        const move=(e)=>{
            setPosition({
                x:e.pageX,
                y:e.pageY
            })
        }
        window.addEventListener("mousemove",move)
        return ()=>{
            window.removeEventListener("mousemove",move)
        }
    },[])
    return position
}
function Cat() {
    const {x,y}=useMouse()
    return <img src={img} alt={""} style={{position:"absolute",left:x,top:y,width:200,height:200}}/>
}

export default Cat;