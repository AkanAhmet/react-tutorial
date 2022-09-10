
import {useState,useEffect} from "react";
import axios from "axios";

export default function UsingFFetchAndAxiosetch() {

    const[users,setUsers] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    
    useEffect(()=> {

    //     fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json())
    // .then((data) => setUsers(data))
    //  .finally(() => setIsLoading(false));

    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .finally(() => setTimeout(() => setIsLoading(false),1000));

    });

    
    return(

        <div>


        <div className="row mt-4">

        <h1>Users</h1>  
        <hr />

        </div>

       {isLoading &&

        <div className="row">
            <div className="column">

            <div className="alert alert-info">
                <i className=" fa fa-sync-alt fa-spin me-2"></i>   Users Loading...
            </div>

            </div>
        </div>

    }

    {!isLoading &&
        <div className="row mt-4">

        <div className = "column">

        <ul className="list-group">
    
         {users.map(user => <li className="list-group-item" key={user.id}>  {user.id} - {user.name} -({user.username}) </li>  )}
            
        </ul>


        </div>

        </div>
    }

        </div>
    )
}