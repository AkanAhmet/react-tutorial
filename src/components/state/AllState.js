
import UsingState from "./UsingState.js";
import StateArray from './StateArray';
import StateObject from "./StateObject";
import StateInput from "./StateInput.js";
import StateInpuWithObject from "./StateInpuWithObject";


export default function AllState() {

    return (
        
        <div style = {{backgroundColor : "blue"}}>

     <UsingState />
     <StateArray />
     <StateObject />
     <StateInput />
     <StateInpuWithObject />

    </div>
    )
}