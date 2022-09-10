import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from "./components/fetching/Main.js";
import RoutingMain from './components/routing/RoutingMain';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import FormMain from './components/forms/FormsMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>

    {/* <App /> */}

   {/* <Main /> */ }

     <RoutingMain /> 

   {/* < FormMain /> */}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
