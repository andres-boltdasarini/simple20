import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator} from "@/redux/blogReducer";
import '../scss/about.scss'
import {Field, reduxForm} from "redux-form";
import Bar from "@/components/Bar";




let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component='textarea' placeholder={"Сообщение"}/>
        </div>
        <div>
            <button>Добавить</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const Blog = (props) => {
    const Post = (props) => {
        return (
            <div >
                {props.message}
            </div>
        )
    }
    let postsElements =
        [...props.messages]
            .reverse()
            .map( p => <Post message={p.message}/>);



    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className='body'>
            <Bar/>
            <h3>характеристики</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        messages: state.blogReducer.messages,
        newPostText: state.blogReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog);

