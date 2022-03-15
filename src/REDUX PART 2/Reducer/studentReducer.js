
const initialstate = []

const studentReducer=(state = initialstate ,action)=>{
    
    switch(action.type){
        case 'ADD_STUDENT' : 
            return [ ...state , action.payload ]
         
        default :
            return state;
    }

}

export default studentReducer