import React from "react";
import ReactDOM from "react-dom";

//FUNCTION COMPONENT
function Fun1(){
    return (
        <h1>1st function component ka component</h1>
    )
}

function Fun2(){
    return(
        <h2>2nd function component ka component</h2>
    )
}

function Parent(){
    return(
        <>
        <Fun1/>
        <Fun2/>
        </>
    )
}

//CLASS COMPONENT
class Welcome extends React.Component{
    render(){
        return(
            <h3>This component is a class component</h3>
        )
    }
}

ReactDOM.render(
    <>
     <Parent/>
     <Welcome/>
     </>,
    document.querySelector("#root")
)