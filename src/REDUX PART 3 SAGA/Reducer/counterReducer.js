
const initialstate=0
export const counterReducer=(state=initialstate,action)=>{

 switch(action.type){
     case 'AGE_UP_SAGA' : 
           return state+1
     case 'AGE_DOWN' : 
           return state-1
     default: 
           return state
 }

}