
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';
import reducer from "../Reducers" 


const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };