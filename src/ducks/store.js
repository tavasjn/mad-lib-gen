import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import inputsReducer from './inputsReducer';

const rootReducer = combineReducers ({
    inputsReducer
})

export default createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
)