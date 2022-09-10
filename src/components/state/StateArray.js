import { useState } from "react";

export default function StateArray() {

    const [cities,setCities] = useState(["Ankara","Eskişehir","Konya"]);
    return(

        <div style = {{backgroundColor : "green"}}>

        <h1> State Array</h1>
        <hr />

        <ul>
                {cities.map( (city,key) => <li key={key}> {city} </li>)}
        </ul>

        <button onClick = { () => setCities([...cities,"New York"])}> Add New York City</button>



        </div>

    );
}