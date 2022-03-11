import React from 'react';
import Login from './Login';
import Garage from './Garage';
import Ternarygoal from './Ternartgoal';

let cars=["BMW","FORD","BENTLY"]

export function App(){
    return(
        <>
        <Login loggedin={false}/> 
        <Garage carprop={cars}/>
        <Ternarygoal isGoal={false}/>
        </> 
    )
}

