
import {useState} from "react";

export default function StateInput() {

    const [name,setName] = useState("Ahmet");
    const [surname,setSurname] = useState("Akan");
    const [age,setAge] = useState(25);
    
    // REACT doesnt!!! support two way binding

    // const onChangeName = (event) => setName(event.target.value) ;
    // const onChangeSurname = (event) => setSurname(event.target.value);
    // const onChangeAge =  (event) => setAge(event.target.value) ;

    const changeValue = (e) => {

        const name = e.target.name;

        if(name === "name") {
            setName(e.target.value)
        }
        if(name === "surname") {
            setSurname(e.target.value)
        }
        if(name === "age") {
            setAge(e.target.value)
        }

    };

    return (

        <div>

        <h1 > STATE INPUT</h1>
        <hr />

        <div style={{color:"red"}}> User Info : {name} - {surname} - {age}</div>
        <div>
            <input name = "name" type="text" placeholder="name" value = {name} onChange = {changeValue} />
            <input name = "surname" type="text" placeholder="surname" value = {surname} onChange = { changeValue}/>
            <input name = "age" type="number" placeholder="age" value={age} onChange = { changeValue}/>
        </div>


        </div>
    )



};