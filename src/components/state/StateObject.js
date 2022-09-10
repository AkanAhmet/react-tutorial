
import {useState} from "react";


export default function StateObject() {

    const [user,setUser] = useState({name:"ahmet", surname: "AKAN", gender : "male", age:25, isDeveloper: true});

    return(

        <div>

        <h1>
            State Object
        </h1>
        <hr />

        <p> {user.name} - {user.surname} - {user.gender} - {user.age} - {user.isDeveloper.toString()} </p>

        <button onClick = { () => setUser({ ...user, name:"burak",age:27, isDeveloper: false})}>  
            change User credentials.
        </button>

        </div>
    )


};
