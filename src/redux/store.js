import {combineReducers, createStore} from "redux";
import blogReducer from "@/redux/blogReducer";




let reducers = combineReducers({
    blogReducer: blogReducer
});

let store = createStore(reducers);


export default store;