import { combineReducers } from "redux";
import handleMyCounter from "./counterReducer";


const rootreducer = combineReducers( {
      handleMyCounter
} )

export default rootreducer