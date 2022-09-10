import {useState, useEffect} from "react";

export default function UsingUseEffect() {

    const [number,setNumber] = useState(10);
    const [text,setText] = useState("Lorem");

    useEffect ( () => {
        console.log("Use-Effect runs at page loads and all useState changes");
    });

    useEffect ( () => {
        console.log("Use-Effect runs at page loads and number-text usestates changes");
    },[number, text]); // customized for only number and text


    return(

        <div>

        <h1>Using Use Effect</h1>
        <hr />

        <div>
            Number : {number}
        
        <button onClick = {() => setNumber(number+1)}> Increase the Number</button>
        </div>

        <div>
            Text : {text}
        
        <button onClick = {() => setText("ipsum")}> Change the Text</button>
        </div>



        </div>
    )
};