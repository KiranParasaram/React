import React from 'react'

function Welcome(){
    return(
        <>
        <h1>Welcome kiran kumar !</h1>
        <button>Logout</button>
        </>
    )
}

function Guest(){
    return  <>
          <h1>Please Login</h1>  
          <button>Login</button> 
             </>
}

// const Login = ({loggedin}) => {  //instead of using {loggedin} we can use othername (i:e,propname) a well , but for accessing value of loggedin key we use line:23.
//    if(loggedin){

    const Login=(propname) =>{
    let newname = propname.loggedin
      
    if(newname){
        return <>
        <Welcome/>
        </>
    }

   else{
  return (
      <Guest/>
  )
   }

}

export default Login