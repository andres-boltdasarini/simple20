import { reducer as formReducer } from 'redux-form'
import blogReducer from "@/redux/blogReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import tableReducer from "@/redux/tableReducer";

let reducers = combineReducers({
    blogReducer: blogReducer,
    tableReducer: tableReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;


export default store;