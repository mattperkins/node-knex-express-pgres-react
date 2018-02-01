import React from 'react'
import axios from 'axios'

import ListItems from './ListItems';
import ListItem from './ListItem'

class ItemsBody extends React.Component {

    state = {
        loading: true,
        todos: {}
    }
    
async componentDidMount() {
    
    try {
        const res = await axios.get('/api/todo') 
        console.log(res)
        this.setState({
            loading: false,
            todos: res.data
        })
    }
    catch  (err) {
        return 'erroooorrr!!!'
    }
} 
 

render() {
    if(this.state.loading === true){
        return (
            <h1>Loading...</h1>
        )
    }
return (
    <div>
        <ListItems>
            {this.state.todos.map(todo => {
                return <ListItem 
                    key={todo.id} 
                    title={todo.title} 
                    isDone={todo.is_done} 
                    id={todo.id}
                />
            })}
            

        </ListItems>

    </div>
)
}
}
export default ItemsBody