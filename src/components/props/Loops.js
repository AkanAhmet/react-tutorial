

export default function Loops({users}) {

    return(
        

            <ul style = {{backgroundColor : "aquamarine"}}>

            { users.map( (user,index ) => <li key = {user.id} > Length : {user.length} -  Hair Color:{user.hairColor} </li>)}

            </ul>
        
    );


}