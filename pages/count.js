import React,{useEffect,useState} from 'react';

export default function Counts(){
    const [count, setCount]= useState(100);

    useEffect(()=>{
        console.log(count)
    });
    return(
        <div>
            <h1>Counts Number : {count}</h1>
            <button onClick={()=>setCount(count+1)}>click here</button>
            <button onClick={()=>setCount(count-1)}>click here</button>
        </div>
        
    );
}