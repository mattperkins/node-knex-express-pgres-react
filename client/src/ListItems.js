import React from 'react'
 
const ListItems = ({children}) => {
return (
<div>

  <ul className="ListItems">
      {children}
  </ul>

</div>
)
}
 
export default ListItems