import React from "react";
import ReactDOM from "react-dom";

function Hello(){   // function component --> Name of the component->Hello
    return (
        <>   //Fragment
        <h1>HELLOWORLD</h1>   //component //JSX

         <div>Iam div tag</div>    //component  //JSX 
         </>
         
    )
} 

function child(){
    return(
        <h2>KIRAN KUMAR</h2>
    )
}

function parent(){
    return(
        <>
        <Hello/>
        <child/>
        </>
    )
}


ReactDOM.render(             //==> ReactDOM.render( [React element/React component],[DOM element] )
    <>
    <Hello/>               //React comonent
                       
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda aliquid modi tempora eos reprehenderit inventore quibusdam ratione repellat, consequatur itaque necessitatibus delectus sequi, quaerat et omnis! Iste, eveniet nemo.</p>             //React component

    <parent/>
    </>,

    document.querySelector("#root")  //DOM  element
)