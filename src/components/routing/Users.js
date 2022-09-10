import {useEffect, useState} from "react";
import {Link, Outlet } from "react-router-dom";

export default function Users() {

    const [users,setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect( ()=> {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .finally(setTimeout(() => setIsLoading(false),750));

    },[]);

    return(
        <>

        <div className="row mt-5">
            <h2>Users</h2>
            <hr />

            
            {isLoading &&
            <div className="column mt-4">
                <div className="alert alert-info">
                    <i className="fa fa-sync fa-spin"> </i>  Users Loading ..
                </div>
            </div>
            }

           {!isLoading &&

                <>
            <div className="col-6 mt-4">

                        <ul className="list-group">

                            {users.map(user => <Link to={`/users/${user.id}`}>  <li className="list-group-item" key={user.id}> {user.name}   </li>   </Link>)}

                        </ul>

                    </div>
                            <div className="col-6 mt-4"> <Outlet /></div>
                       
                </>
            }


        </div>


        </>
    )
}