import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const SingleTodoList = ({title, isDone, onEdit, id}) => {
return (
    
<div className={`card ${isDone ? 'bg-success' : 'bg-danger'} white-txt`}>
  <div className="card-block">
    <div className="card-title">
        <h4>{title}</h4>
    </div>
    <div className="card-text">
        {isDone ? 'This todo has been completed' : 'This todo is unfinished'}
    </div>
    <div className="btn-group">
        <button className="btn btn-delete" onClick={()=>{
            axios.delete(`/api/todo/${id}`).then(()=>{
                this.props.history.push('/')
            })
        }}>Delete</button>
        <button className="btn btn-edit" onClick={onEdit}>Edit</button>
    </div>
  </div>
</div>
)
}
 
export default withRouter(SingleTodoList)