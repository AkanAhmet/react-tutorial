
import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function User() {

    const {id} = useParams();
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {

        setIsLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users/`+id)
        .then((res) => setUser(res.data))
        .then(setTimeout(() => setIsLoading(false),400))

    },[id]);




    return(

        <>

            <div className="row mt-4">
                <h2>User {id}</h2>

        {isLoading &&
                <div className="column mt-3">
                <div className="alert alert-info">
                    <i className="fa fa-sync fa-spin"></i> User Credentials Loading ..
                </div>
                </div>  }


         {!isLoading &&
                <div className="column mt-3">

                <ul className="list-group">

                <li className="list-group-item"> <b>Name : </b> <span> {user.name} </span>  </li> 
                <li className="list-group-item"> <b>Username : </b> <span> {user.username} </span>  </li> 
                <li className="list-group-item"> <b>Email : </b> <span href = {`mailto:${user.email}`}> {user.email} </span>  </li> 
                <li className="list-group-item"> <b>Website : </b> <span> {user.website} </span>  </li> 

                </ul>
                    
                </div> }
            </div>

        </>
    )
}