import React , {useState}  from 'react';
import Text from "./../components/containers/Text"


export default function Hook(){
    const [name, setName] = useState("Rati");
    function onClick(){
        setName("Saren")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={onClick}>Chage Name</button>
            <Text
            
            />
        </div>
    )
}