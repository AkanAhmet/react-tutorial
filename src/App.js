
import './App.css';
import Header from "./components/Header.js";
import {useState} from "react";


import AllProps from './components/props/AllProps';

import AllState from './components/state/AllState';
import MountUnmount from './components/use-effect/MountUnmount';
import UsingUseEffect from './components/use-effect/UsingUseEffect';
import CorrectCssMain from './components/UsingCSS/correct/CorrectCssMain';
import FalseCssMain from './components/UsingCSS/false/FalseCssMain';

function App() {

  const [isVisible,setIsVisible] = useState(true);

  return (
    <div className="App" style={{backgroundColor : "orange"}}>
    
  <Header />

  <AllProps />
  <AllState />
 
 <UsingUseEffect />

  {isVisible && <MountUnmount />  }
  <button className = "btn btn-primary mb-3"onClick = {()=> setIsVisible(!isVisible)}>Hide this Component</button>


    <CorrectCssMain />
    <FalseCssMain />
    </div>
  );


}

export default App;
