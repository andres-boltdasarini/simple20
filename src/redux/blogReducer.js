const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: '100х зум. Увидеть невозможное.'},
        {id: 2, message: 'Сверхвысокое разрешение видео'},
        {id: 3, message: 'Получайте 33 МП снимки из ваших 8К видео'},
        {id: 4, message: 'Снимайте как на экшн-камеру'}
    ],

    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: action.newPostBody,

            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST,newPostBody})
export default profileReducer;