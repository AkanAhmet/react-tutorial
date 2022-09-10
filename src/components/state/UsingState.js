import {useState} from "react";

export default function UsingState() {

    const [name,setName] = useState("Gamze");
    const [surname,setSurname] = useState("AKAN");

    return(

        <div className = "using-state" style = {{backgroundColor : "purple", color :"white"}}>

            <h1> Using State</h1>
            <hr />
            {name} {surname}


            <button onClick = {() => setName("Burak")}> Change Name</button>
            <button onClick = {() => setSurname("Burak")}> Change Surname</button>


        </div>

    );




}