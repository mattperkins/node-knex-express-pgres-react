import React from 'react'
 
const ListItem = ({title, isDone}) => {
return (

    <li className={`list-group-item ${isDone ? 'bg-success' : 'bg-danger'}`}>
        {title}      
     <span style={{fontSize: 10}}> ({isDone ? "Done" : "Not Done"})</span>
    </li>

)
}
 
export default ListItem