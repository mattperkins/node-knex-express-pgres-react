import React from 'react'
import { Link } from 'react-router-dom'
 
const TopNav = () => {
return (
<div className="TopNav">
  <Link to="/">Home</Link>
  <Link to="/new" className="btn btn-active white-txt">Add Todo</Link>
</div>
)
}
 
export default TopNav