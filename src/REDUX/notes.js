
//for notes see in notes
//Syntax of ACTION
//eg:1
const incNumber = (num)=>{
     return {
         type: 'INCREMENT',
         payload: num 
     }
}
 //eg:2
const decNumber = (num)=>{
       return{
            type:'DECREMENT',
            payload:num //api call 
       }
}

//syntax for REDUCER

const initialState = 0;  //initialState is a normal variable
const chandeTheNumber =(state = initialState , action)=>{

    // if(action.type === 'INCREMENT'){                      //method 1 
    //     //we have to do some operation and then
    //      return state + action.payload  //here payload is whatever user passed  
    // }
    // else if( action.type === 'DECREMENT'){
    //     //some operation if needed
    //     return state - 1;
    // }

    switch (action.type){            //method 2
        case 'INCREMENT': return state + action.payload;
        case 'DECREMENT': return state -1
        default : return state
    }

}

//Syntax for STORE
import {createStore} from 'redux'
const store = createStore(rootreducer)