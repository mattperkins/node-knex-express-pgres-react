import React from 'react'
import axios from 'axios'
import TodoCard from './TodoCard';

class SingleItem extends React.Component {

constructor(props) {
super(props)

    this.state = {
     loading: true,
     todos: {}
}
}

componentWillMount() {
    const id = this.props.match.params.id
    axios.get(`/api/todo/${id}`).then((res)=> {
        this.setState({
            loading: false,
            todo: res.data
        })
    })
}


render() {
    if(this.state.loading){
        return (
            <h1>Loading...</h1>
        )
    }
return (

    <div>
        <TodoCard 
            title={this.state.todo.title} 
            isDone={this.state.todo.is_done}
            id={this.state.todos.id}
        />
    </div>

)}}

export default SingleItem