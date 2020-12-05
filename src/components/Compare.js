import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "@/redux/blogReducer";
import '../scss/about.scss'
import Bar from "@/components/Bar";


const Blog = (props) => {

    let postsElements =
        props.posts.map( p => <div>{p.message}</div>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className='body'>
            <Bar/>
            <h3>My</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div >
                { postsElements }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.blogReducer.posts,
        newPostText: state.blogReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Blog);

