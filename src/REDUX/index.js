import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import store from './store';
import { Provider } from 'react-redux'



ReactDOM.render(
 
  <Provider store={ store }>
      <App/>
  </Provider>,
 
    document.querySelector("#root")

)


//react-redux is the official redux UI binding library for react 
// in line:11 1st store is KEYWORD and  / 2nd store is from import  

//we can use these provider and all these in App.js file also