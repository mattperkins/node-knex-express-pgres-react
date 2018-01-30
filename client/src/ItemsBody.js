import React from 'react'
import ListItems from './ListItems';
import ListItem from './ListItem'

class ItemsBody extends React.Component {

render() {

return (
    <div>
        <ListItems>
            <ListItem text="List Item Singular" />
        </ListItems>
    </div>
)
}
}
export default ItemsBody