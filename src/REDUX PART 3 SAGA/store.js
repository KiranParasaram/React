import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./Reducer/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { watchAgeUp } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer , applyMiddleware(sagaMiddleware) )

sagaMiddleware.run(watchAgeUp)

export default store