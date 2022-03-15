
//this saga is middle b/w action and reducer //This is actually uses in api calls 

import { takeEvery,put,delay } from 'redux-saga/effects'


function* age(){  //This is generator function
  yield delay(2000);         //2 sec of delay
  yield put({type:'AGE_UP_SAGA' , payload: 1}) //this type:'AGE_UP_SAGA' is passed to reducer instead of old action type 
 }

export function* watchAgeUp(){
     yield takeEvery ('AGE_UP',age)
}