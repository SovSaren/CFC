import React , {useState}  from 'react';

export default function Hook(){
    const [name, setName] = useState("Rati");
    function onClick(){
        setName("Saren")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={onClick}>Chage Name</button>
        </div>
    )
}