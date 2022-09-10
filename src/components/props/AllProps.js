import Props from './Props.js';
import Loops from './Loops.js';
import PropTypesUsage from './PropTypesUsage.js';


const users = 
[
  {id : 1,hairColor : "black", length: 172},
  {id : 2,hairColor : "brown", length: 152},
  {id : 3,hairColor : "green", length: 182},

]

const myObj = 
{
  phone : "samsung",
  pc : "toshiba"
};

export default function AllProps(){

    return(
        <>
    <Props name = {"alparslan"} surname = { "Akan"} age ={125} isDeveloper={true} object = {myObj}/>
    <Loops users = {users}/>
    <PropTypesUsage name = {"Burak"} age = {"25"} hobbies = {["chess","series","atari"]} details = {{school: "aöf",city:" eskişehir"}}/>

    </>
    )
};