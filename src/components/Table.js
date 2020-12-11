import React from 'react';
import '../scss/about.scss'
import Bar from "@/components/Bar";

 class Table extends React.Component {
     handlClick = (event) => {
         const a = Number(event.target.id)
         this.props.setCurrentPage(a);
     }
     render() {
         let newPostElement = React.createRef();

         let onAddPost = () => {
             let text = newPostElement.current.value;
             this.props.addPost(text);
         }
         let onPostChange = () => {
             let text = newPostElement.current.value;
             this.props.updateNewPostText(text);
         }


         const indexOfLastTodo = this.props.currentPage * this.props.todosPerPage
         const indexOfFirstTodo = indexOfLastTodo - this.props.todosPerPage

         let postsElementsFirstName = this.props.items.map(p => <div>{p.firstName}</div>).slice(indexOfFirstTodo, indexOfLastTodo)
         let postsElementsId = this.props.items.map(p => <div>{p.id}</div>).slice(indexOfFirstTodo, indexOfLastTodo)


         const pageNumbers = [];
         for (let i = 1; i <= Math.ceil(this.props.items.length / this.props.todosPerPage); i++) {
             pageNumbers.push(i);
         }
         const renderPageNumbers = pageNumbers.map(number => {
             return (
                 <span
                     key={number}
                     id={number}
                     onClick={this.handlClick}
                 >
                     {number}
                 </span>
             );
         })
         return <div className='body'>
             <Bar/>
                     {renderPageNumbers}
             <table border="1">
                 <tr>
                     <th>Id</th>
                     <th>FirstName </th>
                 </tr>
                 <tr>
                     <td>{postsElementsId}</td>
                     <td>{postsElementsFirstName}</td>
                 </tr>
             </table>
             <div>
                 <div>
                     <input onChange={ onPostChange } ref={newPostElement}
                            value={this.props.newPostText}/>
                 </div>
                 <div>
                     <button onClick={ onAddPost }>Add post</button>
                 </div>

             </div>
         </div>
     }
}
export default Table