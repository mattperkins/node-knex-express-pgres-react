import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({title, isDone, id}) => {
return (

    <Link to={`/${id}`} className={`list-group-item ${isDone ? 'bg-success' : 'bg-danger'}`}>
        {title}      
     <span style={{fontSize: 10}}> ({isDone ? "Done" : "Not Done"})</span>
    </Link>

)
}
 
export default ListItem