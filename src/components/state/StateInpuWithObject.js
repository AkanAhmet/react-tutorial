
import {useState} from "react";

export default function StateInpuWithObject() {

    
    // REACT doesnt!!! support two way binding

    const [user,setUser] = useState({name:"Ahmet",surname:"Akan",age:25});

    const onChangeValue = (e) => {

            setUser({ ...user,[e.target.name]: e.target.value});

    };

    return (

        <div>

        <h1 > STATE INPUT WITH OBJECT</h1>
        <hr />

        <div style={{color:"purple"}}> User Info : {user.name} - {user.surname} - {user.age}</div>

        <div>
            <input name = "name" type="text" placeholder="name" value = {user.name} onChange = {onChangeValue} />
            <input name = "surname" type="text" placeholder="surname" value = {user.surname} onChange = { onChangeValue}/>
            <input name = "age" type="number" placeholder="age" value={user.age} onChange = { onChangeValue} />
        </div>


        </div>
    )



};