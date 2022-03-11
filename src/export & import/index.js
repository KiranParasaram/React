import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";   //Default import
import {App,Map} from "./App";   //Named import


ReactDOM.render(
    <>
    <App/>
    <Map/>
    </>,

    document.querySelector("#root")
)