import {usersAPI} from "@/api";


const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS = 'SET_USERS';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_CURRENT = 'SET_CURRENT'

let initialState = {
    items: [
        {id: 133, firstName: 'Bill'},
        {id: 150, firstName: 'Sue'},
        {id: 22, firstName: 'Ash'},
    ],
    isFetching: true,
    posts: [
        {id: 1, message: 'test'},
        {id: 2, message: 'It',},
        {id: 3, message: 'Boom'},
        {id: 4, message: 'Day'},
    ],
    newPostText: 'it-test',
    currentPage: 1,
    todosPerPage: 4}

const tableReducer = (state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case SET_USERS: {
            return { ...state, items: action.items }
        }
        case ADD_POST: {
            let newPost = {
                id: 55,
                firstName: state.newPostText,
            };
            return {
                ...state,
                items: [...state.items, newPost],
                newPostText: action.newText
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_CURRENT: {
            return {
                ...state,
                currentPage: action.newText
            }
        }
        default:
            return state
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const setUsers = (items) => ({type: SET_USERS, items })
export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setCurrentPageCreator = (text) => ({type: SET_CURRENT, newText: text})


export const requestUsers = () => {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers()
         .then(response => {
                 dispatch(toggleIsFetching(false))
                 const items = response.data
                 dispatch(setUsers(items))
             })
    }
}
export const updateNewPostText = (text) => {
    return (dispatch) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }
}
export const  addPost = (text) => {
    return (dispatch) => {
        dispatch(addPostActionCreator(text));
    }
}
export const  setCurrentPage = (text) => {
    return (dispatch) => {
        dispatch(setCurrentPageCreator(text));
    }
}





export default tableReducer