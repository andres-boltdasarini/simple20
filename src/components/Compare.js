import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator} from "@/redux/blogReducer";
import '../scss/about.scss'
import {Field, reduxForm} from "redux-form";




let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component='textarea' placeholder={"Post message"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    const Post = (props) => {
        return (
            <div >
                {props.message}
            </div>
        )
    }
    let postsElements =
        [...props.posts]
            .reverse()
            .map( p => <Post message={p.message}/>);



    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className='body'>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

