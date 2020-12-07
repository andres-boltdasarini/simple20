import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "@/redux/blogReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;


export default store;