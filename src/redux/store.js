import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "@/redux/blogReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    form: formReducer
});

let store = createStore(reducers);
window.store = store;


export default store;