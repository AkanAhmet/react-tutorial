

// export default function Props(props) {

//     return(

//         <div style={{backgroundColor: "lightblue"}}>
//             <ul>
//                 <li>{props.name}</li>
//                 <li>{props.surname}</li>
//                 <li>{props.age}</li>
//                 <li>{"is developer:"+props.isDeveloper.toString()}</li>
//                 <li>{props.object.toString()}</li>
//             </ul>
//         </div>
//     )
// }

export default function Props({name,surname,age,isDeveloper,object}) {

    return(

        <div style={{backgroundColor: "lightblue"}}>

        <h1> Props :</h1>
        <hr />
        
            <ul>
                <li>{name}</li>
                <li>{surname}</li>
                <li>{age}</li>
                <li>{"is developer:"+isDeveloper.toString()}</li>
                <li>{object.toString()}</li>
            </ul>
        </div>
    )
}