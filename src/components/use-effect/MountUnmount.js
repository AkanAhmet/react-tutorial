import { useEffect} from "react";

export default function MountUnmount() {


    useEffect ( () => {
        console.log("Use-Effect runned");
    });

    useEffect ( () => {

        // [] Using for catching Mounting
        console.log("Component Mounted");

        // return Using for catching Unmounting
        return () => console.log("Component Unmounted");

    },[]); 


    return(

        <div style = {{backgroundColor: "azure"}}>

        <h1>Mount - Unmount, view mount status at F12 - Console</h1>
        <hr />

        </div>
    )
};