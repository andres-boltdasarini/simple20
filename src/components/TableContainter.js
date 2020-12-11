import React from 'react';
import {connect} from 'react-redux';
import Table from "@/components/Table.js";
import {addPost, requestUsers, updateNewPostText,setCurrentPage} from "@/redux/tableReducer";


class TableContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }

    render() {
        return  <>
           <Table {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.tableReducer.items,
        isFetching: state.tableReducer.isFetching,
        totalUsersCount: state.tableReducer.totalUsersCount,
        pageSize: state.tableReducer.pageSize,
        currentPage: state.tableReducer.currentPage,
        posts: state.tableReducer.posts,
        newPostText: state.tableReducer.newPostText,
        todosPerPage: state.tableReducer.todosPerPage,
    }
}


export default connect(mapStateToProps,{requestUsers,updateNewPostText,addPost,setCurrentPage})(TableContainer)