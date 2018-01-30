import React from 'react'
 
const ListItem = ({title, isDone}) => {
return (

    <li className="ListItem">
    {title} {isDone ? "Done" : "Not Done"}
    </li>

)
}
 
export default ListItem